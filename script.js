// Here we are fabricating script file for My Portfolio


// Literals
const menu = document.querySelector(".menu")
const navLinks = document.querySelector(".nav-links")


// Listeners
menu.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

