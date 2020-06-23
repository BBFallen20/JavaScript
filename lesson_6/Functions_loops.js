let a = prompt('Первое число:', 'Число');
let b = prompt('Второе число:','Число');
let mode = prompt('Выберите действие:', '+, -, *, /');


function calculate(first, second, mode) {
    let answer = 0
    switch (mode) {
        case '+':
            answer = first + second;
            return answer;
        case '-':
            answer = first - second;
            return answer;
        case '*':
            answer = first * second;
            return answer;
        case '/':
            answer = first / second;
            return answer;
        default:
            return 'Неправильно выбрано действие'
    }
}


let answer = calculate(a, b, mode);
alert(answer);
for (answer;answer<10;answer++){
    alert('Число меньше 10ти...Непорядок!');
}
