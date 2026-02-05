// Rotating use cases
(function() {
    var phrases = [
        'Spot what\'s off',
        'Get a second pair of eyes',
        'Sort out your values',
        'Know when to leave a work alone',
        'Mix that one tricky color',
        'Figure out what\'s next',
        'Arrange your warms and cools',
        'See your work in new ways',
        'Fix muddy passages',
        'Think through your subject',
        'Get proportions right',
        'Discover art-historical precedents',
        'Check your light logic',
        'Get the mood you\'re looking for',
        'Solve compositional problems',
        'Game out a studio visit',
        'Learn new techniques',
        'Understand your palette',
        'See color more clearly'
    ];
    var el = document.getElementById('use-case-line');
    if (!el) return;
    var i = 0;
    el.textContent = phrases[0];
    setInterval(function() {
        el.style.opacity = '0';
        setTimeout(function() {
            i = (i + 1) % phrases.length;
            el.textContent = phrases[i];
            el.style.opacity = '1';
        }, 500);
    }, 2500);
})();

// Swatch color picker
document.querySelectorAll('.swatch').forEach(function(swatch) {
    swatch.addEventListener('click', function() {
        var color = this.getAttribute('data-color');
        document.querySelector('.hero-statement em').style.color = color;
        document.querySelectorAll('.swatch').forEach(function(s) {
            s.style.outline = '2px solid transparent';
        });
        this.style.outline = '2px solid #fff';
    });
});

// Scroll-linked logo spin
(function() {
    var logo = document.getElementById('spin-logo');
    if (!logo) return;

    window.addEventListener('scroll', function() {
        var deg = window.scrollY * -0.5;
        logo.style.transform = 'rotate(' + deg + 'deg)';
    }, false);
})();

// Sticky header - show after scrolling past hero
(function() {
    var header = document.getElementById('sticky-header');
    var tear = document.querySelector('.paper-tear');
    if (!header || !tear) return;

    var btn = header.querySelector('.cta-button-sm');
    var ticking = false;

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                var tearBottom = tear.offsetTop + tear.offsetHeight + 30;
                var docHeight = document.documentElement.scrollHeight - window.innerHeight;
                if (window.scrollY > tearBottom) {
                    header.classList.add('visible');
                    var range = docHeight - tearBottom;
                    if (range > 0 && btn) {
                        var progress = Math.min((window.scrollY - tearBottom) / range, 1);
                        btn.style.transform = 'translateX(' + (progress * -30) + '%)';
                    }
                } else {
                    header.classList.remove('visible');
                    if (btn) btn.style.transform = 'translateX(0)';
                }
                ticking = false;
            });
            ticking = true;
        }
    }, {passive: true});
})();

// Scroll-illuminating steps (1-2-3)
(function() {
    var wrap = document.querySelector('.steps-sticky-wrap');
    if (!wrap) return;

    var cols = wrap.querySelectorAll('.step-col');
    var current = 0;
    var total = cols.length;
    var ticking = false;

    function setStep(index) {
        if (index === current) return;
        for (var i = 0; i < total; i++) {
            cols[i].classList.remove('step-col-active');
        }
        cols[index].classList.add('step-col-active');
        current = index;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                var rect = wrap.getBoundingClientRect();
                var wrapHeight = wrap.offsetHeight;
                var scrolled = -rect.top;
                var progress = Math.max(0, Math.min(1, scrolled / (wrapHeight - window.innerHeight)));
                var step = Math.min(total - 1, Math.floor(progress * total));
                setStep(step);
                ticking = false;
            });
            ticking = true;
        }
    }, {passive: true});
})();

// Filmstrip scroll-linked carousel
(function() {
    var strip = document.getElementById('filmstrip');
    var track = document.getElementById('filmstrip-track');
    if (!strip || !track) return;
    var rafId = false;

    window.addEventListener('scroll', function() {
        if (!rafId) {
            rafId = requestAnimationFrame(function() {
                var rect = strip.getBoundingClientRect();
                var viewH = window.innerHeight;
                // When filmstrip is in/near viewport, calculate progress
                var start = rect.top - viewH;
                var end = rect.bottom;
                var range = end - start;
                if (range > 0) {
                    var progress = Math.max(0, Math.min(1, -start / range));
                    var maxShift = track.scrollWidth - strip.offsetWidth;
                    track.style.transform = 'translateX(' + (-progress * maxShift * 0.5) + 'px)';
                }
                rafId = false;
            });
        }
    }, {passive: true});
})();

