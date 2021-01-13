const listSel = document.querySelectorAll('li.sel');
const sec = document.querySelector('.sec');
let idx = 0;
const colorList = [
    bgFirst ='#0062be',
    bgSecound ='#e60c2c',
    bgThird = '#1e1e1e'
]

console. log(listSel);

function imgSlider(any) {
    document.querySelector('.pepsi').src = any;
}

listSel.forEach(function (list) {
    list.addEventListener('click', function(event) {
        const sellLi = event.target.parentNode;
        imgSlider(event.target.src);

        if (sellLi.classList.contains('sel00')) {
            sec.style.backgroundColor = colorList[0];
        } else if (sellLi.classList.contains('sel01')){
            sec.style.backgroundColor = colorList[1];
        } else {
            sec.style.backgroundColor = colorList[2];
        }
    })
})
