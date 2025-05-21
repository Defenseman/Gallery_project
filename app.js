
function slidesPlugin(activeSlide) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            clearActiveClass();
            slide.classList.add('active')
        });
    });
    
    function clearActiveClass() {
        slides.forEach(slide => {
            slide.classList.remove('active')
        });
    };
};

slidesPlugin(2);