/**
 * Shared Components for BrillSign Website (v5)
 * This file contains the navbar, footer, and features dropdown
 * to ensure consistency across all pages.
 * 
 * IMPORTANT: The root detection block below (v5) is CRITICAL for subfolder 
 * navigation on GitHub Pages. Do not modify the detection logic unless 
 * testing across multiple directory levels.
 */

// Global variable to store detected site root
let detectedRoot = '';

// Immediate detection (currentScript ONLY works during initial script execution)
(function detectRoot() {
    try {
        const currentScript = document.currentScript;
        if (currentScript && currentScript.src) {
            // Get the directory containing this script
            detectedRoot = currentScript.src.split('shared-components.js')[0];
            console.log("BrillSign: Root detected via currentScript:", detectedRoot);
        } else {
            // Fallback for async/deferred loading - find the script by name
            const scripts = document.getElementsByTagName('script');
            for (let i = 0; i < scripts.length; i++) {
                if (scripts[i].src && scripts[i].src.includes('shared-components.js')) {
                    detectedRoot = scripts[i].src.split('shared-components.js')[0];
                    console.log("BrillSign: Root detected via scripts collection:", detectedRoot);
                    break;
                }
            }
        }

        // Manual GitHub Pages fallback as a last resort
        if (!detectedRoot || detectedRoot.startsWith('file://')) {
            const loc = window.location;
            if (loc.hostname.includes('github.io')) {
                const pathParts = loc.pathname.split('/');
                if (pathParts.length > 1 && pathParts[1]) {
                    // Assuming /repo-name/ is the first part of the path on GitHub Pages
                    detectedRoot = `${loc.origin}/${pathParts[1]}/`;
                    console.log("BrillSign: Root hardcoded for GitHub Pages:", detectedRoot);
                }
            }
        }
    } catch (e) {
        console.error("BrillSign: Error detecting root:", e);
    }
})();

// Navbar HTML
const navbarHTML = `
    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo" aria-label="BrillSign Home" id="navLogo">
                <div class="logo-icon-wrapper">
                    <img src="1111111 (1).png" class="logo-icon logo-layer-blue" alt="BrillSign Logo">
                </div>
                <span class="logo-text">BrillSign</span>
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
                <li class="nav-item-with-dropdown">
                    <a href="index.html#solutions"><span data-i18n="nav_solutions">Solutions</span> <i
                            class="fas fa-chevron-down nav-arrow"></i></a>
                    <div class="solutions-dropdown">
                        <div class="solutions-dropdown-content" id="solutionsDropdownContent">
                            <!-- Solutions will be inserted here -->
                        </div>
                    </div>
                </li>
                <li class="nav-item-with-dropdown">
                    <a href="index.html#apis"><span data-i18n="nav_apis">APIs & Integrations</span> <i
                            class="fas fa-chevron-down nav-arrow"></i></a>
                    <div class="api-dropdown">
                        <div class="api-dropdown-content" id="apiDropdownContent">
                            <!-- API content will be inserted here -->
                        </div>
                    </div>
                </li>
                <li class="nav-item-with-dropdown">
                    <a href="index.html#resources"><span data-i18n="nav_resources">Resources</span> <i
                            class="fas fa-chevron-down nav-arrow"></i></a>
                    <div class="resources-dropdown">
                        <div class="resources-dropdown-content" id="resourcesDropdownContent">
                            <!-- Resources content will be inserted here -->
                        </div>
                    </div>
                </li>
            </ul>
            <div class="nav-btns">
                <button class="theme-btn" id="theme-toggle">
                    <i class="fas fa-sun"></i>
                </button>

                <a href="join-waitlist.html" class="btn-primary-v3">Join the Waitlist</a>
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
        <a href="jurisdiction-aware-signing.html" class="stretched-link"></a>
        <div class="feature-icon"><i class="fas fa-globe-americas"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_jurisdiction">Jurisdiction-Aware Signing</h4>
            <p data-i18n="feat_jurisdiction_sub">Adapts to regional regulations</p>
        </div>
    </div>
    <div class="feature-item">
        <a href="audit-trails.html" class="stretched-link"></a>
        <div class="feature-icon"><i class="fas fa-clipboard-list"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_audit">Audit-Ready Logs</h4>
            <p data-i18n="feat_audit_sub">Tamper-proof audit records</p>
        </div>
    </div>
    <div class="feature-item">
        <a href="zero-knowledge-handling.html" class="stretched-link"></a>
        <div class="feature-icon"><i class="fas fa-user-secret"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_zero_knowledge">Zero-Knowledge Data Handling</h4>
            <p data-i18n="feat_zero_knowledge_sub">We cannot read documents</p>
        </div>
    </div>
    <div class="feature-item">
        <a href="exit-safe-architecture.html" class="stretched-link"></a>
        <div class="feature-icon"><i class="fas fa-door-open"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_exit_safe">Exit-Safe Architecture</h4>
            <p data-i18n="feat_exit_safe_sub">Documents remain verifiable offline</p>
        </div>
    </div>
    <div class="feature-item">
        <a href="enterprise-access-controls.html" class="stretched-link"></a>
        <div class="feature-icon"><i class="fas fa-users-gear"></i></div>
        <div class="feature-text">
            <h4 data-i18n="feat_access">Enterprise Access Controls</h4>
            <p data-i18n="feat_access_sub">Role-based organizational permissions</p>
        </div>
    </div>
    <a href="all-features.html" class="explore-all" data-i18n="feat_explore_all">Explore all features
        →</a>
`;

