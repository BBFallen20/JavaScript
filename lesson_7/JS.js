'use strict'
/*однострочные условия и функции*/
let question = prompt('Вы человек?', 'Возможно...');
if(question === 'Да')alert('Поздравляю!');
let solution = (a, b) => a + b;
let a = prompt('Введите первое слогаемое');
let b = prompt('Введите второе слогаемое')
alert(solution(a, b))
