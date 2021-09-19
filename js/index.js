const Name = document.getElementById('name');
const Country = document.getElementById('country');
const City = document.getElementById('city');
const Birthday = document.getElementById('birthday');
const Btn = document.getElementById('btnValidate');
const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;


setInterval(nextSlide, 4000);

window.addEventListener('resize', init);
init();

document.querySelector('.slider-next').addEventListener('click', nextSlide)
document.querySelector('.slider-prev').addEventListener('click', prevSlide)

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}
function nextSlide() {
    count++;
    if (count > images.length - 1) {
        count = 0;
    }
    rollSlider();
}
function prevSlide() {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
}
function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
Name.addEventListener('keyup', function () {
    let length = this.value.length;
    if (length > 0) {
        document.querySelector(".cV1").style.display = 'block';
        document.querySelector(".cVc1").style.display = 'block';
    }
});
Country.addEventListener('keyup', function () {
    let length = this.value.length;
    if (length > 0) {
        document.querySelector(".cV2").style.display = 'block';
        document.querySelector(".cVc2").style.display = 'block';
    }
});
City.addEventListener('keyup', function () {
    let length = this.value.length;
    if (length > 0) {
        document.querySelector(".cV3").style.display = 'block';
        document.querySelector(".cVc3").style.display = 'block';
    }
});
Birthday.addEventListener('keyup', function () {
    let length = this.value.length;
    if (length > 0) {
        Btn.removeAttribute("disabled");
    }
});
function complete() {
    var complete = document.getElementById('completed');
    complete.style.display = 'flex';
    Btn.setAttribute("disabled", "disabled");
}