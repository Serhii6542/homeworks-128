"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var car = {
  Brand: 'Bayerische Motoren Werke AG - BMW',
  Model: 'M4',
  Year: 2015,
  "Average speed": 90,
  "Volume fuel tank": 60,
  "Average fuel consumption": 14,
  Drivers: ['Mario', 'Rocsolana']
};

function task1_1() {
  var rez = '<ul>';

  for (var key in car) {
    if (_typeof(car[key])) {
      rez += "<li><b>".concat(key, ":</b> ").concat(car[key], "</li>");
    }
  }

  rez += '</ul>';
  document.getElementById('info-car').innerHTML = rez;
}

function task1() {
  var distance = document.getElementById('num').valueAsNumber;
  var Oil = 0;
  var time = 0;

  if (isNaN(distance)) {
    document.getElementById('rez').innerHTML = '<span style="color:red;">Введіть дистанцію</span>';
    return;
  } else if (distance < 0) {
    document.getElementById('rez').innerHTML = '<span style="color:red;">Дистанція не може бути меншою за 0</span>';
    return;
  }

  Oil = amountOfFuel(distance, car["Average fuel consumption"]);
  time = fuelTime(distance, car["Average speed"]);
  document.getElementById('rez').innerHTML = "<span>\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0430\u043B\u0438\u0432\u0430:".concat(Oil, " \u041B.</span>");
  document.getElementById('time').innerHTML = "<span>\u0413\u043E\u0434\u0438\u043D:".concat(time, "</span>");
}

function fuelTime(a, b) {
  var time = 0;
  var fuellTIme = 0;
  var additionalTime = 0;

  if (a === 0) {
    fuellTIme = 0;
  } else {
    time = parseInt(a / b);
    additionalTime = parseInt(time / 4);
    fuellTIme = time + additionalTime;
    return fuellTIme;
  }
}

function amountOfFuel(a, b) {
  var numOil = 0;

  if (a === 0) {
    numOil = 0;
    return numOil;
  } else {
    numOil = parseInt(a / 100 * b);
    return numOil;
  }
}

function addDrivers() {
  var name = document.getElementById('name').value;

  if (name === '') {
    document.getElementById('rezName').innerHTML = "<span style=\"color:red;\">\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0456\u043C'\u044F \u0432\u043E\u0434\u0456\u044F</span>";
    return;
  }

  if (name !== '' && isNaN(name)) {
    car.Drivers.push(name);
    task1_1();
    document.getElementById('rezName').innerHTML = "<span style=\"color:green;\">\u0406\u043C'\u044F \u0432\u043E\u0434\u0456\u044F \u0434\u043E\u0434\u0430\u043D\u043E</span>";
  }
}

function checkDrivers() {
  var check = document.getElementById('check').value;

  if (check === '') {
    document.getElementById('rezCheck').innerHTML = "<span style=\"color:red;\">\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0456\u043C'\u044F</span>";
    return;
  }

  if (car.Drivers.includes(check)) {
    document.getElementById('rezCheck').innerHTML = "<span style=\"color:green;\">\u0412\u043E\u0434\u0456\u0439 ".concat(check, " \u0432\u0436\u0435 \u0454 \u0432 \u0441\u043F\u0438\u0441\u043A\u0443</span>");
  } else {
    document.getElementById('rezCheck').innerHTML = "<span style=\"color:red;\">\u0412\u043E\u0434\u0456\u0439 ".concat(check, " \u043D\u0435\u043C\u0430\u0454 \u0432 \u0441\u043F\u0438\u0441\u043A\u0443</span>");
  }
}

var time = {
  Hours: 0,
  Minutes: 0,
  Seconds: 0
};

