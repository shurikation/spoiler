// Expand Panel

const $wrapper = $('.wrapper');
const $arrow = $('.arrow');
const $top = $('.top');
const $middle = $('.middle');
const $bottom = $('.bottom');

let isMovedDown = false;
const wrapperHeight = $wrapper[0].getBoundingClientRect().height;

$arrow.on('click', function () {

    if (!isMovedDown) {
        const totalHeight = $middle[0].getBoundingClientRect().height + $top[0].getBoundingClientRect().height + $bottom[0].getBoundingClientRect().height;

        gsap.to($wrapper, {duration: 1, height: totalHeight});
        isMovedDown = true;
    } else {
        gsap.to($wrapper, {duration: 1, height: wrapperHeight});
        isMovedDown = false;
    }
});