// Solutions Dropdown Content
const solutionsDropdownHTML = `
    <div class="solutions-col">
        <h4>By Role</h4>
        <ul class="solutions-list">
            <li>
                <a href="role-solutions/legal-teams.html">
                    <i class="fas fa-balance-scale"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">Legal Teams</div>
                        <div class="solutions-desc">Seamless contract management</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="role-solutions/compliance.html">
                    <i class="fas fa-shield-halved"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">Compliance</div>
                        <div class="solutions-desc">Meet global standards</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="role-solutions/enterprise-it.html">
                    <i class="fas fa-microchip"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">Enterprise IT</div>
                        <div class="solutions-desc">Secure infra integration</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="role-solutions/finance-procurement.html">
                    <i class="fas fa-file-invoice-dollar"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">Finance & Procurement</div>
                        <div class="solutions-desc">Accelerated vendor cycles</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="role-solutions/hr-operations.html">
                    <i class="fas fa-users"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">HR &amp; Operations</div>
                        <div class="solutions-desc">Effortless employee onboarding</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="role-solutions/founders-smbs.html">
                    <i class="fas fa-rocket"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">Founders / SMBs</div>
                        <div class="solutions-desc">Start fast, stay compliant</div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
    <div class="solutions-col">
        <h4>By Industry</h4>
        <ul class="solutions-list">
            <li><a href="industry-solutions/banking-finance.html">
                <i class="fas fa-landmark"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Banking & Finance</div>
                    <div class="solutions-desc">Secure wealth management</div>
                </div>
            </a></li>
            <li><a href="industry-solutions/healthcare.html">
                <i class="fas fa-heartbeat"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Healthcare</div>
                    <div class="solutions-desc">HIPAA-compliant document flow</div>
                </div>
            </a></li>
            <li><a href="industry-solutions/government.html">
                <i class="fas fa-building-columns"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Government</div>
                    <div class="solutions-desc">Reg-tech for public sector</div>
                </div>
            </a></li>
            <li><a href="industry-solutions/real-estate.html">
                <i class="fas fa-building"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Real Estate</div>
                    <div class="solutions-desc">Accelerated closing cycles</div>
                </div>
            </a></li>
            <li><a href="industry-solutions/technology.html">
                <i class="fas fa-laptop-code"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Technology</div>
                    <div class="solutions-desc">API-first signing infra</div>
                </div>
            </a></li>
            <li><a href="industry-solutions/consulting.html">
                <i class="fas fa-handshake"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Consulting</div>
                    <div class="solutions-desc">Trusted advisory agreements</div>
                </div>
            </a></li>
        </ul>
    </div>
    <div class="solutions-col">
        <h4>Use Case / Workflow</h4>
        <ul class="solutions-list">
            <li><a href="contract-signing.html">
                <i class="fas fa-signature"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Contract Signing</div>
                    <div class="solutions-desc">Legally binding B2B deals</div>
                </div>
            </a></li>
            <li><a href="vendor-agreements.html">
                <i class="fas fa-file-contract"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Vendor Agreements</div>
                    <div class="solutions-desc">Streamlined supply chain</div>
                </div>
            </a></li>
            <li><a href="audit-compliance.html">
                <i class="fas fa-check-double"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Audit & Compliance</div>
                    <div class="solutions-desc">Tamper-proof record keeping</div>
                </div>
            </a></li>
            <li><a href="global-agreements.html">
                <i class="fas fa-earth-americas"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Global Agreements</div>
                    <div class="solutions-desc">Cross-border legal validity</div>
                </div>
            </a></li>
            <li><a href="document-verification.html">
                <i class="fas fa-file-circle-check"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Document Verification</div>
                    <div class="solutions-desc">Independent proof of origin</div>
                </div>
            </a></li>
            <li><a href="long-term-proof.html">
                <i class="fas fa-history"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Long-term Proof</div>
                    <div class="solutions-desc">Decade-scale digital validity</div>
                </div>
            </a></li>
        </ul>
    </div>
    <div class="solutions-col highlight-card-col">
        <div class="solutions-highlight-card">
            <div class="card-image">
                <img src="solutions-dashboard-preview.png" alt="Enterprise Solutions Dashboard Preview">
            </div>
            <div class="card-content">
                <div class="solutions-title">Encrypted eSign for Enterprises</div>
                <div class="solutions-desc">Learn how top organizations eliminate platform dependency and secure their document lifecycle.</div>
                <a href="enterprise-solutions.html" class="solutions-cta">See Enterprise Solution →</a>
            </div>
        </div>
    </div>
    <div class="solutions-footer">
        <a href="all-solutions.html" class="footer-cta" style="padding: 12px 28px !important; color: #ffffff !important;">Explore All Solutions &rarr;</a>
        <a href="book-a-demo.html" class="footer-cta secondary" style="padding: 12px 28px !important;">Book Demo &rarr;</a>
    </div>
`;

