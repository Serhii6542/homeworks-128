"use strict";

function task1() {
  var age = document.getElementById('numb').valueAsNumber;
  var rez = '';

  if (isNaN(age)) {
    document.getElementById('result').innerHTML = '<span style="color: red">Введіть ваш вік</span>';
    return;
  }

  if (age >= 0 && age <= 11) {
    rez = 'Дитина';
  } else if (age >= 12 && age <= 17) {
    rez = 'Підліток';
  } else if (age >= 18 && age <= 59) {
    rez = 'Дорослий';
  } else if (age >= 60 && age <= 120) {
    rez = 'Пенсіонер';
  } else {
    rez = 'Вкажіть дійсний ваш вік';
  }

  document.getElementById('result').innerText = rez;
}

function task2() {
  var num = document.getElementById('numb_2').valueAsNumber;
  var rez = '';

  if (isNaN(num)) {
    document.getElementById('result_2').innerHTML = '<span style="color: red">Введіть число</span>';
    return;
  }

  switch (num) {
    case 0:
      rez = ')';
      break;

    case 1:
      rez = '!';
      break;

    case 2:
      rez = '@';
      break;

    case 3:
      rez = '#';
      break;

    case 4:
      rez = '$';
      break;

    case 5:
      rez = '%';
      break;

    case 6:
      rez = '^';
      break;

    case 7:
      rez = '&';
      break;

    case 8:
      rez = '*';
      break;

    case 9:
      rez = '(';
      break;

    default:
      rez = 'не визначений введіть число від 0 до 9';
      break;
  }

  document.getElementById('result_2').innerText = "\u0412\u0430\u0448 \u0437\u043D\u0430\u043A \"".concat(rez, "\"");
}

function task3() {
  var num1 = document.getElementById('numb1').valueAsNumber;
  var num2 = document.getElementById('numb2').valueAsNumber;
  var suma = 0;
  var from = num1,
      to = num2;

  if (isNaN(num1)) {
    document.getElementById('resul_t').innerHTML = '<span style="color: red">Введіть число в перший рядок</span>';
    return;
  }

  if (isNaN(num2)) {
    document.getElementById('resul_t').innerHTML = '<span style="color: red">Введіть число в другий рядок</span>';
    return;
  }

  if (100 < num1) {
    document.getElementById('resul_t').innerHTML = '<span style="color: red">Введіть число від -100 до 100</span>';
    return;
  }

  if (100 < num2) {
    document.getElementById('resul_t').innerHTML = '<span style="color: red">Введіть число від -100 до 100</span>';
    return;
  }

  if (-100 > num1) {
    document.getElementById('resul_t').innerHTML = '<span style="color: red">Введіть число від -100 до 100</span>';
    return;
  }

  if (-100 > num2) {
    document.getElementById('resul_t').innerHTML = '<span style="color: red">Введіть число від -100 до 100</span>';
    return;
  }

  if (num1 > num2) {
    from = num2;
    to = num1;
  }

  for (var i = from; i <= to; i++) {
    suma += i;
  }

  document.getElementById('resul_t').innerText = "\u0421\u0443\u043C\u0430 \u0432\u0441\u0456\u0445 \u0447\u0438\u0441\u0435\u043B \u043F\u0440\u043E\u043C\u0456\u0436\u043A\u0443 = ".concat(suma);
} // function task4() {
//     const num_1 = document.getElementById('numb_1').valueAsNumber;
//     const num_2 = document.getElementById('numb_2').valueAsNumber;
//     const min = num_1 < num_2 ? num_1 : num_2;
//     let divisor = 0;
//     for(let i = 1; i <= min; i++){
//         if(num_1 % i === 0 && num_2 % i === 0){
//             divisor = i;
//         }
//     }
//     document.getElementById('resu_lt').innerHTML = `Спільний дільник = ${divisor}`;
// }


function task4() {
  var num_1 = parseInt(prompt("Напишіть перше число"));
  var num_2 = parseInt(prompt("Напишіть друге число"));

  if (isNaN(num_1) || isNaN(num_2) || num_1 == 0 || num_2 == 0) {
    alert("Ви ввели некоректні дані");
    return;
  }

  var min = num_1 < num_2 ? num_1 : num_2;
  var divisor = 0;

  for (var i = 1; i <= min; i++) {
    if (num_1 % i == 0 && num_2 % i == 0) {
      divisor = i;
    }
  }

  alert("\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0441\u043F\u0456\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A = ".concat(divisor));
}

