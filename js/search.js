// At the start of search.js
if (!window.movieData || !window.apkData) {
    console.error('Data not loaded! Check content-loader.js');
    return;
}
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const contentArea = document.getElementById('contentArea');
    
    // Event listeners
    if (searchBtn) searchBtn.addEventListener('click', performSearch);
    if (searchInput) searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    if (categoryBtns.length > 0) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                performSearch();
            });
        });
    }
    
    // Main search function
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        
        let results = [];
        
        // Filter by category first
        if (activeCategory === 'all') {
            results = [...window.movieData, ...window.apkData];
        } else if (activeCategory === 'movie') {
            results = [...window.movieData];
        } else if (activeCategory === 'apk') {
            results = [...window.apkData];
        }
        
        // Then filter by search term if exists
        if (searchTerm) {
            results = results.filter(item => 
                item.title.toLowerCase().includes(searchTerm) ||
                (item.genre && item.genre.toLowerCase().includes(searchTerm)) ||
                (item.features && item.features.toLowerCase().includes(searchTerm))
            );
        }
        
        displayResults(results);
    }
    
    // Display results function
    function displayResults(items) {
        if (!contentArea) return;
        
        if (items.length === 0) {
            contentArea.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No results found</h3>
                    <p>Try a different search term or category</p>
                </div>
            `;
            return;
        }
        
        let html = '';
        const isMixed = items.some(item => item.genre) && items.some(item => item.features);
        
        if (isMixed) {
            // Show mixed results (movies and APKs)
            const movies = items.filter(item => item.genre);
            const apks = items.filter(item => item.features);
            
            if (movies.length > 0) {
                html += `<section class="results-section"><h2>Movies</h2><div class="content-grid">`;
                movies.forEach(item => html += createItemCard(item, 'movie'));
                html += `</div></section>`;
            }
            
            if (apks.length > 0) {
                html += `<section class="results-section"><h2>APKs</h2><div class="content-grid">`;
                apks.forEach(item => html += createItemCard(item, 'apk'));
                html += `</div></section>`;
            }
        } else {
            // Show single type results
            const type = items[0].genre ? 'movie' : 'apk';
            html += `<div class="content-grid">`;
            items.forEach(item => html += createItemCard(item, type));
            html += `</div>`;
        }
        
        contentArea.innerHTML = html;
        attachCardEvents();
    }
    
    // Helper function to create card HTML
    function createItemCard(item, type) {
        return `
            <div class="content-card" data-id="${item.id}" data-type="${type}">
                <div class="card-image">
                    <img src="${item.image}" alt="${item.title}">
                    ${type === 'movie' ? `<span class="quality-badge">${item.quality}</span>` : 
                     `<span class="category-badge">${item.category}</span>`}
                </div>
                <div class="card-content">
                    <h3 class="card-title">${item.title}${type === 'movie' ? ` (${item.year})` : ''}</h3>
                    <div class="card-meta">
                        ${type === 'movie' ? 
                         `<span>${item.genre}</span><span>${item.size}</span>` : 
                         `<span>v${item.version}</span><span>${item.size}</span>`}
                    </div>
                    <a href="${item.downloadLink}" class="download-btn" target="_blank">
                        <i class="fas fa-download"></i> Download
                    </a>
                </div>
            </div>
        `;
    }
    
    // Attach click events to cards
    function attachCardEvents() {
        document.querySelectorAll('.content-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.classList.contains('download-btn')) {
                    const id = this.dataset.id;
                    const type = this.dataset.type;
                    if (type === 'movie') {
                        viewMovieDetails(id);
                    } else {
                        viewAPKDetails(id);
                    }
                }
            });
        });
    }
    
    // Initialize with all content
    performSearch();
});