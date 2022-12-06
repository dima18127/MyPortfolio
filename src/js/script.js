let hamburger = document.querySelector('.hamburger')
let menu  = document.querySelector('.menu')
let closer  = document.querySelector('.menu__close ')

hamburger.addEventListener('click', () => {
    menu.classList.toggle("active")
})
closer.addEventListener("click", () => {
    menu.classList.remove("active")
})