/**
 * Interactive Background Manager
 * Injects animated background elements into feature pages
 */

function initInteractiveBackground() {
    // Create background container
    const bgContainer = document.createElement('div');
    bgContainer.className = 'animated-bg';

    // Create floating orbs
    for (let i = 1; i <= 3; i++) {
        const orb = document.createElement('div');
        orb.className = `bg-orb bg-orb-${i}`;
        bgContainer.appendChild(orb);
    }

    // Create computational grid
    const grid = document.createElement('div');
    grid.className = 'bg-grid';
    bgContainer.appendChild(grid);

    // Create floating particles
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'bg-particle';
        bgContainer.appendChild(particle);
    }

    // Insert at the beginning of body
    document.body.insertBefore(bgContainer, document.body.firstChild);
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initInteractiveBackground);