// Mobile slideshow for phone screenshots
(function() {
    if (window.innerWidth > 768) return;
    var wrap = document.getElementById('shots-slideshow');
    if (!wrap) return;

    var slides = wrap.querySelectorAll('.slide');
    var dots = wrap.querySelectorAll('.dot');
    var captionEl = document.getElementById('slideshow-caption');
    var captions = [
        'Show your work.',
        'ArtSensei weighs in.',
        'Your conversation continues.',
        'See differently.'
    ];
    var current = 0;
    var total = slides.length;
    var autoTimer;
    var AUTO_DELAY = 3500;

    function goTo(idx) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (idx + total) % total;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
        if (captionEl) captionEl.textContent = captions[current];
    }

    function startAuto() {
        stopAuto();
        autoTimer = setInterval(function() { goTo(current + 1); }, AUTO_DELAY);
    }

    function stopAuto() {
        clearInterval(autoTimer);
    }

    // Dot navigation
    dots.forEach(function(dot) {
        dot.addEventListener('click', function() {
            goTo(parseInt(this.dataset.slide, 10));
            startAuto();
        });
    });

    // Swipe support
    var touchStartX = 0;
    wrap.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
        stopAuto();
    }, {passive: true});

    wrap.addEventListener('touchend', function(e) {
        var diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
            goTo(diff > 0 ? current + 1 : current - 1);
        }
        startAuto();
    }, {passive: true});

    startAuto();
})();


// Testimonial fade-out based on scroll through wrapper
(function() {
    var testi = document.getElementById('testi-sticky');
    var wrap = document.getElementById('testi-audience-wrap');
    if (!testi || !wrap) return;

    window.addEventListener('scroll', function() {
        var wrapRect = wrap.getBoundingClientRect();
        var wrapHeight = wrap.offsetHeight;
        var scrolled = -wrapRect.top;
        // Testimonial is visible for first 40% of wrapper scroll, then fades over next 20%
        var fadeStart = wrapHeight * 0.2;
        var fadeEnd = wrapHeight * 0.35;
        if (scrolled < fadeStart) {
            testi.style.opacity = 1;
        } else if (scrolled > fadeEnd) {
            testi.style.opacity = 0;
        } else {
            testi.style.opacity = 1 - (scrolled - fadeStart) / (fadeEnd - fadeStart);
        }
    }, {passive: true});
})();

// "Yeah, it's free" color transition at halfway up viewport
(function() {
    var heading = document.querySelector('.audience h2');
    if (!heading) return;
    var triggered = false;

    window.addEventListener('scroll', function() {
        if (!triggered) {
            var rect = heading.getBoundingClientRect();
            var quarter = window.innerHeight * 0.5;
            if (rect.top < quarter) {
                heading.classList.add('color-active');
                triggered = true;
            }
        }
    }, {passive: true});
})();

// Scroll reveal - runs first to avoid hidden content
(function() {
    function revealOnScroll() {
        var reveals = document.querySelectorAll('.reveal');
        for (var i = 0; i < reveals.length; i++) {
            var rect = reveals[i].getBoundingClientRect();
            var windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top < windowHeight - 50) {
                reveals[i].classList.add('visible');
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll, false);
    window.addEventListener('load', revealOnScroll, false);
    document.addEventListener('DOMContentLoaded', revealOnScroll, false);
    revealOnScroll();
})();

// Waitlist forms - submit to Loops
document.addEventListener('DOMContentLoaded', function() {
    var forms = document.querySelectorAll('.waitlist-form');

    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            var emailInput = form.querySelector('input[type="email"]');
            var email = emailInput.value;
            var button = form.querySelector('button');
            var originalText = button.textContent;

            // Update button state
            button.textContent = 'Joining...';
            button.disabled = true;

            // Submit to Loops
            fetch('https://app.loops.so/api/newsletter-form/cmhfbli50298yyp0ig71rdo3e', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'email=' + encodeURIComponent(email)
            })
            .then(function(response) { return response.json(); })
            .then(function(data) {
                if (data.success) {
                    button.textContent = "Check your email!";
                    emailInput.value = '';
                } else {
                    button.textContent = 'Error - try again';
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
                button.textContent = 'Error - try again';
            })
            .finally(function() {
                setTimeout(function() {
                    button.textContent = originalText;
                    button.disabled = false;
                }, 3000);
            });
        });
    });
});
