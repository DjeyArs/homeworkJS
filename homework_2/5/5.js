'use strict'
/**
 * Функция складывает заданные параметры
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function addition(a, b) {
    return a + b
}
/**
 * Функция вычетает заданные параметры
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function subtraction(a, b) {
    return a - b
}
/**
 * Функция делит заданные параметры
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function division(a, b) {
    return a / b
}
/**
 * Функция умножает заданные параметры
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b
}

/**
 * Функция совершает арифметическое действие заданное пользователем с числами заданными пользователем
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {action} operation 
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        default:
            throw new Error("Операция " + operation + " не предусмотрена");
    }
}

let arg1 = parseInt(prompt("Введите первое число"));
// parseInt спользовал, что бы prompt возвращал число, а не строку
let arg2 = parseInt(prompt("Введите второе число"));
let operation = prompt("Введите арифметическое действие")
let result = mathOperation(arg1, arg2, operation)
alert(result)