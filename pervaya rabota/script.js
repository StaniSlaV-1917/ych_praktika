document.addEventListener('DOMContentLoaded', function() {
    let menu = document.querySelector(".menu");
    let menuToggle = document.querySelector(".head4");
  
    menuToggle.addEventListener("click", function(e) {
      e.preventDefault();
      menu.classList.toggle("show-menu");
      this.classList.toggle("active");
    });
  
    window.addEventListener('resize', function() {
      if (this.window.innerWidth > 375 && menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
        menuToggle.classList.remove("active");
      }
    });
  });
//--------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.chel');
    let currentSlide = 0;

    // Функция обновления слайдера
    function updateSlider() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');
    }

    // Автоматическая смена слайдов
    setInterval(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }, 3000); // Смена каждые 3 секунды

    // Инициализация слайдера
    updateSlider();
});