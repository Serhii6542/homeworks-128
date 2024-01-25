const car = {
    Brand: 'Bayerische Motoren Werke AG - BMW',
    Model: 'M4',
    Year: 2015,
    "Average speed": 90,
    "Volume fuel tank": 60,
    "Average fuel consumption": 14,
    Drivers: ['Mario', 'Rocsolana'],
}

function task1_1(){
    let rez ='<ul>';
    for(let key in car){
        if(typeof(car[key])){
            rez += `<li><b>${key}:</b> ${car[key]}</li>`;
        }
    }
    rez += '</ul>';
    document.getElementById('info-car').innerHTML = rez;
}

function task1(){
    const distance = document.getElementById('num').valueAsNumber;
    let Oil = 0;
    let time = 0;
    if(isNaN(distance)){
        document.getElementById('rez').innerHTML = '<span style="color:red;">Введіть дистанцію</span>';
        return;
    } else if(distance<0){
        document.getElementById('rez').innerHTML = '<span style="color:red;">Дистанція не може бути меншою за 0</span>';
        return;        
    }
    Oil = amountOfFuel(distance,car["Average fuel consumption"]);
    time = fuelTime(distance,car["Average speed"]);

    document.getElementById('rez').innerHTML = `<span>Кількість палива:${Oil} Л.</span>`;
    document.getElementById('time').innerHTML = `<span>Годин:${time}</span>`;
    
}

function fuelTime(a,b){
    let time = 0;
    let fuellTIme = 0;
    let additionalTime = 0;
    if(a===0){
        fuellTIme = 0;
    }else{
        time = parseInt(a / b);
        additionalTime = parseInt(time / 4);
        fuellTIme = time + additionalTime;
        return fuellTIme;
    }
    
}

function amountOfFuel(a,b){
    let numOil = 0;
    if(a===0){
        numOil = 0;
        return numOil
    }else {
        numOil = parseInt((a / 100) * b);
        return numOil
    }
}

function addDrivers(){
    const name = document.getElementById('name').value;
    if(name === ''){
        document.getElementById('rezName').innerHTML = `<span style="color:red;">Введіть ім'я водія</span>`;
        return;
    }
    if(name !== '' && isNaN(name)){
        car.Drivers.push(name);
        task1_1();
        document.getElementById('rezName').innerHTML = `<span style="color:green;">Ім'я водія додано</span>`;
    }
    
}

function checkDrivers(){
    const check = document.getElementById('check').value;
    if(check === ''){
        document.getElementById('rezCheck').innerHTML = `<span style="color:red;">Введіть ім'я</span>`;
        return;
    }
    if(car.Drivers.includes(check)){
        document.getElementById('rezCheck').innerHTML = `<span style="color:green;">Водій ${check} вже є в списку</span>`;
    }else{
        document.getElementById('rezCheck').innerHTML = `<span style="color:red;">Водій ${check} немає в списку</span>`;
    }
}

const time = {
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
}

function task2(){
    time.Hours = document.getElementById('hour').valueAsNumber;
    time.Minutes = document.getElementById('minute').valueAsNumber;
    time.Seconds = document.getElementById('second').valueAsNumber;
    let timeHour = document.getElementById('timehoues').valueAsNumber;
    let timeMin = document.getElementById('timeminutes').valueAsNumber;
    let timeSec = document.getElementById('timesecond').valueAsNumber;
    let second = 0;
    let timeTime = 0;
    if(isNaN(time.Hours) || isNaN(time.Minutes) || isNaN(time.Seconds)){
        document.getElementById('reztime').innerHTML = '<span style="color:red;">Введіть час</span>';
        return;
    }
    if(time.Hours < 0 || time.Minutes < 0 || time.Seconds < 0){
        document.getElementById('reztime').innerHTML = '<span style="color:red;">Введіть правельно ваш час</span>';
        return;
    }
    if(time.Hours > 23 || time.Minutes> 59 || time.Seconds > 59){
        document.getElementById('reztime').innerHTML = '<span style="color:red;">Введіть правельно ваш час</span>';
        return;
    }
    if(timeHour < 0 || timeMin < 0 || timeSec < 0){
        document.getElementById('reztime').innerHTML = '<span style="color:red;">Введіть час більше 0</span>';
        return;
    }
    if(isNaN(timeHour) && isNaN(timeMin) && isNaN(timeSec)){
        document.getElementById('reztime').innerText = `Ваш введений час ${addZero(time.Hours)}:${addZero(time.Minutes)}:${addZero(time.Seconds)}`;
        return;
    } else if(!isNaN(timeHour) && isNaN(timeMin) && isNaN(timeSec)){
        timeMin = 0;
        timeSec = 0;
    } else if(isNaN(timeHour) && !isNaN(timeMin) && isNaN(timeSec)){
        timeHour = 0;
        timeSec = 0;
    } else if(isNaN(timeHour) && isNaN(timeMin) && !isNaN(timeSec)){
        timeHour = 0;
        timeMin = 0;
    } else if(!isNaN(timeHour) && !isNaN(timeMin) && isNaN(timeSec)){
        timeSec = 0;
    } else if(!isNaN(timeHour) && isNaN(timeMin) && !isNaN(timeSec)){
        timeMin = 0;
    } else if(isNaN(timeHour) && !isNaN(timeMin) && !isNaN(timeSec)){
        timeHour = 0;
    }
    

    second = time2sec(time.Hours,time.Minutes,time.Seconds) + secTime(timeSec) + minTime(timeMin) + hourTime(timeHour);
    timeTime = sec2time(second);

    if(timeTime.h > 23){
        timeTime.h = timeTime.h % 24;
    } else if (timeTime.m > 59){
        timeTime.m = 0 + (timeTime.m % 60);
        timeTime.h += 1;
    } else if (timeTime.s > 59){
        timeTime.s = 0 + (timeTime.s % 60);
        timeTime.m += 1;
    }
    document.getElementById('reztime').innerText = `Ваш введений час разом з тим що ви додали ${addZero(timeTime.h)}:${addZero(timeTime.m)}:${addZero(timeTime.s)}`
}

