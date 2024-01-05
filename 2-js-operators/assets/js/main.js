function task1() {
    const n1 = 0.1;
    const n2 = 0.2;
    alert(`Результат = ${(n1 + n2).toFixed(1)}`);
}

function task2() {
    const string = "1";
    const numder = 2;
    alert(`Правельний результат = ${parseInt(string) + numder}`);
}

function task3() {
    const flashDrive = prompt("Введіть обсяг флешки в Гб");
    const file = 820;
    const memoryTransfer = parseInt(flashDrive) * 1000;
    alert(`На флешку розміром ${flashDrive}Гб поміщфється ${Math.floor(memoryTransfer / file)} файлів розміром в ${file}Мб`);
}

function task4() {
    const sum = prompt("Введіть суму грошей у вашому гаманці");
    const chocolatePrice = prompt("Введіть ціну однієї шоколадки");
    const numberChocolates = Math.floor(parseInt(sum / chocolatePrice));
    const rest = parseInt(sum) - (parseInt(chocolatePrice) * numberChocolates);
    alert(`Ви можете придбати ${numberChocolates} шоколадок на ${sum} гривень у вашому гаманці, і ваша решта становитеме ${rest} гривень`);
}

function task5() {
    const numder = prompt("Введіть трьох значне число");
    const s = parseInt(numder / 100);
    const d = parseInt(numder / 10) % 10;
    const o = numder % 10;
    const result = String(o) + String(d) + String(s);
    alert(`Ваше число задом на перед становить ${result}`);
}

function task6() {
    const money = prompt("Введіть суму вкладу в банк");
    const annualPercentage = 0.05;
    const monthlyPercentage = annualPercentage / 12;
    const result = parseInt(money) + (parseInt(money)*(monthlyPercentage * 2));
    alert(`Сума з нарахованими відсотками становить ${(result).toFixed(2)} гривень`);
}

function task7() {
    alert("Вирази повернуть: 1.=0; 2.=2; 3.=3.")
}