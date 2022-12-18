const slides = document.querySelectorAll('.slide');
debugger
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveSlide();
        slide.classList.add('active');
    })
}

function clearActiveSlide() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    });
}
