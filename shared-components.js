/**
 * Shared Components for BrillSign Website
 * This file contains the navbar, footer, and features dropdown
 * to ensure consistency across all pages.
 */

// Navbar HTML
const navbarHTML = `
    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo elite-dark-box" aria-label="BrillSign Home" id="navLogo">
                <svg class="nav-logo-svg" width="260" height="48" viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="navSigF"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <filter id="navHexGlow"><feGaussianBlur stdDeviation="1" result="b"/><feComponentTransfer><feFuncA type="linear" slope="0.4"/></feComponentTransfer><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <filter id="navStampGlow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <clipPath id="navSigClip"><rect id="navSigRect" x="20" y="70" width="0" height="40"/></clipPath>
                    <style>
                      @keyframes bsDraw { to { stroke-dashoffset: 0; } }
                      @keyframes bsFade { to { opacity: 1; } }
                      @keyframes bsOut  { to { opacity: 0; filter: blur(4px); } }
                       @keyframes bsWord { to { opacity: 1; transform: translateY(0); } }
                       @keyframes bsStamp { 
                         0% { opacity: 0; transform: scale(3); }
                         70% { opacity: 1; transform: scale(0.9); }
                         100% { opacity: 1; transform: scale(1); }
                       }
                      
                       #navDocGroup { animation: bsOut 0.5s ease 2.8s forwards; }
                       #navFinalLogo { opacity: 0; animation: bsFade 0.5s ease 3.3s forwards; }
                       
                       .nav-stamp {
                         opacity: 0;
                         transform-origin: center;
                         animation: bsStamp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 2.2s forwards;
                         filter: url(#navStampGlow);
                       }
                      
                      .nav-doc-line { stroke: #00d2ff; stroke-width: 1.5; fill: rgba(0,210,255,0.02); opacity:0; }
                      .nav-dtl { stroke: rgba(0,180,255,0.3); stroke-width: 1.2; fill:none; stroke-dasharray: 100; stroke-dashoffset: 100; }
                      
                      #navSigText {
                        font-family: 'Dancing Script', cursive; font-size: 28px; font-weight: 700;
                        fill: #4da6ff; filter: url(#navSigF);
                      }
                      
                      /* Final Logo Parts */
                      #navHex { 
                        stroke: rgba(0, 210, 255, 0.6); 
                        fill: rgba(26, 115, 232, 0.05); 
                         stroke-width: 1.5;
                         filter: url(#navHexGlow);
                         stroke-dasharray: 400; 
                         stroke-dashoffset: 400; 
                         animation: bsDraw 1.2s ease 2.8s forwards; 
                       }
                       .nav-b-plane { fill: none; stroke: currentColor; stroke-width: 3.5; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 200; stroke-dashoffset: 200; }
                       #navBLeft { stroke: #ffffff; animation: bsDraw 0.6s ease 3.2s forwards; }
                       #navBRight { stroke: #1A73E8; animation: bsDraw 0.6s ease 3.4s forwards; }
                       #navBSeam { fill: #4DA6FF; opacity: 0; animation: bsFade 0.4s ease 3.8s forwards; }
                      .nav-wordmark {
                         font-family: 'Rajdhani', sans-serif; font-size: 30px; font-weight: 700; letter-spacing: 5px;
                         fill: #ffffff; opacity: 0; transform: translateY(8px);
                         animation: bsWord 0.6s ease 3.8s forwards;
                       }
                       .nav-tagline {
                         font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 0.5px;
                         fill: #00d2ff; opacity: 0;
                         animation: bsFade 0.6s ease 4.2s forwards;
                         text-transform: uppercase;
                       }
                    </style>
                  </defs>

                  <!-- Phase 1: Mini Document -->
                  <g id="navDocGroup" transform="translate(100, 7) scale(0.4)">
                    <path id="navDocPath" class="nav-doc-line" d="M10 5 H180 V15 L200 35 V120 H10 Z" />
                    <line class="nav-dtl" x1="30" y1="50" x2="160" y2="50" style="animation: bsDraw 0.4s ease 0.8s forwards" />
                    <line class="nav-dtl" x1="30" y1="70" x2="140" y2="70" style="animation: bsDraw 0.4s ease 1.0s forwards" />
                    <line class="nav-dtl" x1="30" y1="90" x2="160" y2="90" style="animation: bsDraw 0.4s ease 1.2s forwards" />
                    <text id="navSigText" x="25" y="100" clip-path="url(#navSigClip)">BrillSign</text>
                     <g transform="translate(145, 85)">
                        <g class="nav-stamp">
                           <circle r="12" fill="#22c55e" fill-opacity="0.2" stroke="#22c55e" stroke-width="2" />
                           <path d="M-5 0 L-1 4 L5 -6" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                        </g>
                     </g>
                  </g>

                  <!-- Phase 2: Resolve to Logo -->
                  <g id="navFinalLogo" transform="translate(10, 6.6)">
                    <g transform="scale(0.52)">
                      <path id="navHex" d="M50 5 L90 25 V75 L50 95 L10 75 V25 Z" />
                      <path id="navBLeft" class="nav-b-plane" d="M32 24 V80" />
                      <path id="navBRight" class="nav-b-plane" d="M32 24 H55 C70 24 70 48 55 48 H32 M32 48 H60 C75 48 75 80 60 80 H32" />
                      <circle id="navBSeam" cx="32" cy="48" r="4" />
                    </g>
                    <text x="75" y="31" class="nav-wordmark">BRILLSIGN</text>
                    <text x="75" y="45" class="nav-tagline">The Standard in Digital Trust</text>
                  </g>
                </svg>
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
    <a href="index.html#features" class="explore-all" data-i18n="feat_explore_all">Explore all features
        →</a>
`;

