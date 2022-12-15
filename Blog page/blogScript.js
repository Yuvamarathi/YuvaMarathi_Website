//Select the buttons 
const prev = document.querySelector('.blog-container');
const next = document.querySelector('.next');

console.log(prev)

let count = 0;
let tracker = 0;

function moveCardsLeft() {
    count = count - 402;
    tracker++;
    if (tracker === 0) {
        prev.setAttribute('disabled', '');
    } else {
        prev.removeAttribute('disabled');
    }
    if (tracker === 8) {
        next.setAttribute('disabled', '');
    } else {
        next.removeAttribute('disabled');
    }
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;
    });
}
function moveCardsRight() {
    count = count + 402;
    tracker --;
    if (tracker === 0) {
        prev.setAttribute('disabled', '');
    } else {
        prev.removeAttribute('disabled');
    }
    if (tracker === 8) {
        next.removeAttribute('disabled', '');
    } else {
        next.removeAttribute('disabled');
    }
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;
    });
}
prev.addEventListener('click', () => {
    moveCardsRight();
});
next.addEventListener('click', () => {
    moveCardsLeft();
});
const mediaQuery = window.matchMedia('(max-width: 1000px)')
if (mediaQuery.matches){
    const prev = document.querySelector('.blog-prev');
const next = document.querySelector('.blog-next');
let count = 0;
let tracker = 0;
function moveCardsLeft() {
    count = count - 229;
    tracker++;
    if (tracker ===0) {
        prev.setAttribute('disabled', '');
    } else {
        prev.removeAttribute('disabled');
    }
    if (tracker === 15) {
        next.setAttribute('disabled', '');
    } else {
        next.removeAttribute('disabled');
    }
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;
    });
}
function moveCardsRight() {
    count = count + 229;
    tracker --;
    if (tracker === 0) {
        prev.setAttribute('disabled', '');
    } else {
        prev.removeAttribute('disabled');
    }
    if (tracker === 15) {
        next.removeAttribute('disabled', '');
    } else {
        next.removeAttribute('disabled');
    }
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;
    });
}
prev.addEventListener('click', () => {
    moveCardsRight();
});
next.addEventListener('click', () => {
    moveCardsLeft();
});
}