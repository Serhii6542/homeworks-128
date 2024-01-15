function task1() {
    const age = document.getElementById('numb').valueAsNumber;
    let rez = '';
    if(isNaN(age)){
        document.getElementById('result').innerHTML = '<span style="color: red">Введіть ваш вік</span>';
        return;
    }

    if(age >= 0 && age <= 11) {
        rez = 'Дитина'
    } else if(age >= 12 && age<= 17){
        rez = 'Підліток'
    } else if(age >= 18 && age<= 59){
        rez = 'Дорослий'
    } else if(age >= 60 && age<= 120){
        rez = 'Пенсіонер'
    } else {
        rez = 'Вкажіть дійсний ваш вік'
    }
    
    document.getElementById('result').innerText = rez;
}

function task2() {
    const num = document.getElementById('numb_2').valueAsNumber;
    let rez = '';
    if(isNaN(num)){
        document.getElementById('result_2').innerHTML = '<span style="color: red">Введіть число</span>';
        return;
    }

    switch(num){
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
            rez = 'не визначений введіть число від 0 до 9'
            break;
    }


    document.getElementById('result_2').innerText = `Ваш знак "${rez}"`;
}

function task3() {
    const num1 = document.getElementById('numb1').valueAsNumber;
    const num2 = document.getElementById('numb2').valueAsNumber;
    let suma = 0;
    let from = num1,
        to = num2;
    
    if(isNaN(num1)){
        document.getElementById('resul_t').innerHTML = '<span style="color: red">Введіть число в перший рядок</span>';
        return;
    }
    if(isNaN(num2)){
        document.getElementById('resul_t').innerHTML = '<span style="color: red">Введіть число в другий рядок</span>';
        return;
    }
    // if(num1>100 && num1<-100 && num2>100 && num2<-100){
    //     document.getElementById('resul_t').innerHTML = '<span style="color: red">Введіть число від -100 до 100</span>';
    //     return;
    // }
    
    if(100<num1){
        document.getElementById('resul_t').innerHTML = '<span style="color: red">Введіть число від -100 до 100</span>';
        return;
    }
    if(100<num2){
        document.getElementById('resul_t').innerHTML = '<span style="color: red">Введіть число від -100 до 100</span>';
        return;
    }
    if(-100>num1){
        document.getElementById('resul_t').innerHTML = '<span style="color: red">Введіть число від -100 до 100</span>';
        return;
    }
    if(-100>num2){
        document.getElementById('resul_t').innerHTML = '<span style="color: red">Введіть число від -100 до 100</span>';
        return;
    }

    if(num1 > num2){
        from = num2;
        to = num1;
    }
    

    for(let i = from;i<=to; i++){
        suma += i;
    }
    document.getElementById('resul_t').innerText = `Сума всіх чисел проміжку = ${suma}`;
}

// function task4() {
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
    const num_1 = parseInt(prompt("Напишіть перше число")); 
    const num_2 = parseInt(prompt( "Напишіть друге число"));
    if (isNaN(num_1) || isNaN(num_2) || num_1 == 0 || num_2 == 0) { 
        alert("Ви ввели некоректні дані");
        return
    }
    const min = num_1 < num_2 ? num_1: num_2;
    let divisor = 0;

    for (let i = 1; i <= min; i++) {
        if (num_1 % i == 0 && num_2 % i == 0) {
            divisor = i
        }
    }
    alert(`Найбільший спільний дільник = ${divisor}`);
}

function task5() {
    const firstNumb = parseInt(prompt("Напишіть число")); 
    if (isNaN(firstNumb) || firstNumb == 0) { 
        alert("Ви ввели некоректні дані");
        return
    }
    if (firstNumb < 0){ 
        alert("Ви ввели некоректні дані");
        return
    }
    let divis = '';

    for (let i = 1; i <= firstNumb; i++) {
        if (firstNumb % i == 0 ) {
            divis += i+' ';
        }
    }
    alert(`Найбільший спільний дільник = ${divis}`);
}


function task6() {
    const numbr = document.getElementById("numbe_r").valueAsNumber;
    const tensTh = parseInt(numbr / 10000);
    const th = parseInt(numbr / 1000) % 10;
    const d = parseInt(numbr / 10) % 10;
    const o = numbr % 10;
    let rez = '';
    if(isNaN(numbr)){
        document.getElementById('definition').innerHTML = '<span style="color: red">Введіть число</span>';
        return;
    }

    if(numbr<10000 || numbr>99999){
        document.getElementById('definition').innerHTML = '<span style="color: red">Введіть п’ятирозрядне число число</span>';
        return;
    }

    if(tensTh === o && th === d){
        rez = 'Число є паліндром';
    } else {
        rez = 'Число не є паліндромом';
    }
    document.getElementById('definition').innerText = rez;
}

