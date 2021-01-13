let bg = document.querySelector('.bg');
let moon = document.querySelector('.moon');
let mountain = document.querySelector('.mountain');
let road = document.querySelector('.road');
let txt = document.querySelector('.txt');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    txt.style.top = value * 1 + 'px';
});