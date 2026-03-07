/* =============================================
   SDKs PAGE — sdks.js
   BrillSign Developer Portal
   Handles: Terminal animation, SDK cards,
   Scenario+Language tabs, Copy, FAQ
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ─────────────────────────────────────────
       1. SCROLL REVEAL
    ───────────────────────────────────────── */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('observed');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-up, .animate-right, .animate-left').forEach(el => observer.observe(el));

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                cardObserver.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.sdk-card').forEach(el => cardObserver.observe(el));


    /* ─────────────────────────────────────────
       2. HERO TERMINAL ANIMATION
       Cycles through install commands for each language
    ───────────────────────────────────────── */
    const termBody = document.getElementById('sdkTermBody');

    const installs = [
        { lang: 'python', prompt: '>>>', cmd: 'pip install brillsign', ok: '✓ Installed' },
        { lang: 'node', prompt: '$', cmd: 'npm install @brillsign/sdk', ok: '✓ Added' },
        { lang: 'go', prompt: '$', cmd: 'go get github.com/brillsign/go-sdk', ok: '✓ Fetched' },
        { lang: 'ruby', prompt: '$', cmd: 'gem install brillsign', ok: '✓ Installed' },
        { lang: 'dotnet', prompt: '~', cmd: 'dotnet add package BrillSign.SDK', ok: '✓ Added' },
    ];

    if (termBody) {
        let idx = 0;

        function addLine() {
            const item = installs[idx % installs.length];
            idx++;

            const row = document.createElement('div');
            row.className = `sdk-term-line sdk-tl-${item.lang}`;
            row.style.animationDelay = '0ms';
            row.innerHTML = `
                <span class="sdk-term-prompt">${item.prompt}</span>
                <span class="sdk-term-cmd">${item.cmd}</span>
                <span class="sdk-term-ok">${item.ok}</span>
            `;
            termBody.appendChild(row);

            // Keep max 4 visible
            while (termBody.children.length > 4) {
                const old = termBody.firstChild;
                old.style.transition = 'opacity 0.3s ease';
                old.style.opacity = '0';
                setTimeout(() => old.remove(), 300);
            }
        }

        // Seed 2 initial
        addLine();
        setTimeout(addLine, 500);

        // Loop
        setInterval(addLine, 2400);
    }


    /* ─────────────────────────────────────────
       3. SDK CARD INSTALL COPY BUTTONS
    ───────────────────────────────────────── */
    document.querySelectorAll('.sdk-copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const source = document.getElementById(targetId);
            if (!source) return;

            navigator.clipboard.writeText(source.textContent.trim()).then(() => {
                const orig = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i>';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.innerHTML = orig;
                    btn.classList.remove('copied');
                }, 2000);
            }).catch(() => { });
        });
    });


    /* ─────────────────────────────────────────
       4. CODE DEMO — SCENARIO + LANGUAGE TABS
    ───────────────────────────────────────── */
    const scenarioBtns = document.querySelectorAll('.sdk-scenario-btn');
    const langTabs = document.querySelectorAll('.sdk-lang-tab');
    const codeBlocks = document.querySelectorAll('#demoCodeContent .sdk-code-block');
    const filenameEl = document.getElementById('demoFilename');

    let activeScenario = 'upload';
    let activeLang = 'python';

    const filenameMap = {
        python: { upload: 'upload_document.py', sign: 'send_for_signing.py', verify: 'verify_proof.py' },
        node: { upload: 'upload_document.js', sign: 'send_for_signing.js', verify: 'verify_proof.js' },
        java: { upload: 'UploadDocument.java', sign: 'SendForSigning.java', verify: 'VerifyProof.java' },
        go: { upload: 'upload_document.go', sign: 'send_for_signing.go', verify: 'verify_proof.go' },
        ruby: { upload: 'upload_document.rb', sign: 'send_for_signing.rb', verify: 'verify_proof.rb' },
        dotnet: { upload: 'UploadDocument.cs', sign: 'SendForSigning.cs', verify: 'VerifyProof.cs' },
    };

    function updateCodeDisplay() {
        codeBlocks.forEach(block => {
            const match = block.dataset.scenario === activeScenario && block.dataset.lang === activeLang;
            block.classList.toggle('active', match);
        });

        if (filenameEl && filenameMap[activeLang] && filenameMap[activeLang][activeScenario]) {
            filenameEl.textContent = filenameMap[activeLang][activeScenario];
        }
    }

    scenarioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            scenarioBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeScenario = btn.dataset.scenario;
            updateCodeDisplay();
        });
    });

    langTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            langTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeLang = tab.dataset.lang;
            updateCodeDisplay();
        });
    });

    // Initialize
    updateCodeDisplay();


    /* ─────────────────────────────────────────
       5. DEMO CODE COPY BUTTON
    ───────────────────────────────────────── */
    const demoCopyBtn = document.getElementById('demoCopyBtn');
    if (demoCopyBtn) {
        demoCopyBtn.addEventListener('click', () => {
            const active = document.querySelector('#demoCodeContent .sdk-code-block.active');
            if (!active) return;

            navigator.clipboard.writeText(active.innerText.trim()).then(() => {
                const orig = demoCopyBtn.innerHTML;
                demoCopyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                demoCopyBtn.classList.add('copied');
                setTimeout(() => {
                    demoCopyBtn.innerHTML = orig;
                    demoCopyBtn.classList.remove('copied');
                }, 2000);
            }).catch(() => { });
        });
    }


    /* ─────────────────────────────────────────
       6. FAQ ACCORDION
    ───────────────────────────────────────── */
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const icon = btn.querySelector('.faq-icon');
            const isOpen = item.classList.contains('active');

            document.querySelectorAll('.faq-item.active').forEach(open => {
                open.classList.remove('active');
                open.querySelector('.faq-answer').style.maxHeight = null;
                const ic = open.querySelector('.faq-icon');
                if (ic) ic.style.transform = '';
            });

            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });


    /* ─────────────────────────────────────────
       7. SMOOTH SCROLL ANCHORS
    ───────────────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
