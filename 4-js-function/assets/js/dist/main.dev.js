"use strict";

function task1() {
  document.getElementById('Function').innerHTML = "<span>Це Function Declaration при використанні її треба вказувати ім'я а в круглі дужки параметр функції, а у фігурні тіло функції.</span>";
}

function task1_1() {
  document.getElementById('Function').innerHTML = "<span>Це Function Expression при використанні її не обов'язково вказувати ім'я, якщо ім'я не вказати то функція буде анонімною, функція виразу подібна на функцію оголошення тількии функцію виразу записують одразу в змінну.</span>";
}

function task1_2() {
  document.getElementById('Function').innerHTML = "<span>Стрілкові функції зручні для простих операцій, особливо для тих, що можна записати в один рядок. Вони бувають двох видів:1.Без фігурних дужок де права частина є виразом функції, функія виконує вираз і повертає його результат. Круглі дужки в функції можна опускати якщо в неї є лиш один аргумент. 2. З фігурними дужками  дужки дозволяють включити в функцію більше однієї інструкції, але при цьому потрібно явно вказати return, щоб щось повернути.</span>";
}

function task2() {
  var numb = document.getElementById('num').value;
  var res = '';
  res = quantityDeduction(numb);
  document.getElementById('rez').innerText = "".concat(res);
}

function quantityDeduction(n) {
  return n.length;
} // function task2(){
//     const argCnt = calcArg(1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1);
//     document.getElementById('rez').innerText = `У функцію передано ${argCnt} аргументів`;
// }
// function calcArg(){
//     return arguments.length
// }


function task3() {
  var num1 = document.getElementById('num1').valueAsNumber;
  var num2 = document.getElementById('num2').valueAsNumber;
  var rez = 0;

  if (isNaN(num1)) {
    document.getElementById('result').innerHTML = '<span style="color:red;">Введіть число</span>';
    return;
  }

  if (isNaN(num2)) {
    document.getElementById('result').innerHTML = '<span style="color:red;">Введіть число</span>';
    return;
  }

  rez = comparison(num1, num2);
  document.getElementById('result').innerText = rez;
}

function comparison(num, num_2) {
  var result = 0;

  if (num < num_2) {
    result = -1;
  } else if (num > num_2) {
    result = 1;
  } else if (num === num_2) {
    result = 0;
  }

  return result;
}

function factorial() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var resul = 1;

  for (var i = 1; i <= n; i++) {
    resul *= i;
  }

  return resul;
}

function task4() {
  var fact = document.getElementById('fact').valueAsNumber;
  var rezFact = '';

  if (isNaN(fact)) {
    rezFact = '<span style="color:red;">Введіть число</span>';
  } else {
    rezFact = factorial(fact);
  }

  document.getElementById('result1').innerHTML = rezFact;
}

function task5() {
  var numb1 = document.getElementById('numb1').valueAsNumber;
  var numb2 = document.getElementById('numb2').valueAsNumber;
  var numb3 = document.getElementById('numb3').valueAsNumber;
  var resul_t = '';

  if (isNaN(numb1)) {
    document.getElementById('result3').innerHTML = '<span style="color:red;">Введіть число</span>';
    return;
  }

  if (isNaN(numb2)) {
    document.getElementById('result3').innerHTML = '<span style="color:red;">Введіть число</span>';
    return;
  }

  if (isNaN(numb3)) {
    document.getElementById('result3').innerHTML = '<span style="color:red;">Введіть число</span>';
    return;
  }

  if (numb1 < 0 || numb2 < 0 || numb3 < 0) {
    resul_t = 'Введіть число більше 0';
  } else {
    resul_t = "".concat(numb1 * 100 + numb2 * 10 + numb3);
  }

  document.getElementById('result3').innerText = resul_t;
}

function task6() {
  var width = document.getElementById('width').valueAsNumber;
  var height = document.getElementById('height').valueAsNumber;
  var answer = 0;

  if (width < 0 || height < 0) {
    document.getElementById('square').innerHTML = '<span style="color:red;">Введіть довжину більше 0</span>';
    return;
  }

  answer = decision(width, height);
  document.getElementById('square').innerText = "\u041F\u043B\u043E\u0449\u0430 = ".concat(answer);
}

function decision(a, b) {
  var res = 0;

  if (!isNaN(a) && !isNaN(b)) {
    res = a * b;
  } else if (!isNaN(a) && isNaN(b)) {
    res = a * a;
  } else if (isNaN(a) && !isNaN(b)) {
    res = b * b;
  }

  return res;
}

function task7() {
  var perfctNamb = document.getElementById('perfectNamb').valueAsNumber;
  var resNamb = false;
  var conclusion = '';

  if (isNaN(perfctNamb)) {
    document.getElementById('perfect_number').innerHTML = '<span style="color:red;">Введіть число</span>';
    return;
  }

  if (perfctNamb <= 0) {
    document.getElementById('perfect_number').innerHTML = '<span style="color:red;">Введіть число більше 0</span>';
    return;
  }

  resNamb = isPerfectNumber(perfctNamb);

  if (resNamb) {
    conclusion = 'Число є досконалим';
  } else {
    conclusion = 'Число не є досконалим';
  }

  document.getElementById('perfect_number').innerText = conclusion;
}

function isPerfectNumber(n) {
  var divis = 0;

  for (var i = 1; i < n; i++) {
    if (n % i == 0) {
      divis += i;
    }
  }

  return n === divis;
}

function task8() {
  var numPer1 = document.getElementById('num_1').valueAsNumber;
  var numPer2 = document.getElementById('num_2').valueAsNumber;
  var resPer = '';

  if (isNaN(numPer1) || isNaN(numPer2)) {
    document.getElementById('range_numbers').innerHTML = '<span style="color:red;">Введіть число</span>';
    return;
  } else if (0 > numPer1 || 0 > numPer2) {
    document.getElementById('range_numbers').innerHTML = '<span style="color:red;">Введіть число яке більше або дорівнює 0</span>';
    return;
  } else {
    resPer = perfectRangeNumbers(numPer1, numPer2);
  }

  document.getElementById('range_numbers').innerText = "\u0417 \u0432\u0430\u0448\u043E\u0433\u043E \u043F\u0440\u043E\u043C\u0456\u0436\u043A\u0443 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0438\u043C\u0438 \u0447\u0438\u0441\u043B\u0430\u043C\u0438 \u0454 ".concat(resPer);
}

function perfectRangeNumbers(a, b) {
  var res = '';
  var from = a,
      to = b;

  if (a > b) {
    from = b;
    to = a;
  }

  for (var i = from; i <= to; i++) {
    if (isPerfectNumber(i)) {
      res += i + ' ';
    }
  }

  return res;
}