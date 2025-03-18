const menuFor = document.getElementById('menuFor')

export function menu() {
  document.getElementById('menu').addEventListener('click', () => {
    const menuBox = document.getElementById('menuBox')
    menuBox.style.left = 0
    menuFor.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    menuFor.style.pointerEvents = 'auto'
  })
}

export function closeMenu() {
  document.getElementById('closeMenu').addEventListener('click', () => {
    const menuBox = document.getElementById('menuBox')
    menuBox.style.left = '-360px'
    menuFor.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    menuFor.style.pointerEvents = 'none'
  })
}

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
