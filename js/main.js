// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
const contentArea = document.getElementById('contentArea');
const navLinks = document.querySelectorAll('nav a');
const pageLinks = document.querySelectorAll('[data-page]');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            mainNav.classList.remove('active');
        }
    });
});

// Active link highlighting
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Page Navigation
pageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        loadPage(page);
        
        // Update active link
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
            if (navLink.getAttribute('data-page') === page) {
                navLink.classList.add('active');
            }
        });
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Initial page load
document.addEventListener('DOMContentLoaded', () => {
    loadPage('home');
});

// Function to load pages
function loadPage(page) {
    contentArea.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
        </div>
    `;
    
    setTimeout(() => {
        switch(page) {
            case 'home':
                loadHomePage();
                break;
            case 'movies':
                loadMoviesPage();
                break;
            case 'apks':
                loadAPKsPage();
                break;
            case 'features':
                loadFeaturesPage();
                break;
            case 'requests':
                loadRequestsPage();
                break;
            default:
                loadHomePage();
        }
    }, 500);
}

// Load home page content
function loadHomePage() {
    contentArea.innerHTML = `
        <section class="latest-content">
            <h2 class="section-title">Latest Movies</h2>
            <div class="content-grid" id="latestMovies">
                <!-- Movies will be loaded by content-loader.js -->
            </div>
        </section>
        
        <section class="latest-content">
            <h2 class="section-title">Latest APKs</h2>
            <div class="content-grid" id="latestAPKs">
                <!-- APKs will be loaded by content-loader.js -->
            </div>
        </section>
    `;
    
    // Load content after DOM update
    setTimeout(() => {
        loadLatestMovies();
        loadLatestAPKs();
        loadFeatures();
    }, 100);
}

// Load movies page
function loadMoviesPage() {
    contentArea.innerHTML = `
        <section class="all-movies">
            <h2 class="section-title">All Movies</h2>
            <div class="content-filters">
                <select id="genreFilter">
                    <option value="all">All Genres</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                    <option value="horror">Horror</option>
                    <option value="sci-fi">Sci-Fi</option>
                </select>
                <select id="qualityFilter">
                    <option value="all">All Qualities</option>
                    <option value="480p">480p</option>
                    <option value="720p">720p</option>
                    <option value="1080p">1080p</option>
                    <option value="4k">4K</option>
                </select>
            </div>
            <div class="content-grid" id="allMovies">
                <!-- Movies will be loaded by content-loader.js -->
            </div>
        </section>
    `;
    
    // Load all movies after DOM update
    setTimeout(() => {
        loadAllMovies();
        
        // Add event listeners to filters
        document.getElementById('genreFilter').addEventListener('change', filterMovies);
        document.getElementById('qualityFilter').addEventListener('change', filterMovies);
    }, 100);
}

// Load APKs page
function loadAPKsPage() {
    contentArea.innerHTML = `
        <section class="all-apks">
            <h2 class="section-title">All APKs</h2>
            <div class="content-filters">
                <select id="categoryFilter">
                    <option value="all">All Categories</option>
                    <option value="game">Games</option>
                    <option value="app">Apps</option>
                    <option value="tool">Tools</option>
                </select>
                <select id="versionFilter">
                    <option value="all">All Versions</option>
                    <option value="latest">Latest Only</option>
                </select>
            </div>
            <div class="content-grid" id="allAPKs">
                <!-- APKs will be loaded by content-loader.js -->
            </div>
        </section>
    `;
    
    // Load all APKs after DOM update
    setTimeout(() => {
        loadAllAPKs();
        
        // Add event listeners to filters
        document.getElementById('categoryFilter').addEventListener('change', filterAPKs);
        document.getElementById('versionFilter').addEventListener('change', filterAPKs);
    }, 100);
}

// Load features page
function loadFeaturesPage() {
    contentArea.innerHTML = `
        <section class="features-content">
            <h2 class="section-title">Why Choose Ishant_Shop?</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-bolt"></i></div>
                    <h3 class="feature-title">Fast Downloads</h3>
                    <p>Direct Google Drive links for maximum download speeds with no speed limits.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-shield-alt"></i></div>
                    <h3 class="feature-title">Virus Checked</h3>
                    <p>All files are scanned for viruses and malware before being uploaded.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-film"></i></div>
                    <h3 class="feature-title">High Quality</h3>
                    <p>Movies in various qualities from 480p to 4K to suit your needs.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-unlock-alt"></i></div>
                    <h3 class="feature-title">Premium Unlocked</h3>
                    <p>APKs with premium features unlocked and ads removed.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-sync"></i></div>
                    <h3 class="feature-title">Regular Updates</h3>
                    <p>Content is updated regularly with the latest movies and app versions.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-headset"></i></div>
                    <h3 class="feature-title">User Support</h3>
                    <p>Dedicated support for any download or content issues you encounter.</p>
                </div>
            </div>
        </section>
    `;
}
function loadRequestsPage() {
    contentArea.innerHTML = `
        <section class="requests-content">
            <h2 class="section-title">Request Content</h2>
            <div class="request-form-container">
                <form id="requestForm">
                    <div class="form-group">
                        <label for="requestType">Request Type*</label>
                        <select id="requestType" required>
                            <option value="">Select type</option>
                            <option value="Movie">Movie</option>
                            <option value="APK">APK</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="requestTitle">Title*</label>
                        <input type="text" id="requestTitle" placeholder="Enter movie or APK name" required>
                    </div>
                    <div class="form-group">
                        <label for="requestDetails">Additional Details</label>
                        <textarea id="requestDetails" placeholder="Version, quality, or other specifications"></textarea>
                    </div>
                    <button type="submit" class="submit-btn">
                        <i class="fas fa-paper-plane"></i> Submit Request
                    </button>
                </form>
                <div class="request-guidelines">
                    <h3>Request Guidelines</h3>
                    <ul>
                        <li>Provide as much detail as possible</li>
                        <li>For movies, include year and preferred quality</li>
                        <li>For APKs, specify required version</li>
                        <li>Will open your default email app</li>
                    </ul>
                </div>
            </div>
        </section>
    `;

    document.getElementById('requestForm').addEventListener('submit', function(e) {
        e.preventDefault();
        sendRequestViaEmail();
    });
}

function sendRequestViaEmail() {
    const type = document.getElementById('requestType').value;
    const title = document.getElementById('requestTitle').value;
    const details = document.getElementById('requestDetails').value;
    
    if (!type || !title) {
        showFormStatus('error', 'Please fill in all required fields');
        return;
    }

    const subject = `[Ishant_Shop] ${type} Request: ${title}`;
    const body = `Request Details:%0A%0AType: ${type}%0ATitle: ${title}%0A%0AAdditional Details:%0A${details || 'None'}`;
    
    // Detect mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Create mailto link
    const mailtoLink = `mailto:ishant150407@gmail.com.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Create Gmail web link
    const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ishant150407@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`;
    
    // For mobile, always use mailto
    if (isMobile) {
        window.location.href = mailtoLink;
    } 
    // For desktop, try Gmail first then fallback to mailto
    else {
        const gmailWindow = window.open(gmailWebLink, '_blank');
        
        // Fallback if popup blocked
        if (!gmailWindow || gmailWindow.closed) {
            window.location.href = mailtoLink;
        }
    }

    // Show confirmation
    showFormStatus('success', 'Preparing your email app...');
}

function showFormStatus(type, message) {
    let statusEl = document.querySelector('.form-status');
    if (!statusEl) {
        statusEl = document.createElement('div');
        statusEl.className = 'form-status';
        document.getElementById('requestForm').appendChild(statusEl);
    }
    
    statusEl.className = `form-status ${type}`;
    statusEl.innerHTML = `<i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}-circle"></i> ${message}`;
    
    setTimeout(() => {
        statusEl.remove();
    }, 5000);
}

// Filter movies function
function filterMovies() {
    const genre = document.getElementById('genreFilter').value;
    const quality = document.getElementById('qualityFilter').value;
    
    // In a real app, you would filter the existing data or make a new request
    console.log(`Filtering movies by genre: ${genre}, quality: ${quality}`);
    // For this example, we'll just reload the movies
    loadAllMovies();
}

// Filter APKs function
function filterAPKs() {
    const category = document.getElementById('categoryFilter').value;
    const version = document.getElementById('versionFilter').value;
    
    // In a real app, you would filter the existing data or make a new request
    console.log(`Filtering APKs by category: ${category}, version: ${version}`);
    // For this example, we'll just reload the APKs
    loadAllAPKs();
}
<script>
    // Run this once to clear existing login data
    localStorage.removeItem('betaLoggedIn');
    localStorage.removeItem('betaUserId');
    localStorage.removeItem('betaUserName');
    console.log('Cleared all login data');
</script>
