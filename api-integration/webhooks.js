/* =============================================
   WEBHOOKS PAGE — webhooks.js
   BrillSign Developer Portal
   Handles: Event stream, Language tabs, Copy, FAQ
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ─────────────────────────────────────────
       1. SCROLL REVEAL
    ───────────────────────────────────────── */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('observed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.animate-up, .animate-left, .animate-right').forEach(el => {
        revealObserver.observe(el);
    });

    // Why cards & event groups
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.wh-why-card, .wh-event-group, .wh-ann-item').forEach(el => {
        cardObserver.observe(el);
    });


    /* ─────────────────────────────────────────
       2. LIVE EVENT STREAM ANIMATION
    ───────────────────────────────────────── */
    const streamBody = document.getElementById('eventStream');
    if (!streamBody) return;

    const events = [
        { type: 'document.signed', id: 'doc_7f3k9', time: '142ms', status: '200 OK', kind: 'success', icon: '✅' },
        { type: 'signer.viewed', id: 'doc_abc12', time: '3s', status: '200 OK', kind: 'info', icon: '👁️' },
        { type: 'signer.signed', id: 'doc_9x1p2', time: '8s', status: '200 OK', kind: 'success', icon: '✅' },
        { type: 'signer.invited', id: 'doc_m3n4r', time: '12s', status: '200 OK', kind: 'info', icon: '📨' },
        { type: 'tamper.detected', id: 'doc_x91z0', time: '22s', status: '200 OK', kind: 'danger', icon: '🚨' },
        { type: 'document.uploaded', id: 'doc_vq2z1', time: '35s', status: '200 OK', kind: 'info', icon: '📄' },
        { type: 'document.voided', id: 'doc_8k3j2', time: '51s', status: '200 OK', kind: 'warning', icon: '⚠️' },
        { type: 'key.rotated', id: 'doc_r7p1m', time: '1m', status: '200 OK', kind: 'warning', icon: '🔑' },
        { type: 'proof.verified', id: 'doc_b3n2l', time: '1.5m', status: '200 OK', kind: 'success', icon: '🔐' },
        { type: 'signer.declined', id: 'doc_c1q9s', time: '2m', status: '200 OK', kind: 'warning', icon: '❌' },
    ];

    const MAX_ROWS = 6;
    let eventIndex = 0;

    function makeEventRow(ev, delayMs) {
        const row = document.createElement('div');
        row.className = `wh-event-row wh-er-${ev.kind}`;
        row.style.animationDelay = `${delayMs}ms`;
        row.innerHTML = `
            <span class="wh-er-icon">${ev.icon}</span>
            <span class="wh-er-event">${ev.type}</span>
            <span class="wh-er-id">${ev.id}</span>
            <span class="wh-er-time">${ev.time} ago</span>
            <span class="wh-er-status">${ev.status}</span>
        `;
        return row;
    }

    // Seed initial rows
    function seedStream() {
        streamBody.innerHTML = '';
        const seed = events.slice(0, MAX_ROWS);
        seed.forEach((ev, i) => {
            const row = makeEventRow(ev, 0);
            row.style.opacity = 1;
            row.style.animation = 'none';
            streamBody.appendChild(row);
        });
        eventIndex = MAX_ROWS % events.length;
    }

    seedStream();

    // Add new events periodically
    setInterval(() => {
        const ev = events[eventIndex % events.length];
        eventIndex++;

        const row = makeEventRow(ev, 0);
        streamBody.insertBefore(row, streamBody.firstChild);

        // Remove oldest row if too many
        while (streamBody.children.length > MAX_ROWS) {
            streamBody.removeChild(streamBody.lastChild);
        }
    }, 2200);


    /* ─────────────────────────────────────────
       3. CHIP TOOLTIP
    ───────────────────────────────────────── */
    const tooltip = document.getElementById('chipTooltip');

    if (tooltip) {
        document.querySelectorAll('.wh-chip').forEach(chip => {
            chip.addEventListener('mouseenter', (e) => {
                const desc = chip.dataset.desc;
                if (!desc) return;
                tooltip.textContent = desc;
                tooltip.classList.add('visible');
            });

            chip.addEventListener('mousemove', (e) => {
                tooltip.style.left = (e.clientX + 14) + 'px';
                tooltip.style.top = (e.clientY - 36) + 'px';
            });

            chip.addEventListener('mouseleave', () => {
                tooltip.classList.remove('visible');
            });
        });
    }


    /* ─────────────────────────────────────────
       4. LANGUAGE TABS (Verification Code)
    ───────────────────────────────────────── */
    const langBtns = document.querySelectorAll('#whLangTabs .wh-lang-btn');
    const codeBlocks = document.querySelectorAll('#verifyCodeContent .wh-code-block');
    const verifyLabel = document.getElementById('verifyLabel');

    const langLabels = {
        nodejs: 'webhook-verify.js',
        python: 'webhook_verify.py',
        php: 'webhook_verify.php',
        go: 'webhook_verify.go',
    };

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;

            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            codeBlocks.forEach(block => {
                block.classList.toggle('active', block.dataset.lang === lang);
            });

            if (verifyLabel && langLabels[lang]) {
                verifyLabel.textContent = langLabels[lang];
            }
        });
    });


    /* ─────────────────────────────────────────
       5. COPY BUTTONS
    ───────────────────────────────────────── */
    function attachCopy(btnId, getContent) {
        const btn = document.getElementById(btnId);
        if (!btn) return;
        btn.addEventListener('click', () => {
            const text = getContent();
            navigator.clipboard.writeText(text).then(() => {
                const orig = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.innerHTML = orig;
                    btn.classList.remove('copied');
                }, 2000);
            }).catch(() => { });
        });
    }

    // Payload copy
    attachCopy('payloadCopyBtn', () => {
        const pre = document.querySelector('#payloadCode pre');
        return pre ? pre.innerText.replace(/[①②③④⑤] .+/g, '').trim() : '';
    });

    // Verification code copy
    attachCopy('verifyCodeCopyBtn', () => {
        const active = document.querySelector('#verifyCodeContent .wh-code-block.active');
        return active ? active.innerText.trim() : '';
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

            // Close all
            document.querySelectorAll('.faq-item.active').forEach(open => {
                open.classList.remove('active');
                open.querySelector('.faq-answer').style.maxHeight = null;
                const ic = open.querySelector('.faq-icon');
                if (ic) ic.style.transform = '';
            });

            // Open clicked (if was closed)
            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });


    /* ─────────────────────────────────────────
       7. RETRY TIMELINE — Activate nodes on scroll
    ───────────────────────────────────────── */
    const retryTimeline = document.querySelector('.wh-retry-timeline');
    if (retryTimeline) {
        const timelineObs = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const nodes = retryTimeline.querySelectorAll('.wh-retry-node');
                nodes.forEach((node, i) => {
                    setTimeout(() => {
                        node.classList.add('wh-rn-active');
                    }, i * 350);
                });
                timelineObs.unobserve(retryTimeline);
            }
        }, { threshold: 0.3 });
        timelineObs.observe(retryTimeline);
    }


    /* ─────────────────────────────────────────
       8. SMOOTH SCROLL FOR ANCHOR LINKS
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
