const slides = document.querySelectorAll('.surf-slider__img');

for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    slide.addEventListener('mousemove', rotate);
    slide.addEventListener('mouseout', normalize);
}

function rotate(event) {
    const surfItem = this.querySelector('.surf-slider__box');
    const centerHeight = surfItem.offsetHeight / 2;
    const centerWidth = surfItem.offsetWidth / 2;

    surfItem.style.transform = 'rotateX('+(event.offsetY - centerHeight)/10+'deg) rotateY(' + (event.offsetX - centerWidth)/10+'deg)';
}

function normalize(event) {
    const surfItem = this.querySelector('.surf-slider__box');
    surfItem.style.transform = 'rotate(0)';
}
