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
    const logo = document.getElementById('spin-logo');
    if (!logo) return;

    window.addEventListener('scroll', function() {
        const deg = window.scrollY * -0.5;
        logo.style.transform = 'rotate(' + deg + 'deg)';
    }, { passive: true });
})();

// Waitlist forms - submit to Loops
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.waitlist-form');

    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value;
            const button = form.querySelector('button');
            const originalText = button.textContent;

            // Update button state
            button.textContent = 'Joining...';
            button.disabled = true;

            // Submit to Loops
            fetch('https://app.loops.so/api/newsletter-form/cmhfbli50298yyp0ig71rdo3e', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'newsletter-form-input=' + encodeURIComponent(email)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    button.textContent = "Check your email!";
                    emailInput.value = '';
                } else {
                    button.textContent = 'Error - try again';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                button.textContent = 'Error - try again';
            })
            .finally(() => {
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                }, 3000);
            });
        });
    });
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
