document.getElementById('form').addEventListener('submit', function (e) {
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const terms = document.getElementById('terms').checked;

    if (!email || !username || !password || !terms) {
        e.preventDefault(); 
        alert('Por favor, complete todos los campos y acepte los términos y condiciones.');
    }
});
