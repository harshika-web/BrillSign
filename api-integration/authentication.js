/* =============================================
   AUTHENTICATION PAGE — authentication.js
   BrillSign Developer Portal
   Handles: Ring diagram particle, checklist
   animation, scope builder, FAQ
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


    /* ─────────────────────────────────────────
       2. HERO PARTICLE ANIMATION
       A glowing dot travels from outer ring → core,
       simulating an authenticated request being processed
    ───────────────────────────────────────── */
    const particle = document.getElementById('authParticle');
    const diagram = document.querySelector('.auth-hero-diagram');

    if (particle && diagram) {
        function animateParticle() {
            const rect = diagram.getBoundingClientRect();
            const cx = rect.width / 2;
            const cy = rect.height / 2;

            // Start at a random point on the outer ring edge
            const startAngle = Math.random() * Math.PI * 2;
            const outerR = 200;
            const startX = cx + outerR * Math.cos(startAngle);
            const startY = cy + outerR * Math.sin(startAngle);

            particle.style.cssText = `
                left: ${startX}px;
                top:  ${startY}px;
                opacity: 1;
                transform: translate(-50%,-50%) scale(1);
                transition: none;
            `;

            // Animate inward toward core in stages
            const stages = [
                { r: 140, delay: 0, dur: 600 },
                { r: 80, delay: 600, dur: 500 },
                { r: 0, delay: 1100, dur: 400 },
            ];

            stages.forEach(({ r, delay, dur }) => {
                setTimeout(() => {
                    const angle = startAngle + (Math.PI * 0.1);
                    const tx = r === 0 ? cx : cx + r * Math.cos(angle);
                    const ty = r === 0 ? cy : cy + r * Math.sin(angle);

                    particle.style.transition = `left ${dur}ms cubic-bezier(.4,0,.2,1), top ${dur}ms cubic-bezier(.4,0,.2,1), transform ${dur}ms ease, opacity ${dur}ms ease`;
                    particle.style.left = `${tx}px`;
                    particle.style.top = `${ty}px`;
                    particle.style.opacity = r === 0 ? '0' : '1';
                    particle.style.transform = `translate(-50%,-50%) scale(${r === 0 ? 3 : 1})`;
                }, delay);
            });
        }

        // Run immediately and repeat
        animateParticle();
        setInterval(animateParticle, 3200);
    }


    /* ─────────────────────────────────────────
       3. KEY MANAGEMENT CHECKLIST
       Checks appear one by one when section scrolls into view
    ───────────────────────────────────────── */
    const checkItems = document.querySelectorAll('.auth-check-item');

    if (checkItems.length) {
        const checkObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                checkItems.forEach((item, i) => {
                    const delay = parseInt(item.dataset.delay || 0);
                    setTimeout(() => {
                        item.classList.add('checked');
                    }, delay + 200);
                });
                checkObserver.unobserve(entries[0].target);
            }
        }, { threshold: 0.2 });
        checkObserver.observe(document.getElementById('authChecks') || checkItems[0]);
    }


    /* ─────────────────────────────────────────
       4. SCOPE BUILDER — TOGGLE → PREVIEW
    ───────────────────────────────────────── */
    const scopeToggles = document.querySelectorAll('#scopeToggles input[type="checkbox"]');
    const scopePreview = document.getElementById('scopePreview');

    function updateScopePreview() {
        const active = [];
        scopeToggles.forEach(cb => {
            if (cb.checked) active.push(cb.dataset.scope);
        });
        if (scopePreview) {
            scopePreview.textContent = active.length > 0
                ? active.join(' ')
                : '(no scopes selected — all requests will fail)';
            scopePreview.style.color = active.length === 0 ? '#f87171' : '#86efac';
        }
    }

    scopeToggles.forEach(cb => cb.addEventListener('change', updateScopePreview));
    updateScopePreview(); // Initialize


    /* ─────────────────────────────────────────
       5. MINI COPY BUTTONS (Auth Method Cards)
    ───────────────────────────────────────── */
    document.querySelectorAll('.auth-mini-copy').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.dataset.copy;
            if (!text) return;
            navigator.clipboard.writeText(text).then(() => {
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


    /* ─────────────────────────────────────────
       8. SCOPES TABLE ROW HOVER — ripple class
    ───────────────────────────────────────── */
    document.querySelectorAll('.auth-sr-hover').forEach(row => {
        row.addEventListener('mouseenter', () => row.style.background = 'rgba(34,197,94,0.02)');
        row.addEventListener('mouseleave', () => row.style.background = '');
    });

});
