const themeToggle = document.getElementById('toggleIcon');
const body = document.body;


themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️'; 
    } else {
        themeToggle.textContent = '🌙';
    }
});


const menuToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});



let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let man = document.getElementById("man");

window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    moon.style.top = value * .9 + "px";
    text.style.top = 80 + value * -0.2 + '%';
    train.style.left = value * 1.5 + "px";

    
    man.style.left = value * .5 + "px";

});
