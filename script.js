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
