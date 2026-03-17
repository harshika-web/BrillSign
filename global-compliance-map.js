/**
 * Global Compliance Map — Interactive Logic
 */

const REGION_DATA = {
    'eu': {
        flag: '🇪🇺', name: 'European Union',
        subtitle: 'European Economic Area',
        regulation: 'eIDAS Regulation (No. 910/2014)',
        status: 'Qualified / Advanced',
        statusClass: 'status-green',
        tiers: ['ses', 'aes', 'qes'],
        legal: 'Electronic signatures are legally equivalent to handwritten across all 27 member states under Qualified standards.'
    },
    'us': {
        flag: '🇺🇸', name: 'United States',
        subtitle: 'Federal & State Level',
        regulation: 'ESIGN Act & UETA',
        status: 'High Assurance',
        statusClass: 'status-green',
        tiers: ['ses', 'aes'],
        legal: 'ESIGN Act grants federal recognition. 49 states follow UETA, treating e-signatures with full legal equivalency.'
    },
    'uk': {
        flag: '🇬🇧', name: 'United Kingdom',
        subtitle: 'Post-Brexit Framework',
        regulation: 'UK eIDAS & Electronic Communications Act',
        status: 'Qualified / Advanced',
        statusClass: 'status-green',
        tiers: ['ses', 'aes', 'qes'],
        legal: 'Post-Brexit, the UK retained an equivalent framework that mirrors eIDAS with local regulatory nuances.'
    },
    'ch': {
        flag: '🇨🇭', name: 'Switzerland',
        subtitle: 'Non-EU',
        regulation: 'ZertES (Federal Law on Electronic Signatures)',
        status: 'Qualified',
        statusClass: 'status-blue',
        tiers: ['ses', 'aes', 'qes'],
        legal: 'Switzerland follows a strict qualified signature regime under ZertES, requiring accredited providers for legal-grade QES.'
    },
    'ca': {
        flag: '🇨🇦', name: 'Canada',
        subtitle: 'Federal & Provincial Level',
        regulation: 'PIPEDA & UETA-equivalent (CUAEA)',
        status: 'Compliant',
        statusClass: 'status-green',
        tiers: ['ses', 'aes'],
        legal: 'PIPEDA governs data in transit. Provincial statutes recognize e-signatures for most private sector transactions.'
    },
    'in': {
        flag: '🇮🇳', name: 'India',
        subtitle: 'DSC Mandate for Tier 3',
        regulation: 'Information Technology Act, 2000',
        status: 'DSC Required (High Value)',
        statusClass: 'status-blue',
        tiers: ['aes'],
        legal: 'Aadhaar-based e-sign and Token-based Digital Signature Certificates (DSC) are required for government and high-value contracts.'
    },
    'au': {
        flag: '🇦🇺', name: 'Australia',
        subtitle: 'Commonwealth Level',
        regulation: 'Electronic Transactions Act 1999',
        status: 'Compliant',
        statusClass: 'status-green',
        tiers: ['ses', 'aes'],
        legal: 'The ETA provides solid legal ground for e-signatures and reflects UNCITRAL Model Law standards.'
    }
};

const TIER_LABELS = { ses: 'SES', aes: 'AES', qes: 'QES' };

document.addEventListener('DOMContentLoaded', () => {
    // --- Map Interactivity ---
    const regions = document.querySelectorAll('.gcm-region');
    const panelPlaceholder = document.querySelector('.gcm-detail-placeholder');
    const panelBody = document.querySelector('.gcm-detail-body');

    function renderPanel(data) {
        const tiersHTML = data.tiers.map(t => `<span class="tier-badge tier-${t}">${TIER_LABELS[t]}</span>`).join('');
        document.getElementById('gcm-p-flag').textContent = data.flag;
        document.getElementById('gcm-p-name').textContent = data.name;
        document.getElementById('gcm-p-subtitle').textContent = data.subtitle;
        document.getElementById('gcm-p-regulation').textContent = data.regulation;
        document.getElementById('gcm-p-status').textContent = data.status;
        document.getElementById('gcm-p-status').className = `gcm-status-pill ${data.statusClass}`;
        document.getElementById('gcm-p-tiers').innerHTML = tiersHTML;
        document.getElementById('gcm-p-legal').textContent = data.legal;

        panelPlaceholder.style.display = 'none';
        panelBody.classList.add('visible');
    }

    regions.forEach(r => {
        r.addEventListener('mouseenter', () => {
            regions.forEach(x => x.classList.remove('gcm-active'));
            r.classList.add('gcm-active');
            const data = REGION_DATA[r.getAttribute('data-region')];
            if (data) renderPanel(data);
        });
    });

    // --- Count-up Animation ---
    const counters = document.querySelectorAll('.gcm-count');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                const suffix = el.getAttribute('data-suffix') || '';
                let curr = 0;
                const step = Math.ceil(target / 60);
                const tick = () => {
                    curr = Math.min(curr + step, target);
                    el.textContent = curr + suffix;
                    if (curr < target) requestAnimationFrame(tick);
                };
                tick();
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
});
