const input = document.getElementById('password');
const toggle = document.getElementById("togglePassword");
toggle.addEventListener('click', () => {
    const ispassword = ispassword = input.type === 'password';
    input.type = ispassword ? 'text' : 'password';
    toggle.className = ispassword
     ? "ri-eye-off-line togglePassword"
     : "ri-eye-line togglePassword";
});