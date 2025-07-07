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

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".timeline-item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const indicatorsContainer = document.getElementById("carouselIndicators");
    let current = 0;

    // Crear los indicadores dinámicamente
    items.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.addEventListener("click", () => {
            current = index;
            showItem(current);
        });
        indicatorsContainer.appendChild(dot);
    });

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });

        const dots = indicatorsContainer.querySelectorAll("span");
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    prevBtn.addEventListener("click", () => {
        current = (current - 1 + items.length) % items.length;
        showItem(current);
    });

    nextBtn.addEventListener("click", () => {
        current = (current + 1) % items.length;
        showItem(current);
    });

    showItem(current);
});