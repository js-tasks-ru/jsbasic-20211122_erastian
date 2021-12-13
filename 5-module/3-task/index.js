function initCarousel() {
  let carousel = document.querySelector('.container');
  let toLeft = carousel.querySelector('.carousel__arrow_left');
  let toRight = carousel.querySelector('.carousel__arrow_right');
  let carouselInner = carousel.querySelector('.carousel__inner');
  let currentSlide = 0;

  function moveCarouselTo(offset) {
    carouselInner.style.transform = `translateX(-${offset}px)`;
  }

  if (currentSlide === 0) {
    toLeft.style.display = 'none';
  }

  toLeft.addEventListener('click', function () {
    if (currentSlide > 0) {
      currentSlide--;
      moveCarouselTo(currentSlide * carouselInner.offsetWidth);
    }
  });

  toRight.addEventListener('click', function () {
    if (currentSlide < carouselInner.children.length + 1) {
      currentSlide++;
      moveCarouselTo(currentSlide * carouselInner.offsetWidth);
    }
  });

  carousel.addEventListener('click', function () {
    if (currentSlide === 0) {
      toLeft.style.display = 'none';
    } else if (currentSlide === carouselInner.children.length - 1) {
      toRight.style.display = 'none';
    } else {
      toLeft.style.display = '';
      toRight.style.display = '';
    }
  });


}

