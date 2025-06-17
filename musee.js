const menu = document.getElementById("bouton");
const listes = document.getElementById("navbarre");

menu.addEventListener("click", function() {
    listes.style.display = "flex";
})

window.addEventListener('scroll', function(){
    const header =this.document.querySelector('header');
    header.classList.toggle("sticky", this.window.scrollY > 0 );
});