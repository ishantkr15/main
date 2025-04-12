// At the very top of content-loader.js
window.movieData = [
    // your movie data array
];

window.apkData = [
    // your apk data array
];
// Sample data for movies and APKs
const movieData = [
    {
        id: 'm1',
        title: 'Chhava',
        year: 2025,
        genre: 'action',
        quality: '720p',
        size: '1.27GB',
        image: 'https://images.news18.com/ibnkhabar/uploads/2025/04/chhava-2025-04-2d8e2e136ecea6fa02385e78c2ee65f1.jpg',
        downloadLink: 'https://drive.google.com/file/d/1N2HIA-OO9eUjCrdEi9Qaw33lomy96_UA/view?t=1'
    },
    {
        id: 'm2',
        title: 'Joker',
        year: 2019,
        genre: 'drama',
        quality: '720p',
        size: '1.5GB',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pJJJhfMasMfukl1HnuVuX0Mhgyy5hJ_FqQ&s',
        downloadLink: 'https://drive.google.com/file/d/1WyLI6-89L2b0BhrQctz8o7UFBC7rHK9a/view?t=2'
    },
    {
        id: 'm3',
        title: 'Interstellar',
        year: 2014,
        genre: 'sci-fi',
        quality: '4k',
        size: '4.2GB',
        image: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg',
        downloadLink: 'https://drive.google.com/uc?export=download&id=ADGPM2n1934EwfrJrwdSV8isR4gRz-iygtfBDvi9L8v3CMK164D009IpTIzLOVLtQZOeDkUgfJv_T6iXJaOLUMA0c2yIDaN5Xz_3CZIkiKPzDEOrVUWDe_nZsUpnTsSoU9MLNLet5kvccpVmYpr1ZJX1_3wtiFHojQkIS5IHCFSgQ3YFO8bfGcfPaly3iiqSZ7HCtucmad9eqHN2s7fumW1P0Dit9yFcGPVKmoBeSCh5csLOLBZt64qokAUP9YyvvZhCxIH8I8uXOEAwDpvOsqoNd4iNxAXGcAMes1znYpnrpGerztMfDuvycTkZcXFRc-RpkMrpvecbgvdq-IRnoOqbhQB5-1s4Q7QsebQwgSamhjAJ2bgICjP1S4nEJ6tq9obDJxtq9GFkrJG0pZ_rhUT-FLwy4DuDtJnt7wY1JogTWHFnUO_HuxrzJ3LIpYCG9-3G5BGzQLN_Rz1ixpX7jbTOlJIoQj0Hvx6I998dhTrjv6czAJ4p6ljfrdkJzy61wq9PaFRTmfZcZPsGWkhjyRt-N5BERZmkCjrYvk7I8bZhdnpSG1LPZVlOhED0Wwn3V3xKLinxgF8I4DA6BG8xDWFO99kdT87kunjMDmP38PooZh9azNI4N062akuccj2ITPBqcWTHSSRPju9RgG-KtoZEtmQ6KLhfs1fQp2GaL9uaSU_iW2d7_IH6zuyr3VTu8u5KY3rjixl9D8i-GgW-k5ccCmBJ-ymBBABJCwn-e76SBOVxRcpVxeSBSrNxAmFTwBU6e5fQhVp8YBTYq8Hdu5ps7dH5XTaTFkg5Gqm0lrNTHE68B8_ce_LtQzukK9N6TLDzf6jt0yMUgExAIf6TIj7lHzF27HlLvcCTI3ioV9CGzqA-dlQT6p5SxcQqlw-2_MH0c18JaQxU9G9Uv8Pdy4IpIDVXa6iXlKDwbEuSuNdpc1V-2yn_-WsG3ZVONccGMVT2ZiE5FxlVvg3JGocd_tn8iTncLjM2k_BMDdadl1SQvSd1_ogbSpJW4vRG5LJ7fFPI_FykXWnOoa92wLjJxdQ-FFbTQLMdzbA3N3Qe_vsOra7zfqvrRpJM9Htc34WjUPVS93WnFKkOGM9KLfW1-zc7wrxl-nJneZmPGcmLqvrRksM3h-7T2D0eB_VuTOQ_rdUlO5lv751GguofM0ZBf8lEHub3QXEW6A'
    },
    {
        id: 'm4',
        title: 'CTRL',
        year: 2024,
        genre: 'action',
        quality: '720p',
        size: '0.7GB',
        image: 'https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVT8CFYBv_7LnUE4BbIOlRD3VpEhfAwXZ245a-j1WWwCVzVRCuxoV-p3Ze26PCnWd38Fvu7Wwr5CC8ovm4recysH0IlitHgyFgtP3BeGCqEqeonG37JneMMtMLmQZMU4jQltqA.webp?r=480',
        downloadLink: 'https://drive.google.com/file/d/1usKPLjlw8Qwvcu9E-gFWtobnsS_6dClZ/view'
    },
    {
        id: 'm5',
        title: 'Dear Zindagi',
        year: 2016,
        genre: 'Romance/Melodrama ‧',
        quality: '720p',
        size: '1.3GB',
        image: 'https://m.media-amazon.com/images/I/81JGFBE8ZaL._AC_UF1000,1000_QL80_.jpg',
        downloadLink: 'https://drive.google.com/file/d/1GYU-ED6XxX-EdAOdk-9hzPpl_EML511I/view?t=2'
    },
    {
        id: 'm6',
        title: 'Yeh Jawaani Hai Deewani (ये जवानी है दीवानी)',
        year: 2010,
        genre: 'Rom-com/Melodrama ',
        quality: '720p',
        size: '1.4GB',
        image: 'https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_.jpg',
        downloadLink: 'https://drive.google.com/file/d/16GipvxIc2mk0-zfwTU_XpIbXUovRvuf2/view'
    },
    {
        id: 'm7',
        title: 'Squid Game season 1',
        year: 2021,
        genre: '',
        quality: '720p',
        size: '3GB',
        image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20492218_b_v8_ae.jpg',
        downloadLink: 'https://drive.google.com/drive/folders/1rh1usmavKIthJQTyITuEqChyr7vwL55z'
    },
    {
        id: 'm8',
        title: 'Squid Game season 2',
        year: 2024,
        genre: '',
        quality: '720p',
        size: '3GB',
        image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/217/2024/11/01/AAAAQWrX_tjUcGVprE77fJuFbNz-oRBY4UcZinJs7c-swjemJpuU6uBQHkK0TNgneCy9JRRSCDRV9vQOG_kKjBZw7n88rOG_sKHhvoidKLKYehn-uU8Kc0Xq537XfWjUEFhRuBZM-qs4VTuZpnj9AibzukTn-3967378598.jpg',
        downloadLink: 'https://drive.google.com/drive/folders/1DgE-MwJZ0-5Ov6vVBim9zXbM7nCiVX2W'
    },
    {
        id: 'm9',
        title: 'JIGRA',
        year: 2024,
        genre: '',
        quality: '720p',
        size: '1.2GB',
        image: 'https://resizing.flixster.com/QIQ9ES2Hd5gmV9mFjWJzeQ-H2kU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E4MDIxNjI3LTMxMTItNDliYS1hOTU3LWFjOTg0YWZhMjhlNC5qcGc=',
        downloadLink: 'https://drive.google.com/file/d/10iKJRbAu-BkAHRHSKLxksdDIdAYKk_ac/view?t=1'
    },

];

