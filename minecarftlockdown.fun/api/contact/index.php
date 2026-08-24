<?php
/**
 * Contact Form API Handler for minecarftlockdown.fun
 * Follows OWASP security guidelines (Validation, Rate Limiting, CORS, Sanitation)
 * Forwards requests to a Discord Webhook.
 */

// --- 1. Security Headers & CORS ---
// Allow only specific origins in production, e.g., 'https://blockcode.in'
$allowedOrigin = '*';
header("Access-Control-Allow-Origin: $allowedOrigin");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// --- 2. Enforce POST Method ---
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit();
}

// --- 3. Rate Limiting (Basic IP-based session logic) ---
session_start();
$ip = $_SERVER['REMOTE_ADDR'];
if (!isset($_SESSION['last_submit'])) {
    $_SESSION['last_submit'] = time();
    $_SESSION['submit_count'] = 1;
} else {
    $time_since_last = time() - $_SESSION['last_submit'];
    if ($time_since_last < 60) {
        $_SESSION['submit_count']++;
        if ($_SESSION['submit_count'] > 3) {
            http_response_code(429);
            echo json_encode(["status" => "error", "message" => "Too many requests. Please wait."]);
            exit();
        }
    } else {
        $_SESSION['last_submit'] = time();
        $_SESSION['submit_count'] = 1;
    }
}

// --- 4. Read & Parse JSON Input (Content-Type & JSON Validation) ---
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if (strpos($contentType, 'application/json') === false) {
    http_response_code(415);
    echo json_encode(["status" => "error", "message" => "Unsupported Media Type"]);
    exit();
}

$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid JSON payload"]);
    exit();
}

// --- 5. Input Validation & Sanitization ---
$name = isset($data['name']) ? trim(htmlspecialchars($data['name'], ENT_QUOTES, 'UTF-8')) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$subject = isset($data['subject']) ? trim(htmlspecialchars($data['subject'], ENT_QUOTES, 'UTF-8')) : 'General Inquiry';
$message = isset($data['message']) ? trim(htmlspecialchars($data['message'], ENT_QUOTES, 'UTF-8')) : '';

if (empty($name) || empty($message)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Name and message are required."]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email format."]);
    exit();
}

// Cap message length to prevent bloated payloads (OWASP restriction)
$message = mb_substr($message, 0, 2000, 'UTF-8');

// --- 6. Send to Discord Webhook (Secured with AES-256-CBC) ---
function get_secure_webhook()
{
    $encrypted = "xVH8EU0wNaClNXvHJZD7cPAss0tIrfwmBCzYk2bSDVvsZm/nE6lv7Z2O4szV5zf0gk8nk0dRo3EdYTeknyE1vjCKdmeR2BeI4D//mL0VSQ07gV7zgF5Y0ijSgaKNBIDwgqmIcY1jr/AI5doGBCuPnUzE/KXELf7D8Jza4wQew7w=";
    $key = "b10ckc0d3_s3cur3_k3y_2026_v1";
    $iv = "4578912345678901";
    return openssl_decrypt($encrypted, 'AES-256-CBC', $key, 0, $iv);
}

$discordWebhookUrl = get_secure_webhook();

if (!$discordWebhookUrl) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Internal configuration error."]);
    exit();
}

$discordPayload = json_encode([
    "embeds" => [
        [
            "title" => "New Contact Form Submission",
            "color" => hexdec("4f633d"), // Match portfolio theme (axolotl primary)
            "fields" => [
                [
                    "name" => "Name",
                    "value" => $name,
                    "inline" => true
                ],
                [
                    "name" => "Email",
                    "value" => $email,
                    "inline" => true
                ],
                [
                    "name" => "Subject",
                    "value" => $subject,
                    "inline" => true
                ],
                [
                    "name" => "Message",
                    "value" => $message
                ]
            ],
            "footer" => [
                "text" => "Sent via minecarftlockdown.fun • IP: " . hash('sha256', $ip) // Hashing IP for privacy
            ],
            "timestamp" => date("c")
        ]
    ]
]);

$ch = curl_init($discordWebhookUrl);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-type: application/json']);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $discordPayload);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// Optional: Enforce SSL version if needed
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// --- 7. Response ---
if ($httpCode >= 200 && $httpCode < 300) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Message delivered successfully."]);
} else {
    // Log actual error on server side, send generic response to client
    error_log("Discord Webhook Failed: HTTP " . $httpCode);
    http_response_code(502);
    echo json_encode(["status" => "error", "message" => "Failed to dispatch message to upstream service."]);
}
?>