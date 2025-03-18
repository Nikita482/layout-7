export function menu() {
  document.getElementById('menu').addEventListener('click', () => {
    const menuBox = document.getElementById('menuBox')
    menuBox.style.left = 0
  })
}
