// Expand Panel

const $wrapper = document.querySelector('.wrapper');
const $arrow = document.querySelector('.arrow');
const $top = document.querySelector('.top');
const $middle = document.querySelector('.middle');
const $bottom = document.querySelector('.bottom');

let isMovedDown = false;

$arrow.addEventListener('click', ()=> {
    const totalHeight = $middle.getBoundingClientRect().height
        + $top.getBoundingClientRect().height
        + $bottom.getBoundingClientRect().height;
   console.log(totalHeight);
   $wrapper.style = "height:" + totalHeight.toString() + "px;"
    isMovedDown = true;
});

console.log($middle.getBoundingClientRect());
console.log($wrapper.getBoundingClientRect());








