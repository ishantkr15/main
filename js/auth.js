// Authentication system
const Auth = {
    init: function() {
        this.checkAuth();
        this.setupLogout();
        this.displayUser();
    },
    
    checkAuth: function() {
        if (!this.isLoggedIn()) {
            this.redirectToLogin();
            return false;
        }
        return true;
    },
    
    isLoggedIn: function() {
        return localStorage.getItem('betaLoggedIn') === 'true';
    },
    
    redirectToLogin: function() {
        window.location.replace('login.html');
    },
    
    setupLogout: function() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('#logoutBtn')) {
                e.preventDefault();
                this.logout();
            }
        });
    },
    
    logout: function() {
        localStorage.clear();
        this.redirectToLogin();
    },
    
    displayUser: function() {
        const name = localStorage.getItem('betaUserName');
        const display = document.getElementById('userDisplay');
        if (name && display) display.textContent = `Hi, ${name}`;
    }
};

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    Auth.init();
});