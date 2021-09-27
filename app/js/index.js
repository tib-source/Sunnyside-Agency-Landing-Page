const hamburger = document.querySelector(".open")
const nav = document.querySelector(".header .links")

console.log(nav)
console.log("hello")
hamburger.addEventListener("click", function(){
    nav.classList.toggle("display")
})