function task2() {
  time.Hours = document.getElementById('hour').valueAsNumber;
  time.Minutes = document.getElementById('minute').valueAsNumber;
  time.Seconds = document.getElementById('second').valueAsNumber;
  var timeHour = document.getElementById('timehoues').valueAsNumber;
  var timeMin = document.getElementById('timeminutes').valueAsNumber;
  var timeSec = document.getElementById('timesecond').valueAsNumber;
  var second = 0;
  var timeTime = 0;

  if (isNaN(time.Hours) || isNaN(time.Minutes) || isNaN(time.Seconds)) {
    document.getElementById('reztime').innerHTML = '<span style="color:red;">Введіть час</span>';
    return;
  }

  if (time.Hours < 0 || time.Minutes < 0 || time.Seconds < 0) {
    document.getElementById('reztime').innerHTML = '<span style="color:red;">Введіть правельно ваш час</span>';
    return;
  }

  if (time.Hours > 23 || time.Minutes > 59 || time.Seconds > 59) {
    document.getElementById('reztime').innerHTML = '<span style="color:red;">Введіть правельно ваш час</span>';
    return;
  }

  if (timeHour < 0 || timeMin < 0 || timeSec < 0) {
    document.getElementById('reztime').innerHTML = '<span style="color:red;">Введіть час більше 0</span>';
    return;
  }

  if (isNaN(timeHour) && isNaN(timeMin) && isNaN(timeSec)) {
    document.getElementById('reztime').innerText = "\u0412\u0430\u0448 \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u0447\u0430\u0441 ".concat(addZero(time.Hours), ":").concat(addZero(time.Minutes), ":").concat(addZero(time.Seconds));
    return;
  } else if (!isNaN(timeHour) && isNaN(timeMin) && isNaN(timeSec)) {
    timeMin = 0;
    timeSec = 0;
  } else if (isNaN(timeHour) && !isNaN(timeMin) && isNaN(timeSec)) {
    timeHour = 0;
    timeSec = 0;
  } else if (isNaN(timeHour) && isNaN(timeMin) && !isNaN(timeSec)) {
    timeHour = 0;
    timeMin = 0;
  } else if (!isNaN(timeHour) && !isNaN(timeMin) && isNaN(timeSec)) {
    timeSec = 0;
  } else if (!isNaN(timeHour) && isNaN(timeMin) && !isNaN(timeSec)) {
    timeMin = 0;
  } else if (isNaN(timeHour) && !isNaN(timeMin) && !isNaN(timeSec)) {
    timeHour = 0;
  }

  second = time2sec(time.Hours, time.Minutes, time.Seconds) + secTime(timeSec) + minTime(timeMin) + hourTime(timeHour);
  timeTime = sec2time(second);

  if (timeTime.h > 23) {
    timeTime.h = timeTime.h % 24;
  } else if (timeTime.m > 59) {
    timeTime.m = 0 + timeTime.m % 60;
    timeTime.h += 1;
  } else if (timeTime.s > 59) {
    timeTime.s = 0 + timeTime.s % 60;
    timeTime.m += 1;
  }

  document.getElementById('reztime').innerText = "\u0412\u0430\u0448 \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u0447\u0430\u0441 \u0440\u0430\u0437\u043E\u043C \u0437 \u0442\u0438\u043C \u0449\u043E \u0432\u0438 \u0434\u043E\u0434\u0430\u043B\u0438 ".concat(addZero(timeTime.h), ":").concat(addZero(timeTime.m), ":").concat(addZero(timeTime.s));
}

function time2sec(a, b, c) {
  return a * 3600 + b * 60 + c;
}

function secTime(s) {
  var sec = s;
  return sec;
}

function minTime(m) {
  var sec = m * 60;
  return sec;
}

function hourTime(h) {
  var sec = h * 3600;
  return sec;
}

function sec2time(sec) {
  var a = parseInt(sec / 3600);
  var b = parseInt(sec % 3600 / 60);
  var c = sec % 60;
  return {
    h: a,
    m: b,
    s: c
  };
}

var addZero = function addZero(n) {
  return n < 10 ? '0' + n : '' + n;
};

