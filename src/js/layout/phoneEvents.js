const menuFog = document.getElementById('menuFog')
const menuBox = document.getElementById('menuBox')

const phoneBox = document.getElementById('phoneBox')
const phoneFog = document.getElementById('phoneFog')

const btnDesktop = document.getElementById('closePhoneDesktop')

const body = document.body

export function phoneEvents() {
  document.getElementById('phone').addEventListener('click', () => {
    menuBox.style.left = '-360px'
    menuFog.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    menuFog.style.pointerEvents = 'none'
    body.style.overflow = 'hidden'

    setTimeout(() => {
      phoneBox.style.right = 0
      phoneFog.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
      phoneFog.style.pointerEvents = 'auto'
      btnDesktop.style.opacity = 1
    }, 300)
  })
  document.getElementById('closePhone').addEventListener('click', () => {
    phoneBox.style.right = '-450px'
    phoneFog.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    phoneFog.style.pointerEvents = 'none'
    body.style.overflow = 'auto'
  })

  phoneFog.addEventListener('click', (event) => {
    if (event.target === phoneFog) {
      phoneBox.style.right = '-450px'
      phoneFog.style.backgroundColor = 'rgba(255, 255, 255, 0)'
      phoneFog.style.pointerEvents = 'none'
      btnDesktop.style.opacity = 0
      body.style.overflow = 'auto'
    }
  })
}

document.getElementById('openPhone').addEventListener('click', () => {
  phoneFog.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
  phoneFog.style.pointerEvents = 'auto'
  phoneBox.style.right = 0
  body.style.overflow = 'hidden'
})

btnDesktop.addEventListener('click', () => {
  phoneBox.style.right = '-450px'
  phoneFog.style.backgroundColor = 'rgba(255, 255, 255, 0)'
  phoneFog.style.pointerEvents = 'none'
  btnDesktop.style.pointerEvents = 'none'
  btnDesktop.style.opacity = 0
})
