let skewed = document.querySelector(`.skewed`);
window.addEventListener(`scroll`, function() {
    let value = -10 + window.scrollY/60;
    skewed.style.transform = "skewY("+ value +"deg"
})

let menuToggle = document.querySelector(".menuToggle");
let header = document.querySelector("header");

menuToggle.onclick = function(){
    header.classList.toggle("open");
}