var fraction1 = {
  numerator1: 0,
  denominator1: 0
};
var fraction2 = {
  numerator2: 0,
  denominator2: 0
};

function task3() {
  fraction1.numerator1 = document.getElementById('numerator').valueAsNumber;
  fraction1.denominator1 = document.getElementById('denominator').valueAsNumber;
  fraction2.numerator2 = document.getElementById('numerator_2').valueAsNumber;
  fraction2.denominator2 = document.getElementById('denominator_2').valueAsNumber;
  var action = document.getElementById('action').value;
  var rezFraction = 0;
  var divis = 0;
  var rezNumerDivis = 0;
  var rezDenomDivis = 0;

  if (isNaN(fraction1.numerator1) || isNaN(fraction1.denominator1) || isNaN(fraction2.numerator2) || isNaN(fraction2.denominator2)) {
    document.getElementById('rez_fraction').innerHTML = '<span style="color: red;">Ви ввели не коректні данні</span>';
    return;
  } else if (fraction1.denominator1 <= 0 || fraction2.denominator2 <= 0) {
    document.getElementById('rez_fraction').innerHTML = '<span style="color: red;">Введіть знаменник більше нуля</span>';
    return;
  } else if (fraction1.numerator1 === 0 || fraction2.numerator2 === 0) {
    document.getElementById('rez_fraction').innerHTML = '<span style="color: red;">Введіть чисельник більший або менший нуля</span>';
    return;
  }

  switch (action) {
    case '+':
      rezFraction = add(fraction1.numerator1, fraction1.denominator1, fraction2.numerator2, fraction2.denominator2);
      break;

    case '-':
      rezFraction = subtract(fraction1.numerator1, fraction1.denominator1, fraction2.numerator2, fraction2.denominator2);
      break;

    case '*':
      rezFraction = multiply(fraction1.numerator1, fraction1.denominator1, fraction2.numerator2, fraction2.denominator2);
      break;

    case '/':
      rezFraction = divide(fraction1.numerator1, fraction1.denominator1, fraction2.numerator2, fraction2.denominator2);
      break;

    default:
      document.getElementById('rez_fraction').innerHTML = '<span style="color: red;">Введіть дію/span>';
      return;
  }

  divis = commonDivisor(rezFraction.numer, rezFraction.denom);

  if (divis === 0) {
    divis = 1;
  }

  rezNumerDivis = rezFraction.numer / divis;
  rezDenomDivis = rezFraction.denom / divis;

  if (rezNumerDivis === 0) {
    document.getElementById('rez_fraction').innerText = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 = 0";
    return;
  }

  document.getElementById('rez_fraction').innerText = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 = ".concat(rezNumerDivis, "/").concat(rezDenomDivis);
}

function add(a, b, c, d) {
  var rezNumer = 0;
  var rezDenom = 0;
  rezNumer = a * d + b * c;
  rezDenom = b * d;
  return {
    numer: rezNumer,
    denom: rezDenom
  };
}

function subtract(a, b, c, d) {
  var rezNumer = 0;
  var rezDenom = 0;
  rezNumer = a * d - b * c;
  rezDenom = b * d;
  return {
    numer: rezNumer,
    denom: rezDenom
  };
}

function multiply(a, b, c, d) {
  var rezNumer = 0;
  var rezDenom = 0;
  rezNumer = a * c;
  rezDenom = b * d;
  return {
    numer: rezNumer,
    denom: rezDenom
  };
}

function divide(a, b, c, d) {
  var rezNumer = 0;
  var rezDenom = 0;
  rezNumer = a * d;
  rezDenom = b * c;
  return {
    numer: rezNumer,
    denom: rezDenom
  };
}

function commonDivisor(a, b) {
  var min = a < b ? a : b;
  var divis = 0;

  for (var i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      divis = i;
    }
  }

  return divis;
}