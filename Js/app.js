const hamburgerMain = document.querySelector('.hamburgerMain')
const navLinks = document.querySelector('.navLinks')
const navLink = document.querySelector('.navLink')


hamburgerMain.addEventListener('click',()=>{
    hamburgerMain.classList.toggle('active')
    navLinks.classList.toggle('active')
})
navLink.forEach(link => {
    link.addEventListener('click',()=>{
        hamburgerMain.classList.remove('active')
        navLinks.classList.remove('active')
    })
});