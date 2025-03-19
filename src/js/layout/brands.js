export function brands() {
  new Swiper('.swiper-container', {
    slidesPerView: 1.2,
    spaceBetween: 10,
    on: {
      init: function () {
        document.querySelectorAll('.swiper-slide').forEach((slide) => {
          slide.style.height = '72px'
        })
      }
    },
    navigation: {
      nextEl: '.brands__btn'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: true,
    breakpoints: {
      768: {
        spaceBetween: 0,
        slidesPerView: 1,
        allowSlideNext: false,
        allowSlidePrev: false
      }
    }
  })
}
