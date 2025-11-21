// ===== FOOTER YEAR =====
document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.createElement("span");
    yearSpan.textContent = new Date().getFullYear();
    const footer = document.querySelector(".site-footer div");
    footer.insertBefore(yearSpan, footer.firstChild);
});

// ===== BURGER MENU =====
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('nav-open');
});

// ===== SMOOTH SCROLL =====
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== MOTIVATION SECTION ANIMATION =====
const motivationSection = document.getElementById('motivation');

window.addEventListener('scroll', () => {
    const rect = motivationSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        motivationSection.style.transform = 'translateY(0)';
        motivationSection.style.opacity = '1';
    } else {
        motivationSection.style.transform = 'translateY(50px)';
        motivationSection.style.opacity = '0';
    }
});