// API & Integrations Dropdown Content
const apiDropdownHTML = `
    <div class="dev-highlight-strip" style="grid-column: 1 / -1;">
        <div class="dev-highlight-message">
            <i class="fas fa-bolt"></i>
            <span>Build secure signing workflows in minutes</span>
        </div>
    </div>
    <div class="solutions-col">
        <h4>Build with BrillSign</h4>
        <ul class="solutions-list">
            <li>
                <a href="api-integration/rest-api.html">
                    <i class="fas fa-code"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">REST API</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="api-integration/webhooks.html">
                    <i class="fas fa-bell"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">Webhooks</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="api-integration/sdks.html">
                    <i class="fas fa-box-archive"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">SDKs</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="api-integration/authentication.html">
                    <i class="fas fa-lock"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">Authentication</div>
                    </div>
                </a>
            </li>
        </ul>
        <a href="api-docs.html" class="solutions-cta" style="margin-top: 20px;">View Docs →</a>
    </div>
    <div class="solutions-col">
        <h4>Works With Your Stack</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <ul class="solutions-list">
                <li><a href="api-integration/salesforce.html">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" alt="Salesforce">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">Salesforce</div>
                    </div>
                </a></li>
                <li><a href="api-integration/google.html">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" alt="Google">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">Google</div>
                    </div>
                </a></li>
                <li><a href="api-integration/microsoft.html">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" alt="Microsoft">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">Microsoft</div>
                    </div>
                </a></li>
                <li><a href="api-integration/dropbox.html">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/dropbox/dropbox-icon.svg" alt="Dropbox">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">Dropbox</div>
                    </div>
                </a></li>
            </ul>
            <ul class="solutions-list">
                <li><a href="api-integration/aws.html">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" alt="AWS">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">AWS</div>
                    </div>
                </a></li>
                <li><a href="api-integration/sap.html">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/sap/sap-icon.svg" alt="SAP">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">SAP</div>
                    </div>
                </a></li>
                <li><a href="api-integration/oracle.html">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg" alt="Oracle">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">Oracle</div>
                    </div>
                </a></li>
                <li><a href="api-integration/hubspot.html">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" alt="HubSpot">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">HubSpot</div>
                    </div>
                </a></li>
            </ul>
        </div>
        <a href="api-integration/integrations-hub.html" class="solutions-cta" style="margin-top: 20px;">View All →</a>
    </div>
`;

