// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (cursorDot && cursorOutline && window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows strictly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with a slight delay using simple animation frame approach
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effect on clickable elements
        const clickables = document.querySelectorAll('a, button, .btn');
        
        clickables.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorDot.style.backgroundColor = 'transparent';
                cursorDot.style.border = '1px solid var(--primary)';
                
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.backgroundColor = 'rgba(255, 107, 0, 0.1)';
                cursorOutline.style.borderColor = 'transparent';
            });
            
            link.addEventListener('mouseleave', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorDot.style.backgroundColor = 'var(--primary)';
                cursorDot.style.border = 'none';
                
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.backgroundColor = 'transparent';
                cursorOutline.style.borderColor = 'var(--primary-glow)';
            });
        });
    }

    // Subtly parallax the code blocks
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        
        const codeBlock = document.querySelector('.code-block');
        const glassCard = document.querySelector('.glass-card');
        
        if (codeBlock) {
            // Apply slight tilt opposite to mouse direction
            codeBlock.style.transform = `rotate(-5deg) translate(${x * 30}px, ${y * 30}px)`;
        }
        if (glassCard) {
            glassCard.style.transform = `translate(30%, 30%) rotate(5deg) translate(${x * -40}px, ${y * -40}px)`;
        }
    });

    // Scroll Reveal Effects
    const revealElements = document.querySelectorAll('section, .project-card, .skill-chip');
    
    // initially add reveal class
    revealElements.forEach(el => {
        // don't add to hero section as it's visible on load
        if(!el.classList.contains('hero')) {
            el.classList.add('reveal');
        }
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
});
