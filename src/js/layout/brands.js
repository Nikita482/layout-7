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

  let active = true
  const logo = document.getElementById('all-logo')
  logo.innerText = 'Показать все'

  logo.addEventListener('click', () => {
    const slides = document.querySelectorAll('.swiper-slide:nth-child(n + 7)')
    const slides7 = document.querySelectorAll('.swiper-slide:nth-child(7)')
    const slides8 = document.querySelectorAll('.swiper-slide:nth-child(8)')

    if (active) {
      slides.forEach((slide) => {
        slide.style.display = 'flex'
      })

      logo.innerText = 'Скрыть'

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

      logo.innerText = 'Показать все'

      active = !active
    }
  })
}
