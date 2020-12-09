import {
  A11y,
  Keyboard,
  Navigation,
  Pagination,
  Swiper,
} from 'swiper/dist/js/swiper.esm.js';

class Example {
  constructor() {
    // Prepare some stuff...

    this.init();
  }

  init() {
    Swiper.use([
      A11y,
      Keyboard,
      Navigation,
      Pagination,
    ]);
    
    new Swiper('.swiper-container', {
      keyboard: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}

// Example class, which will be transformed by babel
new Example();