function task7() {
    const suMa = document.getElementById("suma").valueAsNumber;
    const minDiscount = 0.03;
    const averageDiscount = 0.05;
    const maxDiscount = 0.07;
    let sumaDiscount = ``;
    if(isNaN(suMa)){
        document.getElementById('discountedAmount').innerHTML = '<span style="color: red">Введіть суму покупки числом</span>';
        return;
    }
    if(0>suMa){
        document.getElementById('discountedAmount').innerHTML = '<span style="color: red">Сума покупки не може бути відємною</span>';
        return
    }
    if(0<=suMa && suMa<=199){
        sumaDiscount = `Ваша сума становить ${suMa} гривень`;
    }
    else if(200<=suMa && suMa<=299){
        sumaDiscount = `Ваща сума зі знижкою становить ${(suMa - (suMa * minDiscount)).toFixed(2)} гривень`;
    }
    else if(300<=suMa && suMa<=499){
        sumaDiscount = `Ваща сума зі знижкою становить ${(suMa - (suMa * averageDiscount)).toFixed(2)} гривень`;
    }
    else if(500<=suMa){
        sumaDiscount = `Ваща сума зі знижкою становить ${(suMa - (suMa * maxDiscount)).toFixed(2)} гривень`;
    }
    document.getElementById('discountedAmount').innerText = sumaDiscount;
}

function task8() {
    let positiv = 0;
    let negativ = 0;
    let zero = 0;
    let par = 0;
    let notPar = 0;
    let i = 0;
    while(i < 10){
        i++;
        let numBer = parseInt(prompt(`Напишіть ${i} число`));
        if(isNaN(numBer)){
            alert('Ви ввели не число');
            i--;
        }

        if(numBer === 0){
            zero++;
        } else if(numBer > 0){
            positiv++
        } else if (numBer < 0){
            negativ++;
        }

        if(numBer !== 0){
            if(numBer % 2 === 0){
                par++;
            } else {
                notPar++
            }
        }
        alert(`Додатніх = ${positiv}, від'ємних = ${negativ}, парних = ${par}, не парних = ${notPar}, нулів = ${zero}.`)
    }
}
function task9(){
    let dayNumber = 0;
    let dayName = "";
    let answer = true;

    do {
        switch(dayNumber){
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
    
        answer = confirm(`«${dayName}. Хочеш побачити наступний день?»`)
        if(answer){
            dayNumber++;
        }
        if(dayNumber===7){
            dayNumber = 0;
        }
    }while(answer)
}

// function task10() {
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
    let min = 0;
    let max = 100;
    let midle = 0;
    let answe_r = 0;
    let sign = '';
    do {
        midle = parseInt((min + max) / 2);
        sign = prompt(`Ваше число більше ${midle} чи менше ?`);
        if(!isNaN(sign)){
            alert('Введіть один із цих знаків <, >, =.')
            break;
        }
        if(sign !== '>' && sign !== '<' && sign !== '='){
            alert('Введіть один із цих знаків <, >, =.')
            break;
        }
        if(sign === '<'){
            min = midle;
            answe_r = midle + 1;

        }else if(sign === '>'){
            max = midle;
            answe_r = midle;
        }else if(sign === '='){
            max = min;
            answe_r = midle;
        }
    } while(max - min > 1);
    alert(`Ваше число ${answe_r}`)
}

function task11() {
    let multy = '';
    for(let i = 2; i<=10;i++){
        multy += '<ul>';
        for(let y = 1; y<=10;y++){
            multy += `<li>${i} * ${y} = ${i*y}</li>`
        }
        multy += '</ul>';
    }
    document.getElementById('multy_wrap').innerHTML = multy;
}

function leapYear(y){
    return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0
}

const addZero = n => n<10 ?'0'+n:''+n;

function task12() {
    const presentDate = document.getElementById('date').valueAsNumber;
    const presentMonth = document.getElementById('mounth').valueAsNumber;
    const presentYear = document.getElementById('year').valueAsNumber;
    let rez = '';
    if(isNaN(presentDate)){
        rez = '<span style="color:red">Введіть дату</span>';
    } else if(isNaN(presentMonth)){
        rez = '<span style="color:red">Введіть місяць</span>';
    } else if(isNaN(presentYear)){
        rez = '<span style="color:red">Введіть рік</span>';
    } else {
        rez = `Наступна дата ${nextDate(presentDate, presentMonth, presentYear)}`
    }

    document.getElementById('nextDay').innerHTML = rez;
}

function nextDate(dayIn=1, monthIn=1, yearIn=1970) {
    let dayOut = dayIn + 1,
        monthOut = monthIn,
        yearOut = yearIn;
    
    switch(monthIn){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (dayIn === 31){
                dayOut = 1;
                monthOut = monthIn + 1;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if(dayIn === 30){
                dayOut = 1;
                monthOut = monthIn + 1;
            }
        break;
        case 2:
            if(leapYear(yearIn)){
                if(dayIn === 29){
                    dayOut = 1;
                    monthOut = monthIn + 1;
                }
            } else {
                if(dayIn === 28){
                    dayOut = 1;
                    monthOut = monthIn + 1;
                }   
            }
    }

    if(monthOut === 13){
        monthOut = 1;
        yearOut = yearIn + 1;
    }
    return `${addZero(dayOut)}.${addZero(monthOut)}.${addZero(yearOut)}`;
}