const apkData = [
    {
        id: 'a1',
        title: 'Spotify Premium',
        category: 'app',
        version: '8.8.12.512',
        size: '94MB',
        features: 'Premium unlocked, No ads',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e2/7e/db/e27edb0a-a64b-480b-060d-231054de80ca/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/1200x600wa.png',
        downloadLink: 'https://drive.google.com/file/d/1UV1TdBBAqP525qETv8tNrvPot-Coldx0/view'
    },
    {
        id: 'a2',
        title: 'CapCut - Video Editor ',
        category: 'Tools',
        version: '1.0.39',
        size: '300MB',
        features: 'Free for Android',
        image: 'https://an1.com/uploads/posts/2022-01/1641043768_capcut.png',
        downloadLink: 'https://broad-sunset-e54d.danielwilliams7.workers.dev/Xzk5X0hSMF84M19ITTZMXzIzXzl3XzY0X1dJXzY1X05fNTVfTV8yOF9NXzI4X01fMjNfTldRXzE3X1pfMTVfWV8yOF9OR0l3WkdJNU1EXzMwX18yM19NRF80N19fNTVfT1RBNU9UQl80X05fMjhfQV8zNF9fODNfXzE1X0lfMzRfWkdWMkwwTl8yOF9SV184M180UkUxXzU1X184M19YWV8yOF9VWEZfOTdfVjE4XzE3X05fMjhfUV8yOF9PRE1fMTdfT1RfMTFfMkxfNTVfRndfOTlfdz09/1744434613/CapCut_Pro_latest_version_download.apk'
    },
    {
        id: 'a3',
        title: 'Grand Theft Auto: Vice City (MOD, Unlimited Money)',
        category: 'app',
        version: '17.03.38',
        size: '1 GB',
        features: 'MOD, Unlimited Money',
        image: 'https://an1.com/uploads/posts/2023-04/1680953248_gtavc.png',
        downloadLink: 'https://file.gamedva.com/APK/G/Grand-Theft-Auto-Vice-City-v1.12-mod-GameDVA.com.apk'
    },
    {
        id: 'a4',
        title: 'Minecraft Premium',
        category: 'game',
        version: '1.19.50.02',
        size: '780MB',
        features: 'Full version unlocked',
        image: 'https://an1.com/uploads/posts/2024-09/1727348015_minecraft.png',
        downloadLink: 'https://files.an1.co/minecraft-mod_1.21.80.27-an1.com.apk'
    },
    {
        id: 'a5',
        title: 'Instagram Mod APK',
        category: 'app',
        version: '23.7.3',
        size: '85MB',
        features: 'Customization Options, Download Media, Ads-Free Experience',
        image: 'https://honista.social/wp-content/uploads/2025/01/insta-pro-apk-icon.jpg',
        downloadLink: 'https://honista.social/apps/instagram-mod-v370.0.0.2.96.apk'
    },
    {
        id: 'a6',
        title: 'PhotoShop Express',
        category: 'tool',
        version: '7.0.483',
        size: '65MB',
        features: 'Premium filters unlocked',
        image: 'photoshop.jpg',
        downloadLink: 'https://drive.google.com/uc?export=download&id=1PhotoShopDriveID'
    }
];

