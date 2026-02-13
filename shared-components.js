/**
 * Shared Components for BrillSign Website
 * This file contains the navbar, footer, and features dropdown
 * to ensure consistency across all pages.
 */

// Navbar HTML
const navbarHTML = `
    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo">
                <img src="assets/brillsign-b.png" class="logo-icon" alt="BrillSign">
                <span class="logo-text">rillSign</span>
            </a>
            <ul class="nav-links">
                <li class="nav-item-with-dropdown">
                    <a href="index.html#features"><span data-i18n="nav_features">Features</span> <i
                            class="fas fa-chevron-down nav-arrow"></i></a>
                    <div class="features-dropdown">
                        <div class="features-dropdown-header">
                            <div class="header-text-group">
                                <h3>Features</h3>
                                <p>Everything Brillsign does is built around security, proof, and enterprise control.
                                </p>
                            </div>
                        </div>
                        <div class="features-dropdown-content" id="featuresDropdownContent">
                            <!-- Features will be inserted here -->
                        </div>
                    </div>
                </li>
                <li><a href="index.html#solutions"><span data-i18n="nav_solutions">Solutions</span> <i
                            class="fas fa-chevron-down nav-arrow"></i></a></li>
                <li><a href="index.html#apis"><span data-i18n="nav_apis">APIs & Integrations</span> <i
                            class="fas fa-chevron-down nav-arrow"></i></a></li>
                <li><a href="index.html#resources"><span data-i18n="nav_resources">Resources</span> <i
                            class="fas fa-chevron-down nav-arrow"></i></a></li>
            </ul>
            <div class="nav-btns">
                <button class="theme-btn" id="theme-toggle">
                    <i class="fas fa-sun"></i>
                </button>
                <div class="lang-selector">
                    <button class="lang-btn" aria-label="Select Language">
                        <i class="fas fa-globe"></i>
                        <span class="current-lang">EN</span>
                    </button>
                    <div class="lang-dropdown">
                        <div class="lang-option active" data-lang="en">
                            <span>English</span>
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="lang-option" data-lang="es">
                            <span>Español</span>
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="lang-option" data-lang="hi">
                            <span>हिन्दी</span>
                            <i class="fas fa-check"></i>
                        </div>
                    </div>
                </div>
                <a href="index.html#waitlist" class="btn-primary-v3">Join the Waitlist</a>
            </div>
        </div>
    </nav>
`;

// Features Dropdown Content
const featuresDropdownHTML = `
    <div class="feature-item">
        <a href="encrypted-esign.html" class="stretched-link"></a>
        <div class="feature-icon"><i class="fas fa-file-signature"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_encrypted_esign">Encrypted eSign</h4>
            <p data-i18n="feat_encrypted_esign_sub">Legally defensible digital signatures</p>
        </div>
    </div>
    <div class="feature-item">
        <a href="decentralized-storage.html" class="stretched-link"></a>
        <div class="feature-icon"><i class="fas fa-database"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_decentralized_storage">Decentralized Document Storage</h4>
            <p data-i18n="feat_decentralized_storage_sub">No single storage dependency</p>
        </div>
    </div>
    <div class="feature-item">
        <a href="document-integrity.html" class="stretched-link"></a>
        <div class="feature-icon"><i class="fas fa-shield-halved"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_integrity">Document Integrity Verification</h4>
            <p data-i18n="feat_integrity_sub">Detect any post-sign change</p>
        </div>
    </div>
    <div class="feature-item">
        <a href="strong-non-repudiation.html" class="stretched-link"></a>
        <div class="feature-icon"><i class="fas fa-gavel"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_non_repudiation">Non-Repudiation Framework</h4>
            <p data-i18n="feat_non_repudiation_sub">Signer cannot deny approval</p>
        </div>
    </div>
    <div class="feature-item">
        <a href="signer-identity.html" class="stretched-link"></a>
        <div class="feature-icon"><i class="fas fa-fingerprint"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_identity">Signer Identity Layer</h4>
            <p data-i18n="feat_identity_sub">Verify identity without accounts</p>
        </div>
    </div>
    <div class="feature-item">
        <a href="independent-verification.html" class="stretched-link"></a>
        <div class="feature-icon"><i class="fas fa-magnifying-glass"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_independent">Independent Verification</h4>
            <p data-i18n="feat_independent_sub">Verify documents without platform</p>
        </div>
    </div>
    <div class="feature-item">
        <div class="feature-icon"><i class="fas fa-globe-americas"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_jurisdiction">Jurisdiction-Aware Signing</h4>
            <p data-i18n="feat_jurisdiction_sub">Adapts to regional regulations</p>
        </div>
    </div>
    <div class="feature-item">
        <div class="feature-icon"><i class="fas fa-clipboard-list"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_audit">Audit-Ready Logs</h4>
            <p data-i18n="feat_audit_sub">Tamper-proof audit records</p>
        </div>
    </div>
    <div class="feature-item">
        <div class="feature-icon"><i class="fas fa-user-secret"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_zero_knowledge">Zero-Knowledge Data Handling</h4>
            <p data-i18n="feat_zero_knowledge_sub">We cannot read documents</p>
        </div>
    </div>
    <div class="feature-item">
        <div class="feature-icon"><i class="fas fa-door-open"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_exit_safe">Exit-Safe Architecture</h4>
            <p data-i18n="feat_exit_safe_sub">Documents remain verifiable offline</p>
        </div>
    </div>
    <div class="feature-item">
        <div class="feature-icon"><i class="fas fa-users-gear"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_access">Enterprise Access Controls</h4>
            <p data-i18n="feat_access_sub">Role-based organizational permissions</p>
        </div>
    </div>
    <a href="index.html#features" class="explore-all" data-i18n="feat_explore_all">Explore all features
        →</a>
`;

