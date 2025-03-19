const menuFog = document.getElementById('menuFog')
const menuBox = document.getElementById('menuBox')
const messageFog = document.getElementById('messageFog')
const messageBox = document.getElementById('messageBox')
const btnDesktop = document.getElementById('closeMessageDesktop')
const body = document.body

export function message() {
  document.getElementById('message').addEventListener('click', () => {
    menuBox.style.left = '-450px'
    menuFog.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    menuFog.style.pointerEvents = 'none'
    setTimeout(() => {
      btnDesktop.style.pointerEvents = 'auto'
      btnDesktop.style.opacity = 1
    }, 300)

    setTimeout(() => {
      messageFog.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
      messageFog.style.pointerEvents = 'auto'
      messageBox.style.right = 0
    }, 300)
    body.style.overflow = 'hidden'
  })

  document.getElementById('closeMessage').addEventListener('click', () => {
    messageBox.style.right = '-450px'
    messageFog.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    messageFog.style.pointerEvents = 'none'
    body.style.overflow = 'auto'
  })

  document
    .getElementById('closeMessageDesktop')
    .addEventListener('click', () => {
      messageBox.style.right = '-450px'
      messageFog.style.backgroundColor = 'rgba(255, 255, 255, 0)'
      messageFog.style.pointerEvents = 'none'
      btnDesktop.style.pointerEvents = 'none'
      btnDesktop.style.opacity = 0
      body.style.overflow = 'auto'
    })

  document.getElementById('openMessage').addEventListener('click', () => {
    messageFog.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    messageFog.style.pointerEvents = 'auto'
    messageBox.style.right = 0
    body.style.overflow = 'hidden'
  })

  messageFog.addEventListener('click', (event) => {
    if (event.target === messageFog) {
      messageBox.style.right = '-450px'
      messageFog.style.backgroundColor = 'rgba(255, 255, 255, 0)'
      messageFog.style.pointerEvents = 'none'
      btnDesktop.style.pointerEvents = 'none'
      btnDesktop.style.opacity = 0
      body.style.overflow = 'auto'
    }
  })
}
