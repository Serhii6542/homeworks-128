"use strict";

var nameUser = 'Іван Іваненко';
var user_name = 'Тарас федів';
var first_name = 'Володимир Горбатенко';
var secondary_name = 'Ігор Наливайко'; // let 1name = 'Іван Горбатенко';
// let user name = 'Ігор Федів';

/*let ім'я користувача = 'Тарас Іваненко';
let first-name = 'Володимир Наливайко';
let Secondary Name = 'Ростик Церп'як';
*/

function task1() {
  var userName = prompt("Як вас звати?"); // alert("Hello , " + userName);

  alert("\u041F\u0440\u0438\u0432\u0456\u0442, ".concat(userName));
} //==Doesn't work==//

/*function task2(){
    const birthYear = parseInt(prompt("Enter your birth year?"));
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    alert(`You are ${age} years old`);
}*/


function task2() {
  var birthYear = prompt("Введіть рік свого народження");
  var currentYear = new Date().getFullYear();
  var age = currentYear - parseInt(birthYear);
  alert("\u0412\u0430\u043C ".concat(age, " \u0440\u043E\u043A\u0456\u0432"));
}

function task3() {
  var sideLength = prompt("Введіть довжину сторони квадрату (см)");
  var perimeterFormula = 4;
  var formulaResult = parseInt(sideLength) * perimeterFormula;
  alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 = ".concat(formulaResult, "\u0441\u043C"));
}

function task4() {
  var circle_radius = prompt("Введіть радіус кола (см)");
  var formula_Result = Math.PI * Math.pow(parseInt(circle_radius), 2); // const formula_Result = Math.PI * parseInt(circle_radius) * parseInt(circle_radius);
  // const formula_Result = Math.PI * parseInt(circle_radius)^2; --- не правельно вираховувало;

  alert("\u041F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430 = ".concat(formula_Result));
}

function task5() {
  var distance = prompt("Введіть відстань в км");
  var time = prompt("Введіть час в год");
  var speed = parseInt(distance) / parseInt(time);
  alert("\u0429\u043E\u0431 \u0432\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u0438 \u0432\u0447\u0430\u0441\u043D\u043E \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044F \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ".concat(speed, " \u043A\u043C/\u0433\u043E\u0434"));
}

function task6() {
  var dollar = prompt("Введіть яку суму в доларах бажаєте обміняти в євро");
  var euro = 0.91;
  var currencyExchange = parseInt(dollar) * euro;
  alert("\u0412\u0430\u0448\u0430 \u0441\u0443\u043C\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ".concat(currencyExchange, " \u0454\u0432\u0440\u043E, \u043F\u043E \u043A\u0443\u0440\u0441\u0443 1$ = ").concat(euro, " \u0454\u0432\u0440\u043E"));
}