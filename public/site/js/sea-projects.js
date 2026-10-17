/* ==========================================================================
   SEA — Selected Projects scroll motion (GSAP + ScrollTrigger)
   Left column follows normal flow; right column scrolls slightly faster.
   Cards reveal from below (fade in + 40px rise); images get a subtle
   inner parallax. Reverses smoothly on upward scroll. Honors
   prefers-reduced-motion and falls back to a simple single column on mobile.
   ========================================================================== */
(function () {
    var section = document.querySelector('.sea-projects');
    if (!section) { return; }

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

    if (reduceMotion || !hasGsap || window.innerWidth < 768) {
        // Everything is visible by default in CSS — nothing to do.
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    var cards = gsap.utils.toArray('.sea-card', section);

    // Initial state, then reveal each card as it enters the viewport.
    cards.forEach(function (card) {
        gsap.fromTo(card,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                ease: 'power2.out',
                duration: 0.9,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 88%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Right column drifts slightly faster than the page (layered parallax).
    var rightCol = section.querySelector('.sea-col-right');
    if (rightCol) {
        gsap.fromTo(rightCol,
            { y: 70 },
            {
                y: -70,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.6
                }
            }
        );
    }

    // Subtle inner image parallax (image is taller than its frame via scale).
    cards.forEach(function (card) {
        var img = card.querySelector('.sea-card-media img');
        var frame = card.querySelector('.sea-card-media');
        if (!img || !frame) { return; }

        // Give the image headroom so parallax never exposes empty edges.
        img.style.height = '112%';
        img.style.width = '100%';
        img.style.position = 'absolute';
        img.style.top = '-6%';
        img.style.left = '0';
        frame.style.position = frame.style.position || 'relative';

        gsap.fromTo(img,
            { yPercent: -4 },
            {
                yPercent: 4,
                ease: 'none',
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.6
                }
            }
        );
    });
})();
