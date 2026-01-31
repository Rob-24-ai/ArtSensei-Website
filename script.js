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

// Mobile lightbox for phone screenshots
(function() {
    if (window.innerWidth > 768) return;
    var img = document.getElementById('shots-img');
    var lightbox = document.getElementById('lightbox');
    if (!img || !lightbox) return;

    var lightboxImg = document.getElementById('lightbox-img');

    img.addEventListener('click', function() {
        if (lightboxImg && !lightboxImg.src.includes('ExampleShotsRow')) {
            lightboxImg.src = 'Images/ExampleShotsRow.jpg';
        }
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    var closeBtn = document.getElementById('lightbox-close');

    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) closeLightbox();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
})();

// "Yeah, it's free" color transition at halfway up viewport
(function() {
    var heading = document.querySelector('.audience h2');
    if (!heading) return;
    var triggered = false;

    window.addEventListener('scroll', function() {
        if (!triggered) {
            var rect = heading.getBoundingClientRect();
            var quarter = window.innerHeight * 0.75;
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
