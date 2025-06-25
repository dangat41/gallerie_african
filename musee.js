const menuhamburger = document.querySelector(".menu-hamburger")
const navbarre = document.querySelector(".nav-liste")

menuhamburger.addEventListener('click',()=>{
    navbarre.classList.toggle('mobile-menu')
})



window.addEventListener('scroll', function(){
    const header =this.document.querySelector('header');
    header.classList.toggle("sticky", this.window.scrollY > 0 );
});