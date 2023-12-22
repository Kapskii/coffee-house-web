let position = 0;
const slides = document.querySelector('.slides');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const indicators = Array.from(document.querySelectorAll('.slider_indicator'));
let windowWidth = document.documentElement.clientWidth;

console.log(indicators);

let intervalSlide = setInterval(prevSlide, 3000);


function nextSlide() {
    position = position - windowWidth;
    if (position < 0) {
        position = windowWidth * 2;
    }
    slides.style.left = -position + 'px';
    slideId = position / windowWidth
    updateIndicator(slideId)
    resetSlider()
}

function prevSlide() {
    position = position + windowWidth;
    if (position > windowWidth * 2) {
        position = 0;
    }
    slides.style.left = -position + 'px';
    slideId = position / windowWidth
    updateIndicator(slideId)
    resetSlider()
}

function resetSlider() {
    clearInterval(intervalSlide);
    intervalSlide = setInterval(prevSlide, 3000);
}

function updateIndicator(sliderID) {
    const indicator = document.querySelectorAll('.indicator');
    indicators.forEach(el => {
        const indicatorID = +el.getAttribute('id');
        indicatorID === sliderID ? el.classList.add('slider_indicator_active') : el.classList.remove('slider_indicator_active');
    })
}



nextBtn && nextBtn.addEventListener('click', nextSlide);
prevBtn && prevBtn.addEventListener('click', prevSlide);

window.addEventListener('resize', function (e) {
    windowWidth = e.target.outerWidth;
    if (position > 0) {
        position = 0;
        slides.style.left = -position + 'px';
    }
});

