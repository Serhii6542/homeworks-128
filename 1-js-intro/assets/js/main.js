let nameUser = 'Іван Іваненко';
let user_name = 'Тарас федів';
let first_name = 'Володимир Горбатенко';
let secondary_name = 'Ігор Наливайко';

// let 1name = 'Іван Горбатенко';
// let user name = 'Ігор Федів';
/*let ім'я користувача = 'Тарас Іваненко';
let first-name = 'Володимир Наливайко';
let Secondary Name = 'Ростик Церп'як';
*/

function task1(){
    const userName = prompt("Як вас звати?");
    // alert("Hello , " + userName);
    alert(`Привіт, ${userName}`);
}
//==Doesn't work==//
/*function task2(){
    const birthYear = parseInt(prompt("Enter your birth year?"));
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    alert(`You are ${age} years old`);
}*/

function task2(){
    const birthYear = prompt("Введіть рік свого народження");
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(birthYear);
    alert(`Вам ${age} років`);
}

function task3(){
    const sideLength = prompt("Введіть довжину сторони квадрату (см)");
    const perimeterFormula = 4;
    const formulaResult = parseInt(sideLength) * perimeterFormula;
    alert(`Периметр квадрата = ${formulaResult}см`);
}

function task4(){
    const circle_radius = prompt("Введіть радіус кола (см)");
    const formula_Result = Math.PI * Math.pow(parseInt(circle_radius), 2);
    // const formula_Result = Math.PI * parseInt(circle_radius) * parseInt(circle_radius);
    // const formula_Result = Math.PI * parseInt(circle_radius)^2; --- не правельно вираховувало;
    alert(`Площа кола = ${formula_Result}`);
}

function task5(){
    const distance = prompt("Введіть відстань в км");
    const time = prompt("Введіть час в год");
    const speed = parseInt(distance) / parseInt(time);
    alert(`Щоб встигнути вчасно необхідно рухатися зі швидкістю ${speed} км/год`)
}

function task6(){
    const dollar = prompt("Введіть яку суму в доларах бажаєте обміняти в євро");
    const euro = 0.91;
    const currencyExchange = parseInt(dollar) * euro;
    alert(`Ваша сума становить ${currencyExchange} євро, по курсу 1$ = ${euro} євро`)
}