// Solutions Dropdown Content
const solutionsDropdownHTML = `
    <div class="solutions-col">
        <h4>By Role</h4>
        <ul class="solutions-list">
            <li>
                <a href="legal-teams.html">
                    <i class="fas fa-balance-scale"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">Legal Teams</div>
                        <div class="solutions-desc">Seamless contract management</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="compliance.html">
                    <i class="fas fa-shield-halved"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">Compliance</div>
                        <div class="solutions-desc">Meet global standards</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="enterprise-it.html">
                    <i class="fas fa-microchip"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">Enterprise IT</div>
                        <div class="solutions-desc">Secure infra integration</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="finance-procurement.html">
                    <i class="fas fa-file-invoice-dollar"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">Finance & Procurement</div>
                        <div class="solutions-desc">Accelerated vendor cycles</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="hr-operations.html">
                    <i class="fas fa-users"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">HR &amp; Operations</div>
                        <div class="solutions-desc">Effortless employee onboarding</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="founders-smbs.html">
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
            <li><a href="#">
                <i class="fas fa-landmark"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Banking & Finance</div>
                    <div class="solutions-desc">Secure wealth management</div>
                </div>
            </a></li>
            <li><a href="#">
                <i class="fas fa-heartbeat"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Healthcare</div>
                    <div class="solutions-desc">HIPAA-compliant document flow</div>
                </div>
            </a></li>
            <li><a href="#">
                <i class="fas fa-building-columns"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Government</div>
                    <div class="solutions-desc">Reg-tech for public sector</div>
                </div>
            </a></li>
            <li><a href="#">
                <i class="fas fa-building"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Real Estate</div>
                    <div class="solutions-desc">Accelerated closing cycles</div>
                </div>
            </a></li>
            <li><a href="#">
                <i class="fas fa-laptop-code"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Technology</div>
                    <div class="solutions-desc">API-first signing infra</div>
                </div>
            </a></li>
            <li><a href="#">
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
            <li><a href="#">
                <i class="fas fa-signature"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Contract Signing</div>
                    <div class="solutions-desc">Legally binding B2B deals</div>
                </div>
            </a></li>
            <li><a href="#">
                <i class="fas fa-file-contract"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Vendor Agreements</div>
                    <div class="solutions-desc">Streamlined supply chain</div>
                </div>
            </a></li>
            <li><a href="#">
                <i class="fas fa-check-double"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Audit & Compliance</div>
                    <div class="solutions-desc">Tamper-proof record keeping</div>
                </div>
            </a></li>
            <li><a href="#">
                <i class="fas fa-earth-americas"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Global Agreements</div>
                    <div class="solutions-desc">Cross-border legal validity</div>
                </div>
            </a></li>
            <li><a href="#">
                <i class="fas fa-file-circle-check"></i>
                <div class="solutions-text">
                    <div class="solutions-title">Document Verification</div>
                    <div class="solutions-desc">Independent proof of origin</div>
                </div>
            </a></li>
            <li><a href="#">
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
                <a href="index.html#waitlist" class="solutions-cta">See Enterprise Solution →</a>
            </div>
        </div>
    </div>
    <div class="solutions-footer">
        <a href="index.html#solutions" class="footer-cta" style="padding: 12px 28px !important; color: #ffffff !important;">Explore All Solutions &rarr;</a>
        <a href="index.html#demo" class="footer-cta secondary" style="padding: 12px 28px !important;">Book Demo &rarr;</a>
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
                <a href="#">
                    <i class="fas fa-code"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">REST API</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-bell"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">Webhooks</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-box-archive"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">SDKs</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-key"></i>
                    <div class="solutions-text">
                        <div class="solutions-title">Authentication</div>
                    </div>
                </a>
            </li>
        </ul>
        <a href="#" class="solutions-cta" style="margin-top: 20px;">View Docs →</a>
    </div>
    <div class="solutions-col">
        <h4>Works With Your Stack</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <ul class="solutions-list">
                <li><a href="#">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" alt="Salesforce">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">Salesforce</div>
                    </div>
                </a></li>
                <li><a href="#">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" alt="Google">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">Google</div>
                    </div>
                </a></li>
                <li><a href="#">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" alt="Microsoft">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">Microsoft</div>
                    </div>
                </a></li>
                <li><a href="#">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/dropbox/dropbox-icon.svg" alt="Dropbox">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">Dropbox</div>
                    </div>
                </a></li>
            </ul>
            <ul class="solutions-list">
                <li><a href="#">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" alt="AWS">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">AWS</div>
                    </div>
                </a></li>
                <li><a href="#">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/sap/sap-icon.svg" alt="SAP">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">SAP</div>
                    </div>
                </a></li>
                <li><a href="#">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg" alt="Oracle">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">Oracle</div>
                    </div>
                </a></li>
                <li><a href="#">
                    <div class="integration-icon-container">
                        <img src="https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" alt="HubSpot">
                    </div>
                    <div class="solutions-text">
                        <div class="solutions-title">HubSpot</div>
                    </div>
                </a></li>
            </ul>
        </div>
        <a href="#" class="solutions-cta" style="margin-top: 20px;">View All →</a>
    </div>
`;

