// Personalize these!
const HER_NAME = "Shruti Shukla";
const PHOTOS = [
    "https://iili.io/2pF6Vbs.png",  // Add her photo filenames here
    "https://iili.io/2pF6G5X.jpg",
];

// Load photos
const photoGrid = document.getElementById("photoGrid");
PHOTOS.forEach(photo => {
    const img = document.createElement("img");
    img.src = `photos/${photo}`;  // Ensure photos are in a 'photos' folder
    photoGrid.appendChild(img);
});

// Show surprise message
function showSurprise() {
    const surpriseDiv = document.getElementById("surprise");
    surpriseDiv.innerHTML = `
        <p>🕉️ <strong>Lord Krishna says:</strong> "You are never alone. I am always with you, guiding you."</p>
        <p>🔱 <strong>Mahadev says:</strong> "Stay strong, for every challenge is a step towards greatness."</p>
        <p>🌟 May your life be filled with divine blessings, ${HER_NAME}! 🌟</p>
    `;
}
