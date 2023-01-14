const menu = document.getElementsByClassName('menu-icon')[0]
const navbar = document.getElementsByClassName('nav-bar')[0]

menu.addEventListener('click', () => {
    navbar.classList.toggle('active')
})