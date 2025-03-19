export function price() {
  new Swiper('.price--swiper', {
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: true,
    breakpoints: {
      768: {
        enabled: false
      }
    }
  })
}
