const images = document.querySelectorAll('.gallery img');
const slider = document.querySelector('.slider');
const mainImg = document.querySelector('.slider img');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');

// Variable holding the image

let imgIndex = 0;


// Opening the slider
// ==================
// Loop through images


images.forEach(img => {
    img.addEventListener('click', e => {
        mainImg.src = e.target.src;
        imgIndex = [...images].indexOf(img);
        slider.style.display = 'flex';
        setTimeout( () => {
            slider.style.opacity = "1";
        }, 10);
    });
});


// click event to window
window.addEventListener('click', e => {
    if(e.target.classList.contains('slider')) {
        slider.style.opacity = "0";
        setTimeout( () => {
            slider.style.display = "none";
        }, 350);
    }
});

// adding click event to previous arrow

arrLeft.addEventListener('click', () => {
    imgIndex--;

    if(imgIndex < 0) {
        imgIndex = images.length - 1;
    }

    mainImg.src = images[imgIndex].src;
});

// adding click event to next arrow

arrRight.addEventListener('click', () => {

    imgIndex++;

    if(imgIndex > images.length - 1) {
        imgIndex = 0;
    }

    mainImg.src = images[imgIndex].src;
});