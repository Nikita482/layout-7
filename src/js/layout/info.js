export function info() {
  document.getElementById('infoRead').addEventListener('click', () => {
    const info__second = document.querySelector('.info__second')
    const info__description = document.querySelector('.info__description')
    info__description.style.height = 'auto'
    info__second.style.display = 'block'
  })
}
