const menuFog = document.getElementById('menuFog')
const menuBox = document.getElementById('menuBox')
const body = document.body

export function menu() {
  document.getElementById('menu').addEventListener('click', () => {
    const menuBox = document.getElementById('menuBox')
    menuBox.style.left = 0
    menuFog.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    menuFog.style.pointerEvents = 'auto'
    body.style.overflow = 'hidden'
  })
}

export function closeMenu() {
  document.getElementById('closeMenu').addEventListener('click', () => {
    menuBox.style.left = '-360px'
    menuFog.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    menuFog.style.pointerEvents = 'none'
    body.style.overflow = 'auto'
  })
}

menuFog.addEventListener('click', (event) => {
  if (event.target === menuFog) {
    menuBox.style.left = '-360px'
    menuFog.style.pointerEvents = 'none'
    menuFog.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    body.style.overflow = 'auto'
  }
})

export function lang() {
  const langRU = document.getElementById('langRU')
  const langEN = document.getElementById('langEN')
  const langCH = document.getElementById('langCH')

  langRU.style.color = 'rgba(126, 126, 130, 1)'

  langRU.addEventListener('click', () => {
    resetColors()
    langRU.style.color = 'rgba(126, 126, 130, 1)'
  })

  langEN.addEventListener('click', () => {
    resetColors()
    langEN.style.color = 'rgba(126, 126, 130, 1)'
  })

  langCH.addEventListener('click', () => {
    resetColors()
    langCH.style.color = 'rgba(126, 126, 130, 1)'
  })

  function resetColors() {
    langRU.style.color = '' // сбрасываем цвет
    langEN.style.color = ''
    langCH.style.color = ''
  }
}
