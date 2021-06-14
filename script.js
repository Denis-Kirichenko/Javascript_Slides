const slides = document.querySelectorAll('.slide');

slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    deleteActiveClass();
    slide.classList.add('active');
  });
});

deleteActiveClass = function () {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
};
