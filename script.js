document.addEventListener('DOMContentLoaded', () => {
    const range = document.getElementById('calc-range');
    const label = document.getElementById('label-val');
    const price = document.getElementById('price-val');

    // Конфигурация калькулятора
    const config = {
        1: { text: 'Startup', price: '45 000' },
        2: { text: 'Standard', price: '75 000' },
        3: { text: 'Enterprise', price: '150 000' }
    };

    // Обновление цены с легкой анимацией прозрачности
    range.addEventListener('input', (e) => {
        const val = e.target.value;
        
        label.style.opacity = '0.3';
        price.style.opacity = '0.3';
        
        setTimeout(() => {
            label.textContent = config[val].text;
            price.textContent = config[val].price;
            label.style.opacity = '1';
            price.style.opacity = '1';
        }, 100);
    });

    // Анимация появления при скролле (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Применяем начальные стили анимации ко всем карточкам
    document.querySelectorAll('.feature-card, .card-shadow, .search-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1)';
        observer.observe(el);
    });

    // Легкий виброотклик для мобильных при нажатии на кнопки (если поддерживается)
    document.querySelectorAll('.apple-btn, .tab-item').forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.navigator.vibrate) {
                window.navigator.vibrate(10);
            }
        });
    });
});
