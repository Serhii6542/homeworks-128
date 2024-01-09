"use strict";

function task1() {
  var n1 = 0.1;
  var n2 = 0.2;
  alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 = ".concat((n1 + n2).toFixed(1)));
}

function task2() {
  var string = "1";
  var numder = 2;
  alert("\u041F\u0440\u0430\u0432\u0435\u043B\u044C\u043D\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 = ".concat(parseInt(string) + numder));
}

function task3() {
  var flashDrive = prompt("Введіть обсяг флешки в Гб");
  var file = 820;
  var memoryTransfer = parseInt(flashDrive) * 1000;
  alert("\u041D\u0430 \u0444\u043B\u0435\u0448\u043A\u0443 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C ".concat(flashDrive, "\u0413\u0431 \u043F\u043E\u043C\u0456\u0449\u0444\u0454\u0442\u044C\u0441\u044F ").concat(Math.floor(memoryTransfer / file), " \u0444\u0430\u0439\u043B\u0456\u0432 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C \u0432 ").concat(file, "\u041C\u0431"));
}

function task4() {
  var sum = prompt("Введіть суму грошей у вашому гаманці");
  var chocolatePrice = prompt("Введіть ціну однієї шоколадки");
  var numberChocolates = Math.floor(parseFloat(sum / chocolatePrice));
  var rest = parseFloat(sum) - parseFloat(chocolatePrice) * numberChocolates;
  alert("\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0434\u0431\u0430\u0442\u0438 ".concat(numberChocolates, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A \u043D\u0430 ").concat(sum, " \u0433\u0440\u0438\u0432\u0435\u043D\u044C \u0443 \u0432\u0430\u0448\u043E\u043C\u0443 \u0433\u0430\u043C\u0430\u043D\u0446\u0456, \u0456 \u0432\u0430\u0448\u0430 \u0440\u0435\u0448\u0442\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435\u043C\u0435 ").concat(rest.toFixed(2), " \u0433\u0440\u0438\u0432\u0435\u043D\u044C"));
}

function task5() {
  var numder = prompt("Введіть трьох значне число");
  var s = parseInt(numder / 100);
  var d = parseInt(numder / 10) % 10;
  var o = numder % 10;
  var result = o * 100 + d * 10 + s;
  alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0437\u0430\u0434\u043E\u043C \u043D\u0430 \u043F\u0435\u0440\u0435\u0434 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ".concat(result));
}

function task6() {
  var money = prompt("Введіть суму вкладу в банк");
  var annualPercentage = 0.05;
  var monthlyPercentage = annualPercentage / 12;
  var result = parseInt(money) * (monthlyPercentage * 2);
  alert("\u0421\u0443\u043C\u0430 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ".concat(result.toFixed(2), " \u0433\u0440\u0438\u0432\u0435\u043D\u044C"));
}

function task7() {
  alert("Вирази повернуть: 1.=0; 2.=2; 3.=3.");
}