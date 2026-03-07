/* =============================================
   INTEGRATIONS HUB — integrations-hub.js
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {

    /* ── Scroll Reveal ── */
    const obs = new IntersectionObserver(e => e.forEach(x => { if (x.isIntersecting) { x.target.classList.add('observed'); obs.unobserve(x.target); } }), { threshold: 0.1 });
    document.querySelectorAll('.animate-up,.animate-right,.animate-left').forEach(el => obs.observe(el));

    /* ── Category Filter ── */
    const filterBtns = document.querySelectorAll('.ihub-filter-btn');
    const cards = document.querySelectorAll('.ihub-card');
    const showLabel = document.getElementById('ihubShowing');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;

            let shown = 0;
            cards.forEach(card => {
                const cats = card.dataset.cats || '';
                const match = filter === 'all' || cats.includes(filter);
                card.classList.toggle('hidden', !match);
                if (match) shown++;
            });

            if (showLabel) {
                showLabel.innerHTML = `Showing <strong>${shown}</strong> of 30+ integrations`;
            }
        });
    });

    /* ── How-It-Works flow dots light up ── */
    const howSteps = document.querySelectorAll('.ihub-how-step');
    if (howSteps.length) {
        const hObs = new IntersectionObserver(e => {
            if (e[0].isIntersecting) {
                howSteps.forEach((s, i) => setTimeout(() => s.querySelector('.ihub-how-num').style.background = 'rgba(0,102,255,0.25)', i * 400));
                hObs.unobserve(e[0].target);
            }
        }, { threshold: 0.3 });
        hObs.observe(document.querySelector('.ihub-how-flow') || howSteps[0]);
    }

    /* ── Smooth scroll ── */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const t = document.querySelector(a.getAttribute('href'));
            if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });
});
