function toggleNav() {
    document.querySelector('.headerBurger').classList.toggle('active')
    document.querySelector('.navigation').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
}

document.querySelector('.headerBurger').addEventListener('click', toggleNav)
document.querySelectorAll('.nav-item').forEach(elem => {
    elem.addEventListener('click', toggleNav)
})