// Footer HTML
const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-newsletter">
                <div class="newsletter-content">
                    <h3>Stay updated</h3>
                    <p>Get the latest news, features, and security updates directly in your inbox.</p>
                </div>
                <form class="newsletter-form">
                    <input type="email" placeholder="Enter your email" required>
                    <button type="submit" class="btn-primary">Subscribe</button>
                </form>
            </div>

            <div class="footer-grid">
                <div class="footer-col branding" id="company">
                    <p>The most secure and easy-to-use digital signature platform for individuals and teams worldwide.
                    </p>
                    <div class="social-links">
                        <a href="#" class="social-icon" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path fill="currentColor"
                                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                        </a>
                        <a href="#" class="social-icon" aria-label="Twitter">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path fill="currentColor"
                                    d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.48.75 2.78 1.9 3.55-.7 0-1.35-.2-1.94-.53v.05c0 2.05 1.47 3.75 3.39 4.14-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.54 1.68 2.1 2.9 3.95 2.93-1.45 1.13-3.27 1.81-5.25 1.81-.34 0-.68-.02-1.02-.06C3.07 20.39 5.25 21 7.58 21 15.15 21 19.28 14.74 19.28 9.3c0-.18 0-.36-.01-.53.8-.59 1.49-1.32 2.04-2.15z" />
                            </svg>
                        </a>
                        <a href="#" class="social-icon" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path fill="currentColor"
                                    d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Product</h4>
                    <ul class="nav-menu">
                        <li><a href="index.html#features" data-i18n="nav_features">Features</a></li>
                        <li><a href="index.html#security" data-i18n="nav_security">Security</a></li>
                        <li><a href="index.html#pricing" data-i18n="nav_pricing">Pricing</a></li>
                        <li><a href="index.html#company" data-i18n="nav_company">Company</a></li>
                        <li><a href="index.html#integrations" data-i18n="nav_integrations">Integrations</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Success Stories</a></li>
                        <li><a href="#">Trust Center</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Legal Knowledge Base</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Get the App</h4>
                    <p>Manage documents on the go.</p>
                    <div class="app-buttons">
                        <a href="#" class="app-btn">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                alt="App Store">
                        </a>
                        <a href="#" class="app-btn">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Google Play">
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookies</a>
                </div>
                <p>&copy; 2026. All rights reserved.</p>
            </div>
        </div>
    </footer>
`;

// Function to inject navbar
function loadNavbar() {
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) {
        navPlaceholder.outerHTML = navbarHTML;

        // Inject features dropdown content
        const featuresDropdownContent = document.getElementById('featuresDropdownContent');
        if (featuresDropdownContent) {
            featuresDropdownContent.innerHTML = featuresDropdownHTML;
        }
    }
}

// Function to inject footer
function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = footerHTML;
    }
}

// Auto-load components when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    loadNavbar();
    loadFooter();
});