// Load latest movies (for home page)
function loadLatestMovies() {
    const latestMoviesContainer = document.getElementById('latestMovies');
    if (!latestMoviesContainer) return;
    
    // Get first 4 movies
    const latestMovies = movieData.slice(0, 4);
    
    let html = '';
    latestMovies.forEach(movie => {
        html += `
            <div class="content-card" data-id="${movie.id}">
                <div class="card-image">
                    <img src="${movie.image}" alt="${movie.title}">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${movie.title} (${movie.year})</h3>
                    <div class="card-meta">
                        <span>${movie.quality} • ${movie.size}</span>
                    </div>
                    <a href="${movie.downloadLink}" class="download-btn" target="_blank">
                        <i class="fas fa-download"></i> Download
                    </a>
                </div>
            </div>
        `;
    });
    
    latestMoviesContainer.innerHTML = html;
    
    // Add click event to view details
    document.querySelectorAll('#latestMovies .content-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('download-btn')) {
                const id = this.getAttribute('data-id');
                viewMovieDetails(id);
            }
        });
    });
}

// Load all movies (for movies page)
function loadAllMovies() {
    const allMoviesContainer = document.getElementById('allMovies');
    if (!allMoviesContainer) return;
    
    let html = '';
    movieData.forEach(movie => {
        html += `
            <div class="content-card" data-id="${movie.id}">
                <div class="card-image">
                    <img src="${movie.image}" alt="${movie.title}">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${movie.title} (${movie.year})</h3>
                    <div class="card-meta">
                        <span>${movie.quality} • ${movie.genre} • ${movie.size}</span>
                    </div>
                    <a href="${movie.downloadLink}" class="download-btn" target="_blank">
                        <i class="fas fa-download"></i> Download
                    </a>
                </div>
            </div>
        `;
    });
    
    allMoviesContainer.innerHTML = html;
    
    // Add click event to view details
    document.querySelectorAll('#allMovies .content-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('download-btn')) {
                const id = this.getAttribute('data-id');
                viewMovieDetails(id);
            }
        });
    });
}

// Load latest APKs (for home page)
function loadLatestAPKs() {
    const latestAPKsContainer = document.getElementById('latestAPKs');
    if (!latestAPKsContainer) return;
    
    // Get first 4 APKs
    const latestAPKs = apkData.slice(0, 4);
    
    let html = '';
    latestAPKs.forEach(apk => {
        html += `
            <div class="content-card" data-id="${apk.id}">
                <div class="card-image">
                    <img src="${apk.image}" alt="${apk.title}">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${apk.title}</h3>
                    <div class="card-meta">
                        <span>v${apk.version} • ${apk.size}</span>
                    </div>
                    <a href="${apk.downloadLink}" class="download-btn" target="_blank">
                        <i class="fas fa-download"></i> Download
                    </a>
                </div>
            </div>
        `;
    });
    
    latestAPKsContainer.innerHTML = html;
    
    // Add click event to view details
    document.querySelectorAll('#latestAPKs .content-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('download-btn')) {
                const id = this.getAttribute('data-id');
                viewAPKDetails(id);
            }
        });
    });
}

