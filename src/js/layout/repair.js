export function repair() {
  new Swiper('.repair__swiper', {
    slidesPerView: 1.2,
    spaceBetween: 10,
    navigation: {
      nextEl: '.repair__btn'
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

  let active = true
  const repair = document.getElementById('all-repair')
  repair.innerText = 'Показать все'

  repair.addEventListener('click', () => {
    const slides = document.querySelectorAll('.repair__slide:nth-child(n + 7)')
    const slides7 = document.querySelectorAll('.repair__slide:nth-child(7)')
    const slides8 = document.querySelectorAll('.repair__slide:nth-child(8)')

    if (active) {
      slides.forEach((slide) => {
        slide.style.display = 'flex'
      })

      repair.innerText = 'Скрыть'

      active = !active
    } else {
      slides.forEach((slide) => {
        slide.style.display = 'none'
      })

      if (window.matchMedia('(min-width: 1120px)').matches) {
        slides7.forEach((slide) => {
          slide.style.display = 'flex'
        })
        slides8.forEach((slide) => {
          slide.style.display = 'flex'
        })
      }

      repair.innerText = 'Показать все'

      active = !active
    }
  })
}
