// Beta Tester Credentials (Stored in code for testing - NOT for production)
const betaTesters = [
    {
        id: "beta1",
        username: "ishant",
        password: "pass",
        name: "Beta Tester 1"
    },
    {
        id: "beta2",
        username: "kartik",
        password: "kartik123",
        name: "Beta Tester 2"
    },
    {
        id: "admin",
        username: "bhasha",
        password: "bhasha123",
        name: "Admin"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('loginMessage');

    // Check if already logged in
    if (localStorage.getItem('betaLoggedIn') === 'true') {
        redirectToApp();
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Validate credentials
        const user = betaTesters.find(tester => 
            tester.username === username && tester.password === password
        );

        if (user) {
            // Successful login
            localStorage.setItem('betaLoggedIn', 'true');
            localStorage.setItem('betaUserId', user.id);
            localStorage.setItem('betaUserName', user.name);
            
            showMessage('success', 'Login successful! Redirecting...');
            setTimeout(redirectToApp, 1500);
        } else {
            // Failed login
            showMessage('error', 'Invalid credentials. Please try again.');
        }
    });

    function showMessage(type, text) {
        messageDiv.textContent = text;
        messageDiv.className = `message ${type}`;
    }

    function redirectToApp() {
        window.location.href = 'index.html';
    }
});