// Expand Panel

//Получаем все элементы блока

const $block = $('.wrapper');
const $top = $('.top');
const $middle = $('.middle');
const $bottom = $('.bottom');

//Самый нижний элемент блока - нижняя граница блока, от которой он будет раскрываться
const $startingBlock = $('.pointer');

//Триггер анимации
const $arrow = $('.arrow');

//Высчитывает на какой height изначально должен быть открыт блок, чтобы он всегда отображал нужные нам элементы
const blockInitialHeight = +$top.css('height').slice(0, -2)
    + (+$startingBlock.css('height').slice(0, -2) + +$startingBlock.css('margin-top').slice(0, -2)) * 3;

//Нам нужно знать на сколько удлинять блок в каждом слчае. Задаем height блоку:
$block.css('height', blockInitialHeight + 'px');

//Флаг, отображающий состояние: блок раскрыт или закрыт
let isBlockOpened = false;


$arrow.on('click', function () {

    if (!isBlockOpened) {
        //Считаем реальную высоту блока: открытая + скрытая его часть
        const totalHeight = $middle[0].getBoundingClientRect().height + $top[0].getBoundingClientRect().height + $bottom[0].getBoundingClientRect().height;
        //Запуск анимации "раскрытия блока" - увеличиваем высоту
        gsap.to($block, {duration: 0.5, height: totalHeight});
        isBlockOpened = true;
    } else {
        //Высчитывает на какой height изначально должен быть открыт блок, чтобы он всегда отображал нужные нам элементы
        const blockInitialHeight = +$top.css('height').slice(0, -2)
            + (+$startingBlock.css('height').slice(0, -2) + +$startingBlock.css('margin-top').slice(0, -2)) * 3;

//Нам нужно знать на сколько удлинять блок в каждом слчае. Задаем height блоку:
       // $block.css('height', blockInitialHeight + 'px');
        //"Сворачиваем" блок -
        gsap.to($block, {duration: 0.5, height: blockInitialHeight});
        isBlockOpened = false;
    }
});