// Resources Dropdown Content
const resourcesDropdownHTML = `
    <div class="solutions-col">
        <h4>Learn</h4>
        <ul class="solutions-list compact">
            <li><a href="#"><i class="fas fa-book"></i> Docs</a></li>
            <li><a href="#"><i class="fas fa-graduation-cap"></i> Tutorials</a></li>
            <li><a href="#"><i class="fas fa-code"></i> API Guides</a></li>
        </ul>
    </div>
    <div class="solutions-col">
        <h4>Trust & Compliance</h4>
        <ul class="solutions-list compact">
            <li><a href="#"><i class="fas fa-user-shield"></i> Security Overview</a></li>
            <li><a href="#"><i class="fas fa-certificate"></i> Certifications</a></li>
            <li><a href="#"><i class="fas fa-gavel"></i> Legal Validity</a></li>
        </ul>
    </div>
    <div class="solutions-col">
        <h4>Insights</h4>
        <ul class="solutions-list compact">
            <li><a href="#"><i class="fas fa-rss"></i> Blog</a></li>
            <li><a href="#"><i class="fas fa-file-invoice"></i> Case Studies</a></li>
            <li><a href="#"><i class="fas fa-file-pdf"></i> Whitepapers</a></li>
        </ul>
    </div>
    <div class="solutions-col">
        <h4>Support</h4>
        <ul class="solutions-list compact">
            <li><a href="#"><i class="fas fa-life-ring"></i> Help Center</a></li>
            <li><a href="#"><i class="fas fa-question-circle"></i> FAQs</a></li>
            <li><a href="#"><i class="fas fa-server"></i> System Status</a></li>
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
                <a href="#" class="solutions-cta">Read More →</a>
            </div>
        </div>
    </div>
    <div class="resources-dropdown-footer">
        <div class="res-footer-group">
            <span class="res-cta-label">Looking for something specific?</span>
            <a href="#" class="btn-text-link">Browse all documents & guides <i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="footer-contact">
            <i class="fas fa-headset"></i>
            <span>Need help? <a href="#">Contact Support</a></span>
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
        navPlaceholder.innerHTML = navbarHTML; // Use innerHTML instead of outerHTML to keep the container or just replace content

        // Inject features dropdown content
        const featuresDropdownContent = document.getElementById('featuresDropdownContent');
        if (featuresDropdownContent) {
            featuresDropdownContent.innerHTML = featuresDropdownHTML;
        }

        // Inject solutions dropdown content
        const solutionsDropdownContent = document.getElementById('solutionsDropdownContent');
        if (solutionsDropdownContent) {
            solutionsDropdownContent.innerHTML = solutionsDropdownHTML;
        }

        // Inject API dropdown content
        const apiDropdownContent = document.getElementById('apiDropdownContent');
        if (apiDropdownContent) {
            apiDropdownContent.innerHTML = apiDropdownHTML;
        }

        // Inject resources dropdown content
        const resourcesDropdownContent = document.getElementById('resourcesDropdownContent');
        if (resourcesDropdownContent) {
            resourcesDropdownContent.innerHTML = resourcesDropdownHTML;
        }

        // Initialize animations after injection
        initSharedBehavior();
    }
}

// Function to inject fonts
function injectFonts() {
    if (!document.getElementById('brillsign-fonts')) {
        const link = document.createElement('link');
        link.id = 'brillsign-fonts';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Dancing+Script:wght@700&display=swap';
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
}

// Function to inject footer
function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

// Auto-load components when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    loadNavbar();
    loadFooter();
});
