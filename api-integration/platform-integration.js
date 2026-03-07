/* =============================================
   PLATFORM INTEGRATION — platform-integration.js
   Shared JS for all 8 platform pages.
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ── 1. Scroll Reveal ── */
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('observed'); revealObs.unobserve(e.target); }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-up, .animate-right, .animate-left').forEach(el => revealObs.observe(el));

    const cardObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('visible'); cardObs.unobserve(e.target); }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.pi-feature-card, .pi-setup-step').forEach(el => cardObs.observe(el));


    /* ── 2. Flow Steps — Light up on scroll ── */
    const flowSteps = document.querySelectorAll('.pi-flow-step');
    if (flowSteps.length) {
        const flowObs = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                flowSteps.forEach((s, i) => setTimeout(() => s.classList.add('pi-step-lit'), i * 400));
                flowObs.unobserve(entries[0].target);
            }
        }, { threshold: 0.3 });
        flowObs.observe(document.querySelector('.pi-flow') || flowSteps[0]);
    }


    /* ── 3. Setup Code Copy Buttons ── */
    document.querySelectorAll('.pi-setup-copy').forEach(btn => {
        btn.addEventListener('click', () => {
            const block = btn.closest('.pi-setup-code');
            const text = block ? block.textContent.trim() : '';
            navigator.clipboard.writeText(text).then(() => {
                btn.textContent = '✓ Copied';
                setTimeout(() => btn.textContent = 'Copy', 2000);
            }).catch(() => { });
        });
    });


    /* ── 4. FAQ Accordion ── */
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const icon = btn.querySelector('.faq-icon');
            const isOpen = item.classList.contains('active');

            document.querySelectorAll('.faq-item.active').forEach(o => {
                o.classList.remove('active');
                o.querySelector('.faq-answer').style.maxHeight = null;
                const ic = o.querySelector('.faq-icon');
                if (ic) ic.style.transform = '';
            });

            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });


    /* ── 5. Smooth Scroll Anchors ── */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const t = document.querySelector(link.getAttribute('href'));
            if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });
});
