import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    600: {
      slidesPerView: 2.2,
    },
    900: {
      slidesPerView: 3.2,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});