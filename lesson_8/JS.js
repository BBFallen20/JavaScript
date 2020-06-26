'use strict'
let name = prompt('Как вас зовут?')
let age = prompt('Сколько вам лет?')
let person = {
    name: name,
    age: age,
    country: 'Ukraine',
}
person.age == '22' ? alert(`Имя: ${person.name}| Возраст: ${person.age} | Страна: ${person.country}`) : alert('Вам не 22...)')