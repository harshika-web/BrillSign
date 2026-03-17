/**
 * Audit Compliance Guide — Interactive Logic
 */
document.addEventListener('DOMContentLoaded', () => {
    // Count-up animation
    const counters = document.querySelectorAll('.acg-count');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                const suffix = el.getAttribute('data-suffix') || '';
                const prefix = el.getAttribute('data-prefix') || '';
                let curr = 0;
                const step = Math.max(1, Math.ceil(target / 50));
                const tick = () => {
                    curr = Math.min(curr + step, target);
                    el.textContent = prefix + curr + suffix;
                    if (curr < target) requestAnimationFrame(tick);
                };
                tick();
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));

    // Timeline step reveal on scroll
    const steps = document.querySelectorAll('.acg-tl-step');
    const stepObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                stepObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    steps.forEach((s, i) => {
        s.style.opacity = '0';
        s.style.transform = 'translateY(25px)';
        s.style.transition = `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`;
        stepObserver.observe(s);
    });
});
