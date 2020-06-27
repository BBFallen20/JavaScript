'use strict'
/*Методы объектов*/
let getage = function () {
    let answer = prompt('Enter your age:')
    return answer
}

let getname = function () {
    let answer = prompt('Enter your name:')
    return answer
}

let age = getage()
let name = getname()


let user = {
    name : name,
    age : age,

    sayHi(){
        alert(`${this.name}, hello!!`)
    }
}

user.sayHi()

