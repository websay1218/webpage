
const nav = document.querySelector('nav');
const subLi = document.querySelectorAll('.sub-menu');
const menuBtn = document.querySelector('.meun-toggle');

function menuToggle(){
    nav.classList.toggle('act');
}

menuBtn.addEventListener('click',() => {
    menuToggle();
});

subLi.forEach(list => list.addEventListener('click',()=> {
    list.classList.toggle('act');
}))