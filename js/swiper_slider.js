// Swiper:

const slider = document.querySelector('.swiper-container__hero');
const slider_2 = document.querySelector('.swiper-container__courses');
const slider_3 = document.querySelector('.swiper-container__about');
const slider_4 = document.querySelector('.swiper-container__teachers');
const slider_5 = document.querySelector('.swiper-container__testimonials');

// Добавление либо удаление класса 'swiper-no-swiping' для '.swiper-container' (в зависимости от ширины экрана):

myFunction();

window.addEventListener('resize', myFunction);

function myFunction() {
  let windowWidth = window.innerWidth;
  const swiper = document.querySelectorAll('.swiper-container');
  if (windowWidth < 812) {
    [...swiper].forEach(function (el) {
      el.classList.remove("swiper-no-swiping");
    });
  } else {
    [...swiper].forEach(function (el) {
      el.classList.add("swiper-no-swiping");
    });
  };
};

// Работа слайдеров:

window.addEventListener('DOMContentLoaded', function () {
  let mySwiper = new Swiper(slider, {
    direction: 'horizontal',
    // loop: true,
    centeredSlides: true,
    parallax: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 10000,
    },
    speed: 1000,
  });
});

window.addEventListener('DOMContentLoaded', function () {
  let mySwiper_2 = new Swiper(slider_2, {
    slidesPerView: 1,
    spaceBetween: 30,
    direction: 'horizontal',
    loop: false,
    centeredSlides: true,
    breakpoints: {
      669: {
        slidesPerView: 2,
        centeredSlides: false
      },
      1025: {
        slidesPerView: 3,
        centeredSlides: false
      },
      1367: {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 20
      }
    },
    navigation: {
      prevEl: '.swiper-button-courses__prev',
      nextEl: '.swiper-button-courses__next',
    },
    autoplay: {
      delay: 5000,
    },
  });
});

window.addEventListener('DOMContentLoaded', function () {
  let mySwiper_3 = new Swiper(slider_3, {
    direction: 'horizontal',
    // loop: true,
    navigation: {
      prevEl: '.swiper-button-about__prev',
      nextEl: '.swiper-button-about__next',
    },
  });
});

window.addEventListener('DOMContentLoaded', function () {
  let mySwiper_4 = new Swiper(slider_4, {
    slidesPerView: 1,
    spaceBetween: 30,
    direction: 'horizontal',
    // loop: true,
    breakpoints: {
      577: {
        slidesPerView: 2
      },
      769: {
        slidesPerView: 3
      },
      1025: {
        slidesPerView: 4
      }
    },
    navigation: {
      prevEl: '.swiper-button-teachers__prev',
      nextEl: '.swiper-button-teachers__next',
    },
    autoplay: {
      delay: 5000,
    },
  });
});

window.addEventListener('DOMContentLoaded', function () {
  let mySwiper_5 = new Swiper(slider_5, {
    direction: 'horizontal',
    // loop: true,
    navigation: {
      prevEl: '.swiper-button-testimonials__prev',
      nextEl: '.swiper-button-testimonials__next',
    },
    effect: 'flip',
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    },
    // autoplay: {
    //   delay: 5000,
    // },
    autoHeight: true,
    speed: 500,
  });
});