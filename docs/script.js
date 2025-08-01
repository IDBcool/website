document.addEventListener('DOMContentLoaded', function() {
    // 1. Прокрутка для фиксированной шапки уже реализована в CSS
    
    // 2. Открытие/закрытие модальных окон
    const modal = document.getElementById('signup-modal');
    const signupButtons = document.querySelectorAll('.signup-btn:not(#header-signup)');
    const closeModal = document.querySelector('.close-modal');
    
    // Открытие модального окна при клике на кнопки записи
    signupButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'flex';
        });
    });
    
    // Закрытие модального окна
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Закрытие при клике вне модального окна
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // 3. Работа с блоками проблем
    const problemItems = document.querySelectorAll('.problem-item');
    
    problemItems.forEach(item => {
        item.addEventListener('click', function() {
            const problemId = this.getAttribute('data-problem');
            const details = document.getElementById(`problem-details-${problemId}`);
            
            if (details.style.display === 'block') {
                details.style.display = 'none';
            } else {
                // Сначала скрываем все открытые детали
                document.querySelectorAll('.problem-details').forEach(d => {
                    d.style.display = 'none';
                });
                // Показываем текущие
                details.style.display = 'block';
            }
        });
    });
    
    // 4. Работа с подходами
    const approachItems = document.querySelectorAll('.approach-item');
    
    approachItems.forEach(item => {
        item.addEventListener('click', function() {
            const approachId = this.getAttribute('data-approach');
            const details = document.getElementById(`approach-details-${approachId}`);
            
            if (details.style.display === 'block') {
                details.style.display = 'none';
            } else {
                // Сначала скрываем все открытые детали
                document.querySelectorAll('.approach-details').forEach(d => {
                    d.style.display = 'none';
                });
                // Показываем текущие
                details.style.display = 'block';
            }
        });
    });
    
    // 7. Карусель отзывов
    const reviewsSlides = document.querySelectorAll('.reviews-slide');
    const prevBtn = document.querySelector('.reviews-prev');
    const nextBtn = document.querySelector('.reviews-next');
    let currentSlide = 0;
    
    function showSlide(n) {
        reviewsSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        currentSlide = (n + reviewsSlides.length) % reviewsSlides.length;
        reviewsSlides[currentSlide].classList.add('active');
    }
    
    prevBtn.addEventListener('click', function() {
        showSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', function() {
        showSlide(currentSlide + 1);
    });
    
    // Инициализация первого слайда
    showSlide(0);
    
    // 8. Обработка основной формы
    const mainForm = document.getElementById('main-contact-form');
    
    if (mainForm) {
        mainForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Здесь можно добавить AJAX-отправку или другую логику
            alert('Спасибо за вашу заявку! Я свяжусь с вами в ближайшее время.');
            mainForm.reset();
        });
    }
});
