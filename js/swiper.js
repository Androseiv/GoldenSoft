const SLIDES_PER_VIEW_2 = 4;

const swiper = new Swiper('.swiper1', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    dynamicMainBullets: 1,
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: false,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  breakpoints: {
    870: {
      slidesPerView: SLIDES_PER_VIEW_2,
      slidesPerGroup: 2,
      freeMode: false,
    }
  }
});

const swiperPrev = document.querySelector('.swiper-button-prev1')
const swiperNext = document.querySelector('.swiper-button-next1')

const inActive = '0.3';
const slidesNumber = swiper2.slides.length;

swiperPrev.style.opacity = inActive;

swiper2.on('slideChange', () => {
  const activeSlide = swiper2.activeIndex;
  if(activeSlide === 0){
    swiperPrev.style.opacity = inActive;
  }else{
    swiperPrev.style.opacity = 1;
  }
  if(activeSlide === slidesNumber - SLIDES_PER_VIEW_2){
    swiperNext.style.opacity = inActive;
  }else{
    swiperNext.style.opacity = 1;
  }
})




