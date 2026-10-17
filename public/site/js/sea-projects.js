/* SEA — scrubbed column and image parallax, with responsive cleanup. */
(function () {
    var section = document.querySelector('.sea-projects');
    if (!section) { return; }
    var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
    if (!hasGsap) { return; }
    gsap.registerPlugin(ScrollTrigger);
    var media = gsap.matchMedia();
    media.add({
        desktop: '(min-width: 768px)',
        mobile: '(max-width: 767px)',
        reduced: '(prefers-reduced-motion: reduce)'
    }, function (context) {
        if (context.conditions.reduced) { return; }
        var desktop = context.conditions.desktop;
        var cards = gsap.utils.toArray('.sea-card', section);
        if (desktop) {
            // The two tracks glide at different speeds, as in the reference.
            ['.sea-col-left', '.sea-col-right'].forEach(function (selector, index) {
                var column = section.querySelector(selector);
                if (!column) { return; }
                var travel = index === 0 ? 45 : 150;
                gsap.fromTo(column, { y: travel }, {
                    y: -travel,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 0.8,
                        invalidateOnRefresh: true
                    }
                });
            });
        }
        cards.forEach(function (card) {
            var img = card.querySelector('.sea-card-media img');
            if (!img) { return; }
            gsap.set(img, { height: '128%', top: '-14%' });
            gsap.fromTo(img, { yPercent: -9 }, {
                yPercent: 9,
                ease: 'none',
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.65,
                    invalidateOnRefresh: true
                }
            });
        });
    });
    // Lazy-loaded photos and fonts can change the surrounding page height.
    section.querySelectorAll('img').forEach(function (img) {
        if (!img.complete) {
            img.addEventListener('load', function () { ScrollTrigger.refresh(); }, { once: true });
        }
    });
    window.addEventListener('load', function () { ScrollTrigger.refresh(); }, { once: true });
    if (document.fonts) {
        document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }
})();
