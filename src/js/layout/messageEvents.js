const menuFog = document.getElementById('menuFog')
const menuBox = document.getElementById('menuBox')
const messageFog = document.getElementById('messageFog')
const messageBox = document.getElementById('messageBox')

export function message() {
  document.getElementById('message').addEventListener('click', () => {
    menuBox.style.left = '-360px'
    menuFog.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    menuFog.style.pointerEvents = 'none'

    setTimeout(() => {
      messageFog.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
      messageFog.style.pointerEvents = 'auto'
      messageBox.style.right = 0
    }, 300)
  })

  document.getElementById('closeMessage').addEventListener('click', () => {
    messageBox.style.right = '-320px'
    messageFog.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    messageFog.style.pointerEvents = 'none'
  })

  messageFog.addEventListener('click', (event) => {
    if (event.target === messageFog) {
      messageBox.style.right = '-320px'
      messageFog.style.backgroundColor = 'rgba(255, 255, 255, 0)'
      messageFog.style.pointerEvents = 'none'
    }
  })
}
