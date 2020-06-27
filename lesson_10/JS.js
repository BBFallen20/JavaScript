'use strict'
/*Конструкторы объектов*/
function User(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function () {
        alert('Hello, ', this.name)
    }
}


let Anton = new User('Anton', '22')
alert(Anton.age)