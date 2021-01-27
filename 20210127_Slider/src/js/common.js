const imgBox = document.querySelector('.imgBx');
const Txtbox = document.querySelector('.txtBox');
const slides = imgBox.getElementsByTagName('img');
const slidesTxt = Txtbox.getElementsByTagName('div');
const btnLi = document.querySelectorAll('li.btn');
let i = 0;
let j = 0;

console.log(btnLi);

function nextSlide() {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}

function prevSlide() {
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}

function nextTxtSlide() {
    slidesTxt[j].classList.remove('act');
    j = (j + 1) % slides.length;
    slidesTxt[j].classList.add('act');
}

function prevTxtSlide() {
    slidesTxt[j].classList.remove('act');
    j = (j - 1 + slides.length) % slides.length;
    slidesTxt[j].classList.add('act');
}

btnLi.forEach(function (list) {
            list.addEventListener('click', () => {
                if (list.classList.contains('next')) {
                    nextSlide();
                    nextTxtSlide();
                }
                else {
                    prevSlide();
                    prevTxtSlide();
                }
            });
    });