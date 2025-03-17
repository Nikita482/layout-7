import '../scss/style.scss'
import { info } from './layout/info'
import logo from '../img/header/logo.png' // Путь на уровень выше

const img = document.getElementById('logo')
img.src = logo // путь к картинке

info()
