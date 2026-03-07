/**
 * BrillSign — REST API Page JavaScript
 * File: api-integration/rest-api.js
 * Handles: scroll reveal, scenario tabs, language tabs, copy button, FAQ accordion
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ══════════════════════════════════════
       1. SCROLL REVEAL (IntersectionObserver)
    ══════════════════════════════════════ */
    const revealTargets = document.querySelectorAll(
        '.rest-ep-card, .rest-flow-node, .rest-flow-connector, ' +
        '.rest-trust-card, .rest-tier-card, .rest-radar, ' +
        '.why-card, .faq-item'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        const sorted = entries.filter(e => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        sorted.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, idx * 75);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(el => revealObserver.observe(el));


    /* ══════════════════════════════════════
       2. SCENARIO TAB SWITCHER
    ══════════════════════════════════════ */
    const scenarioBtns = document.querySelectorAll('.rest-scenario-btn');
    const langBtns = document.querySelectorAll('.rest-lang-btn');
    const codeBlocks = document.querySelectorAll('.rest-code-block');
    const scenarioLabel = document.getElementById('scenarioLabel');

    // Scenario label text map
    const scenarioLabels = {
        sign: 'POST /v1/sign',
        verify: 'GET /v1/verify/{signature_id}',
        webhook: 'POST /v1/webhooks'
    };

    let activeScenario = 'sign';
    let activeLang = 'curl';

    function updateCodeBlock() {
        codeBlocks.forEach(block => {
            const matches = block.dataset.scenario === activeScenario &&
                block.dataset.lang === activeLang;
            block.classList.toggle('active', matches);
        });
        if (scenarioLabel) {
            scenarioLabel.textContent = scenarioLabels[activeScenario] || '';
        }
    }

    scenarioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            scenarioBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeScenario = btn.dataset.scenario;
            updateCodeBlock();
        });
    });

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeLang = btn.dataset.lang;
            updateCodeBlock();
        });
    });

    // Initialize
    updateCodeBlock();


    /* ══════════════════════════════════════
       3. COPY BUTTON
    ══════════════════════════════════════ */
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const activeBlock = document.querySelector('.rest-code-block.active');
            if (!activeBlock) return;

            const textToCopy = activeBlock.innerText || activeBlock.textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
                    copyBtn.classList.remove('copied');
                }, 2200);
            }).catch(() => {
                // Fallback for older browsers
                const ta = document.createElement('textarea');
                ta.value = textToCopy;
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
                    copyBtn.classList.remove('copied');
                }, 2200);
            });
        });
    }


    /* ══════════════════════════════════════
       4. FAQ ACCORDION
    ══════════════════════════════════════ */
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all others
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const ans = item.querySelector('.faq-answer');
                if (ans) {
                    ans.style.maxHeight = null;
                    ans.style.opacity = '0';
                }
            });

            // Toggle current
            if (!isActive) {
                faqItem.classList.add('active');
                const ans = faqItem.querySelector('.faq-answer');
                if (ans) {
                    ans.style.maxHeight = ans.scrollHeight + 'px';
                    ans.style.opacity = '1';
                }
            }
        });
    });


    /* ══════════════════════════════════════
       5. SMOOTH SCROLL for anchor links
    ══════════════════════════════════════ */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });


    /* ══════════════════════════════════════
       6. LANGUAGE ATTRIBUTE on <pre> blocks
          — fix for shared-components language
    ══════════════════════════════════════ */
    // Ensure the default block shows on load
    const defaultBlock = document.querySelector('.rest-code-block[data-scenario="sign"][data-lang="curl"]');
    if (defaultBlock) {
        defaultBlock.classList.add('active');
    }

});