function time2sec(a,b,c){
    return (a * 3600) + (b * 60) + c;
}

function secTime(s){
    let sec = s;
    return sec;
}

function minTime(m){
    let sec = (m * 60);
    return sec;
}

function hourTime(h){
    let sec = (h * 3600);
    return sec;
}

function sec2time(sec){
    let a = parseInt(sec / 3600);
    let b = parseInt((sec % 3600) / 60);
    let c = sec % 60;
    return {
        h: a,
        m: b,
        s: c,
    }
}

const addZero = n => n<10 ?'0'+n:''+n;


const fraction1 = {
    numerator1: 0,
    denominator1: 0,
}

const fraction2 = {
    numerator2: 0,
    denominator2: 0,
}

function task3(){
    fraction1.numerator1 = document.getElementById('numerator').valueAsNumber;
    fraction1.denominator1 = document.getElementById('denominator').valueAsNumber;
    fraction2.numerator2 = document.getElementById('numerator_2').valueAsNumber;
    fraction2.denominator2 = document.getElementById('denominator_2').valueAsNumber;
    const action = document.getElementById('action').value;
    let rezFraction = 0;
    let divis = 0;
    let rezNumerDivis = 0;
    let rezDenomDivis = 0;

    if(isNaN(fraction1.numerator1) || isNaN(fraction1.denominator1) || isNaN(fraction2.numerator2) || isNaN(fraction2.denominator2)){
        document.getElementById('rez_fraction').innerHTML = '<span style="color: red;">Ви ввели не коректні данні</span>';
        return;
    }else if(fraction1.denominator1<=0 || fraction2.denominator2 <= 0){
        document.getElementById('rez_fraction').innerHTML = '<span style="color: red;">Введіть знаменник більше нуля</span>';
        return;
    } else if(fraction1.numerator1 === 0 || fraction2.numerator2 ===0){
        document.getElementById('rez_fraction').innerHTML = '<span style="color: red;">Введіть чисельник більший або менший нуля</span>';
        return;
    }

    switch(action){
        case '+':
            rezFraction = add(fraction1.numerator1,fraction1.denominator1,fraction2.numerator2,fraction2.denominator2);
            break;
        case '-':
            rezFraction = subtract(fraction1.numerator1,fraction1.denominator1,fraction2.numerator2,fraction2.denominator2);
            break;
        case '*':
            rezFraction = multiply(fraction1.numerator1,fraction1.denominator1,fraction2.numerator2,fraction2.denominator2);
            break;
        case '/':
            rezFraction = divide(fraction1.numerator1,fraction1.denominator1,fraction2.numerator2,fraction2.denominator2);
            break;
        default :
            document.getElementById('rez_fraction').innerHTML = '<span style="color: red;">Введіть дію/span>';
            return;
    }
    divis = commonDivisor(rezFraction.numer,rezFraction.denom);
    if(divis === 0){
        divis = 1;
    }
    rezNumerDivis = rezFraction.numer / divis;
    rezDenomDivis = rezFraction.denom / divis;
    if(rezNumerDivis === 0){
        document.getElementById('rez_fraction').innerText = `Результат = 0`
        return;
    }
    
    document.getElementById('rez_fraction').innerText = `Результат = ${rezNumerDivis}/${rezDenomDivis}`;
}

function add(a,b,c,d){
    let rezNumer = 0;
    let rezDenom = 0;

    rezNumer = (a * d) + (b * c);
    rezDenom = b * d;
    return {
        numer: rezNumer,
        denom: rezDenom,
    }
}
function subtract(a,b,c,d){
    let rezNumer = 0;
    let rezDenom = 0;

    rezNumer = (a * d) - (b * c);
    rezDenom = b * d;
    return {
        numer: rezNumer,
        denom: rezDenom,
    }
}

function multiply(a,b,c,d){
    let rezNumer = 0;
    let rezDenom = 0;

    rezNumer = a * c;
    rezDenom = b * d;
    return {
        numer: rezNumer,
        denom: rezDenom,
    }
}

function divide(a,b,c,d){
    let rezNumer = 0;
    let rezDenom = 0;

    rezNumer = a * d;
    rezDenom = b * c;
    return {
        numer: rezNumer,
        denom: rezDenom,
    }
}

function commonDivisor(a,b){
    const min = a < b ? a : b;
    let divis = 0;
    for(let i = 1; i<= min; i++){
        if(a % i === 0 && b % i === 0){
            divis = i
        }
    }
    return divis
}