// Load all APKs (for APKs page)
function loadAllAPKs() {
    const allAPKsContainer = document.getElementById('allAPKs');
    if (!allAPKsContainer) return;
    
    let html = '';
    apkData.forEach(apk => {
        html += `
            <div class="content-card" data-id="${apk.id}">
                <div class="card-image">
                    <img src="${apk.image}" alt="${apk.title}">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${apk.title}</h3>
                    <div class="card-meta">
                        <span>v${apk.version} • ${apk.category} • ${apk.size}</span>
                    </div>
                    <a href="${apk.downloadLink}" class="download-btn" target="_blank">
                        <i class="fas fa-download"></i> Download
                    </a>
                </div>
            </div>
        `;
    });
    
    allAPKsContainer.innerHTML = html;
    
    // Add click event to view details
    document.querySelectorAll('#allAPKs .content-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('download-btn')) {
                const id = this.getAttribute('data-id');
                viewAPKDetails(id);
            }
        });
    });
}

// Load features (for home page)
function loadFeatures() {
    const featuresSection = document.getElementById('featuresSection');
    if (!featuresSection) return;
    
    featuresSection.innerHTML = `
        <div class="container">
            <h2 class="section-title">Our Features</h2>
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
            </div>
        </div>
    `;
}

// View movie details
function viewMovieDetails(id) {
    const movie = movieData.find(m => m.id === id);
    if (!movie) return;
    
    contentArea.innerHTML = `
        <section class="content-details">
            <div class="details-container">
                <div class="details-image">
                    <img src="${movie.image}" alt="${movie.title}">
                </div>
                <div class="details-content">
                    <h2>${movie.title} (${movie.year})</h2>
                    <div class="details-meta">
                        <span><i class="fas fa-film"></i> ${movie.genre}</span>
                        <span><i class="fas fa-tachometer-alt"></i> ${movie.quality}</span>
                        <span><i class="fas fa-weight-hanging"></i> ${movie.size}</span>
                    </div>
                    <div class="download-options">
                        <h3>Download Options</h3>
                        <a href="${movie.downloadLink}" class="download-btn" target="_blank">
                            <i class="fas fa-download"></i> Google Drive (${movie.quality})
                        </a>
                    </div>
                    <div class="details-description">
                        <h3>About</h3>
                        <p>Download ${movie.title} in ${movie.quality} quality directly from Google Drive. File size is ${movie.size}.</p>
                        <p>This is a high quality print with clear audio and video. Enjoy your movie!</p>
                    </div>
                    <a href="#" class="back-btn" id="backToMovies"><i class="fas fa-arrow-left"></i> Back to Movies</a>
                </div>
            </div>
        </section>
    `;
    
    // Add back button event
    document.getElementById('backToMovies').addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('movies');
    });
}

// View APK details
function viewAPKDetails(id) {
    const apk = apkData.find(a => a.id === id);
    if (!apk) return;
    
    contentArea.innerHTML = `
        <section class="content-details">
            <div class="details-container">
                <div class="details-image">
                    <img src="${apk.image}" alt="${apk.title}">
                </div>
                <div class="details-content">
                    <h2>${apk.title}</h2>
                    <div class="details-meta">
                        <span><i class="fas fa-mobile-alt"></i> ${apk.category}</span>
                        <span><i class="fas fa-code-branch"></i> v${apk.version}</span>
                        <span><i class="fas fa-weight-hanging"></i> ${apk.size}</span>
                    </div>
                    <div class="apk-features">
                        <h3>Mod Features</h3>
                        <ul>
                            ${apk.features.split(',').map(f => `<li>${f.trim()}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="download-options">
                        <h3>Download</h3>
                        <a href="${apk.downloadLink}" class="download-btn" target="_blank">
                            <i class="fas fa-download"></i> Google Drive (v${apk.version})
                        </a>
                    </div>
                    <div class="details-description">
                        <h3>Installation Guide</h3>
                        <ol>
                            <li>Download the APK file</li>
                            <li>Go to Settings > Security and enable "Unknown Sources"</li>
                            <li>Open the downloaded APK file and tap Install</li>
                            <li>Once installed, open the app and enjoy!</li>
                        </ol>
                    </div>
                    <a href="#" class="back-btn" id="backToAPKs"><i class="fas fa-arrow-left"></i> Back to APKs</a>
                </div>
            </div>
        </section>
    `;
    
    // Add back button event
    document.getElementById('backToAPKs').addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('apks');
    });
}

