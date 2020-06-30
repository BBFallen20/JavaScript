'use strict'
let Calculator = function (first, second, md) {
    const first_digit = parseInt(first);
    const second_digit = parseInt(second);
    const calc_mode = md;
    if (!isNaN(first_digit) && !isNaN(second_digit)){
        if (calc_mode === '+'){
            alert(first_digit + second_digit);
        } else if (calc_mode === '-'){
            alert(first_digit - second_digit);
        } else if (calc_mode === '*') {
            alert(first_digit * second_digit);
        } else if (calc_mode === '/'){
            alert(first_digit / second_digit);
        } else {
            alert('Неизвестное действие.');
        }
    } else {
        alert('Неверно введено первое или второе число.')
    }
}


let first_num = prompt('Введите первое число:');
let second_num = prompt('Введите второе число:');
let mode = prompt('Введите действие:')
Calculator(first_num, second_num, mode);