function task5() {
  var firstNumb = parseInt(prompt("Напишіть число"));

  if (isNaN(firstNumb) || firstNumb == 0) {
    alert("Ви ввели некоректні дані");
    return;
  }

  if (firstNumb < 0) {
    alert("Ви ввели некоректні дані");
    return;
  }

  var divis = '';

  for (var i = 1; i <= firstNumb; i++) {
    if (firstNumb % i == 0) {
      divis += i + ' ';
    }
  }

  alert("\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0441\u043F\u0456\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A = ".concat(divis));
}

function task6() {
  var numbr = document.getElementById("numbe_r").valueAsNumber;
  var tensTh = parseInt(numbr / 10000);
  var th = parseInt(numbr / 1000) % 10;
  var d = parseInt(numbr / 10) % 10;
  var o = numbr % 10;
  var rez = '';

  if (isNaN(numbr)) {
    document.getElementById('definition').innerHTML = '<span style="color: red">Введіть число</span>';
    return;
  }

  if (99999 < numbr) {
    document.getElementById('definition').innerHTML = '<span style="color: red">Введіть п’ятирозрядне число число</span>';
    return;
  }

  if (-99999 > numbr) {
    document.getElementById('definition').innerHTML = '<span style="color: red">Введіть п’ятирозрядне число число</span>';
    return;
  }

  if (tensTh === o && th === d) {
    rez = 'Число є паліндром';
  } else {
    rez = 'Число не є паліндромом';
  }

  document.getElementById('definition').innerText = rez;
}

function task7() {
  var suMa = document.getElementById("suma").valueAsNumber;
  var minDiscount = 0.03;
  var averageDiscount = 0.05;
  var maxDiscount = 0.07;
  var sumaDiscount = "";

  if (isNaN(suMa)) {
    document.getElementById('discountedAmount').innerHTML = '<span style="color: red">Введіть суму покупки числом</span>';
    return;
  }

  if (0 > suMa) {
    document.getElementById('discountedAmount').innerHTML = '<span style="color: red">Сума покупки не може бути відємною</span>';
    return;
  }

  if (0 <= suMa && suMa <= 199) {
    sumaDiscount = "\u0412\u0430\u0448\u0430 \u0441\u0443\u043C\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ".concat(suMa, " \u0433\u0440\u0438\u0432\u0435\u043D\u044C");
  } else if (200 <= suMa && suMa <= 299) {
    sumaDiscount = "\u0412\u0430\u0449\u0430 \u0441\u0443\u043C\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ".concat((suMa - suMa * minDiscount).toFixed(2), " \u0433\u0440\u0438\u0432\u0435\u043D\u044C");
  } else if (300 <= suMa && suMa <= 499) {
    sumaDiscount = "\u0412\u0430\u0449\u0430 \u0441\u0443\u043C\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ".concat((suMa - suMa * averageDiscount).toFixed(2), " \u0433\u0440\u0438\u0432\u0435\u043D\u044C");
  } else if (500 <= suMa) {
    sumaDiscount = "\u0412\u0430\u0449\u0430 \u0441\u0443\u043C\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ".concat((suMa - suMa * maxDiscount).toFixed(2), " \u0433\u0440\u0438\u0432\u0435\u043D\u044C");
  }

  document.getElementById('discountedAmount').innerText = sumaDiscount;
}

function task8() {
  var positiv = 0;
  var negativ = 0;
  var zero = 0;
  var par = 0;
  var notPar = 0;
  var i = 0;

  while (i < 10) {
    i++;
    var numBer = parseInt(prompt("\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C ".concat(i, " \u0447\u0438\u0441\u043B\u043E")));

    if (isNaN(numBer)) {
      alert('Ви ввели не число');
      i--;
    }

    if (numBer === 0) {
      zero++;
    } else if (numBer > 0) {
      positiv++;
    } else if (numBer < 0) {
      negativ++;
    }

    if (numBer !== 0) {
      if (numBer % 2 === 0) {
        par++;
      } else {
        notPar++;
      }
    }

    alert("\u0414\u043E\u0434\u0430\u0442\u043D\u0456\u0445 = ".concat(positiv, ", \u0432\u0456\u0434'\u0454\u043C\u043D\u0438\u0445 = ").concat(negativ, ", \u043F\u0430\u0440\u043D\u0438\u0445 = ").concat(par, ", \u043D\u0435 \u043F\u0430\u0440\u043D\u0438\u0445 = ").concat(notPar, ", \u043D\u0443\u043B\u0456\u0432 = ").concat(zero, "."));
  }
}

