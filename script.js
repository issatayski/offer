document.addEventListener('DOMContentLoaded', () => {
    const rangeInput = document.getElementById('priceRange');
    const daysDisplay = document.getElementById('days-count');
    const priceDisplay = document.getElementById('totalPrice');

    // 1. Логика калькулятора
    rangeInput.addEventListener('input', (e) => {
        const days = e.target.value;
        daysDisplay.textContent = `${days} дней`;
        
        // Базовая логика цены (например, 15к за день работы)
        const total = days * 15000;
        priceDisplay.textContent = total.toLocaleString() + ' ₸';
    });

    // 2. Анимация появления элементов (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
        revealOnScroll.observe(card);
    });

    // Класс для анимации (добавляется через стили или напрямую)
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.card').forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    });
});