// Resources Dropdown Content
const resourcesDropdownHTML = `
    <div class="solutions-col">
        <h4>Learn</h4>
        <ul class="solutions-list compact">
            <li><a href="learn/tutorials.html"><i class="fas fa-graduation-cap"></i> Tutorials</a></li>
            <li><a href="learn/api-guide.html"><i class="fas fa-code"></i> API Guides</a></li>
        </ul>
    </div>
    <div class="solutions-col">
        <h4>Trust & Compliance</h4>
        <ul class="solutions-list compact">
            <li><a href="security-overview.html"><i class="fas fa-user-shield"></i> Security Overview</a></li>
            <li><a href="#"><i class="fas fa-certificate"></i> Certifications</a></li>
            <li><a href="#"><i class="fas fa-gavel"></i> Legal Validity</a></li>
        </ul>
    </div>
    <div class="solutions-col">
        <h4>Insights</h4>
        <ul class="solutions-list compact">
            <li><a href="blog/zero-knowledge-architecture-enterprise.html"><i class="fas fa-rss"></i> Blog</a></li>
            <li><a href="case-studies/banking-finance.html"><i class="fas fa-file-invoice"></i> Case Studies</a></li>
        </ul>
    </div>
    <div class="solutions-col">
        <h4>Support</h4>
        <ul class="solutions-list compact">
            <li><a href="faq/faq.html"><i class="fas fa-life-ring"></i> Help Center</a></li>
        </ul>
    </div>
    <div class="solutions-col featured-col">
        <h4>Featured</h4>
        <div class="solutions-highlight-card">
            <div class="card-image">
                <img src="assets/featured_resource_guide.png" alt="Featured Guide">
            </div>
            <div class="card-content">
                <div class="solutions-title">The Future of Digital Trust</div>
                <div class="solutions-desc">Explore decentralized document security for the next decade.</div>
                <a href="resource-center.html" class="solutions-cta">Read More →</a>
            </div>
        </div>
    </div>
    <div class="resources-dropdown-footer">
        <div class="res-footer-group">
            <span class="res-cta-label">Looking for something specific?</span>
            <a href="resource-center.html" class="btn-text-link">Browse all documents & guides <i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="footer-contact">
            <i class="fas fa-headset"></i>
            <span>Need help? <a href="contact-support.html">Contact Support</a></span>
        </div>
    </div>
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
                    <a href="index.html" class="nav-logo" aria-label="BrillSign Home" style="margin-bottom: 20px;">
                        <div class="logo-icon-wrapper">
                            <img src="1111111 (1).png" class="logo-icon logo-layer-blue" alt="BrillSign Logo">
                        </div>
                        <span class="logo-text">BrillSign</span>
                    </a>
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
                        <li><a href="blog/zero-knowledge-architecture-enterprise.html">Blog</a></li>
                        <li><a href="#">Legal Knowledge Base</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Language</h4>
                    <p>Select your preferred language.</p>
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
// Function to inject navbar
function loadNavbar(siteRoot) {
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = fixHTMLPaths(navbarHTML, siteRoot);

        // Inject dropdown contents
        const targets = [
            { id: 'featuresDropdownContent', html: featuresDropdownHTML },
            { id: 'solutionsDropdownContent', html: solutionsDropdownHTML },
            { id: 'apiDropdownContent', html: apiDropdownHTML },
            { id: 'resourcesDropdownContent', html: resourcesDropdownHTML }
        ];

        targets.forEach(target => {
            const el = document.getElementById(target.id);
            if (el) el.innerHTML = fixHTMLPaths(target.html, siteRoot);
        });
    }
}

// Function to inject footer
function loadFooter(siteRoot) {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = fixHTMLPaths(footerHTML, siteRoot);
    }
}

// Helper to fix paths in injected HTML
function fixHTMLPaths(html, root) {
    if (!root) return html;

    // Ensure root ends with /
    if (!root.endsWith('/')) root += '/';

    return html.replace(/(href|src)="([^"]+)"/g, (match, attr, val) => {
        // Skip absolute URLs, hashes, mailto, etc.
        if (val.startsWith('http') || val.startsWith('/') || val.startsWith('#') ||
            val.startsWith('mailto:') || val.startsWith('data:') || val.startsWith('tel:')) {
            return match;
        }

        // Combine root + val
        return `${attr}="${root}${val}"`;
    });
}

// Function to inject fonts
function injectFonts() {
    if (!document.getElementById('brillsign-fonts')) {
        const link = document.createElement('link');
        link.id = 'brillsign-fonts';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Varela+Round&family=Rajdhani:wght@600;700&family=Dancing+Script:wght@700&display=swap';
        document.head.appendChild(link);
    }
}

// Initialize standard features and logo animations
function initSharedBehavior() {
    injectFonts();

    // Dynamic Path Lengths for Navbar Logo Animation
    const docPath = document.getElementById('navDocPath');
    if (docPath && docPath.getTotalLength) {
        const len = Math.ceil(docPath.getTotalLength());
        docPath.style.strokeDasharray = len;
        docPath.style.strokeDashoffset = len;
        docPath.style.opacity = 1;
        void docPath.getBoundingClientRect();
        docPath.style.animation = 'bsDraw 0.8s ease 0.2s forwards';
    }

    // Mini Signature Reveal
    const sigRect = document.getElementById('navSigRect');
    if (sigRect) {
        setTimeout(() => {
            const DUR = 1000, TARGET = 175, start = performance.now();
            function drawSig() {
                const p = Math.min(1, (performance.now() - start) / DUR);
                sigRect.setAttribute('width', (1 - Math.pow(1 - p, 3)) * TARGET);
                if (p < 1) requestAnimationFrame(drawSig);
            }
            drawSig();
        }, 1200);
    }

    // Synchronized Language Selection (Delegated for Reliability)
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.lang-btn');
        const option = e.target.closest('.lang-option');
        const selector = e.target.closest('.lang-selector');

        if (btn && selector) {
            e.stopPropagation();
            const drop = selector.querySelector('.lang-dropdown');
            const wasActive = drop.classList.contains('active');

            // Close all first
            document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('active'));

            // Toggle current if it wasn't active
            if (!wasActive) drop.classList.add('active');
        } else if (option) {
            const lang = option.getAttribute('data-lang');
            // Update all buttons
            document.querySelectorAll('.current-lang').forEach(el => el.textContent = lang.toUpperCase());
            // Update all options
            document.querySelectorAll('.lang-option').forEach(el => {
                el.classList.toggle('active', el.getAttribute('data-lang') === lang);
            });
            // Trigger global change
            if (window.changeLanguage) window.changeLanguage(lang);
            // Close all
            document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('active'));
        } else {
            // Outside click
            document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('active'));
        }
    });
}

// Function to initialize everything
function initAll() {
    console.log(`BrillSign Components v20260311_v5 | Active Root: ${detectedRoot}`);
    loadNavbar(detectedRoot);
    loadFooter(detectedRoot);
    initSharedBehavior();
}

// Auto-load components
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}