function task9() {
  var dayNumber = 0;
  var dayName = "";
  var answer = true;

  do {
    switch (dayNumber) {
      case 0:
        dayName = "Понеділок";
        break;

      case 1:
        dayName = "Вівторок";
        break;

      case 2:
        dayName = "Середа";
        break;

      case 3:
        dayName = "Четвер";
        break;

      case 4:
        dayName = "П'ятниця";
        break;

      case 5:
        dayName = "Субота";
        break;

      case 6:
        dayName = "Неділя";
        break;
    }

    answer = confirm("\xAB".concat(dayName, ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?\xBB"));

    if (answer) {
      dayNumber++;
    }

    if (dayNumber === 7) {
      dayNumber = 0;
    }
  } while (answer);
} // function task10() {
//     let min = 0;
//     let max = 100;
//     let midle = 0;
//     let answe_r = 0;
//     do {
//         midle = parseInt((min + max) / 2);
//         if(confirm(`Ваше число більше ${midle}?`)){
//             min = midle;
//             answe_r = midle + 1;
//         } else {
//             max = midle;
//             answe_r = midle - 1;
//         }
//     } while(max - min > 1);
//     alert(`Ваше число ${answe_r}`)
// }


function task10() {
  var min = 0;
  var max = 100;
  var midle = 0;
  var answe_r = 0;
  var sign = '';

  do {
    midle = parseInt((min + max) / 2);

    switch (sign) {
      case '>':
        min = midle;
        answe_r = midle + 1;
        break;

      case '<':
        max = midle;
        answe_r = midle;
        break;

      case '=':
        answe_r = midle;
        alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(answe_r));
        break;
    }

    sign = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0431\u0456\u043B\u044C\u0448\u0435 ".concat(midle, " \u0447\u0438 \u043C\u0435\u043D\u0448\u0435 ?"));
  } while (max - min > 1);

  alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(answe_r));
}

function task11() {
  var multy = '';

  for (var i = 2; i <= 10; i++) {
    multy += '<ul>';

    for (var y = 1; y <= 10; y++) {
      multy += "<li>".concat(i, " * ").concat(y, " = ").concat(i * y, "</li>");
    }

    multy += '</ul>';
  }

  document.getElementById('multy_wrap').innerHTML = multy;
}

function leapYear(y) {
  return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
}

var addZero = function addZero(n) {
  return n < 10 ? '0' + n : '' + n;
};

function task12() {
  var presentDate = document.getElementById('date').valueAsNumber;
  var presentMonth = document.getElementById('mounth').valueAsNumber;
  var presentYear = document.getElementById('year').valueAsNumber;
  var rez = '';

  if (isNaN(presentDate)) {
    rez = '<span style="color:red">Введіть дату</span>';
  } else if (isNaN(presentMonth)) {
    rez = '<span style="color:red">Введіть місяць</span>';
  } else if (isNaN(presentYear)) {
    rez = '<span style="color:red">Введіть рік</span>';
  } else {
    rez = "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u0430\u0442\u0430 ".concat(nextDate(presentDate, presentMonth, presentYear));
  }

  document.getElementById('nextDay').innerHTML = rez;
}

function nextDate() {
  var dayIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var monthIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var yearIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1970;
  var dayOut = dayIn + 1,
      monthOut = monthIn,
      yearOut = yearIn;

  switch (monthIn) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (dayIn === 31) {
        dayOut = 1;
        monthOut = monthIn + 1;
      }

      break;

    case 4:
    case 6:
    case 9:
    case 11:
      if (dayIn === 30) {
        dayOut = 1;
        monthOut = monthIn + 1;
      }

      break;

    case 2:
      if (leapYear(yearIn)) {
        if (dayIn === 29) {
          dayOut = 1;
          monthOut = monthIn + 1;
        } else {
          if (dayIn === 28) {
            dayOut = 1;
            monthOut = monthIn + 1;
          }
        }
      }

  }

  if (monthOut === 13) {
    monthOut = 1;
    yearOut = yearIn + 1;
  }

  return "".concat(addZero(dayOut), ".").concat(addZero(monthOut), ".").concat(addZero(yearOut));
}