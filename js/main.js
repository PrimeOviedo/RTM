// Inicializar AOS (animaciones al hacer scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true, // solo una vez por elemento
});

// Menú móvil (para futuras mejoras si agregas ícono burger)
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav ul');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
});

// Scroll lento y suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        window.scrollTo({
            top: target.offsetTop - 60, // ajusta por header fijo
            behavior: 'smooth'
        });
    });
});