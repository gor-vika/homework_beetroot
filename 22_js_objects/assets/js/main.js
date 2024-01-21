const car = {
    Manufacturer: 'Ford',
    Model: 'Fusion',
    Year: 2014,
    Speed: 120,
    FuelTank: 60,
    FuelConsamption: 10,
    getFullInfo: function showInfo() {
        let result = '<ul>';
        for (let key in this){
            if (typeof this[key] !== 'function'){
                result += `<li class="car_list"><b>${key}: </b><span class="btn btn-info">${this[key]}</span></li>`;
            }
        }
        result += '</ul>';
        return result;
    }
}
function showResult(resultValue, idValue){
    let result = resultValue;
    return document.getElementById(idValue).innerHTML = result;
}
function getData(idValue){
    return document.getElementById(idValue).valueAsNumber;
}
function task1(){
    const fullInfo = car.getFullInfo();
    showResult(fullInfo, 'car_info');
}
function getTime(){
    const dist = getData("distance");
    const breakDuration = 1;
    const durationOneTrip = 4;
    const speed = car.Speed;
    const fuelConsamp = car.FuelConsamption;
    result = '';
    
    if (isNaN(dist)) {
        document.getElementById('car_error').innerHTML = `<span style="color:red">Вкажіть значення</span>`;
       return;
    }
    else if (dist <= 0){
        document.getElementById('car_error').innerHTML = `<span style="color:red">Вкажіть значення більше нуля</span>`;
       return;
    }
    calcResult = calcTimeAndFuel(dist, breakDuration, durationOneTrip,speed, fuelConsamp);
    result = `<div class="btn btn-info">Щоб подолати ${dist} км Вам знадобиться ${calcResult.generalTime} годин та ${calcResult.generalFuel} літрів пального </div>`
    
    showResult(result, 'car_info_task2');
     
}
function calcTimeAndFuel (distance, breakDuration, durationOneTripWithoutBreaks, speed, fuelConsamption){
    let travelTime = 0;
    let timeWithoutBreaks = distance / speed;
    let quantityBreaks = Math.floor(timeWithoutBreaks / (breakDuration + durationOneTripWithoutBreaks));
    let timeOnBreaks = quantityBreaks * breakDuration;
    let generalTime = parseFloat(timeWithoutBreaks + timeOnBreaks).toFixed(1);
    let generalFuel = parseFloat(distance * fuelConsamption / 100).toFixed(2);

    return {generalTime, generalFuel};
}

const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    getFullInfo: function showInfo() {
        let result = `${addZero(this.hours)}:${addZero(this.minutes)}:${addZero(this.seconds)}`;
        return result;
    },
    time2Sec: function time2sec(){
        return this.hours * 3600 + this.minutes*60 + this.seconds;
    },
    sec2Time: function sec2Time(sec){
        return `${addZero(Math.floor((sec/3600)%24))}:${addZero(Math.floor((sec%3600)/60))}:${addZero(sec%60)}`
    }
}

function task2_1(){

    time.hours = getData('hours');
    time.minutes = getData('minutes');
    time.seconds = getData('seconds');
    
    if (isNaN(time.hours) || (time.hours < 0) || (time.hours > 24)) {
        document.getElementById('hours_error').innerHTML = `<span style="color:red">Вкажіть коректне значення</span>`;
       return;
    }
    if (isNaN(time.minutes) || (time.minutes < 0) || (time.minutes > 60)) {
        document.getElementById('minutes_error').innerHTML = `<span style="color:red">Вкажіть коректне значення</span>`;
       return;
    }
    if (isNaN(time.seconds) || (time.seconds < 0) || (time.seconds > 60)) {
        document.getElementById('seconds_error').innerHTML = `<span style="color:red">Вкажіть коректне значення</span>`;
       return;
    }

    const fullTime = time.getFullInfo();
    showResult(fullTime, 'time_info');

}
function task2_2(){
    const newSeconds = parseInt(getData('qtySec'));
    let newTimeSec = 0;
    let result = '';

    if (isNaN(newSeconds) || newSeconds < 0){
        document.getElementById('new_sec_error').innerHTML = `<span style="color:red">Вкажіть коректне значення</span>`;
    } else {
        newTimeSec = time.time2Sec()+newSeconds;
        result = `Новий час становить ${time.sec2Time(newTimeSec)}`;
        showResult(result, 'time_info');
    }
}

function task2_3(){
    const newMinutes = parseInt(getData('qtyMin'));
    let newTimeMin = 0;
    let result = '';

    if (isNaN(newMinutes) || newMinutes < 0){
        document.getElementById('new_min_error').innerHTML = `<span style="color:red">Вкажіть коректне значення</span>`;
    } else {
        newTimeMin = time.time2Sec()+newMinutes*60;
        result = `Новий час становить ${time.sec2Time(newTimeMin)}`;
        showResult(result, 'time_info');
    }
}

function task2_4(){
    const newHours = parseInt(getData('qtyHours'));
    let newTimeHour = 0;
    let result = '';

    if (isNaN(newHours) || newHours < 0){
        document.getElementById('new_hour_error').innerHTML = `<span style="color:red">Вкажіть коректне значення</span>`;
    } else {
        newTimeHour = time.time2Sec()+newHours*3600;
        result = `Новий час становить ${time.sec2Time(newTimeHour)}`;
        showResult(result, 'time_info');
    }
}

const addZero = n => n<10 ? '0'+n : n;

const num1 = {
    x: 0,
    y: 0,
}
const num2 = {
    x: 0,
    y: 0
}
const actions = {
    sum: function sumNumbers(number1, number2) {
        const numerator = number1.x * number2.y + number2.x * number1.y;
        const denominator = number1.y * number2.y;
        const gcd = findGCD(numerator,denominator);
        return {
            numerator: numerator / gcd,
            denominator: denominator / gcd
        };
    },
    sub: function subtractNumbers(number1, number2){
        const numerator = number1.x * number2.y - number2.x * number1.y;
        const denominator = number1.y * number2.y;
        const gcd = findGCD(numerator,denominator);
        return {
            numerator: numerator / gcd,
            denominator: denominator / gcd
        };
    },
    multi: function multiplyNumbers(number1, number2){
        const numerator = number1.x * number2.x;
        const denominator = number1.y * number2.y;
        const gcd = findGCD(numerator,denominator);
        return {
            numerator: numerator / gcd,
            denominator: denominator / gcd
        };
    },
    div: function divisionNumbers(number1, number2){
        const numerator = number1.x * number2.y;
        const denominator = number1.y * number2.x;
        const gcd = findGCD(numerator,denominator);
        return {
            numerator: numerator / gcd,
            denominator: denominator / gcd
        };
    }
}
function getValueNumbers(){
    num1.x = parseInt(getData('numerator_first'));
    num1.y = parseInt(getData('denominator_first'));
    num2.x = parseInt(getData('numerator_second'));
    num2.y = parseInt(getData('denominator_second'));
}

function task3_1(){
    getValueNumbers();
    if (isNaN(num1.x) || isNaN(num1.y) || isNaN(num2.x) || isNaN(num2.y) || num1.y === 0 || num2.y === 0) {
        document.getElementById('numbers_info').innerHTML = `<span style="color:red">Введено некоректні значення</span>`;
        return;
    }
    let result = actions.sum(num1,num2);
    document.getElementById('numbers_info').innerHTML =`Результат: ${result.numerator}/${result.denominator}`;

}
function task3_2(){
    getValueNumbers();
    if (isNaN(num1.x) || isNaN(num1.y) || isNaN(num2.x) || isNaN(num2.y) || num1.y === 0 || num2.y === 0) {
        document.getElementById('numbers_info').innerHTML = `<span style="color:red">Введено некоректні значення</span>`;
        return;
    }
    let result = actions.sub(num1,num2);
    document.getElementById('numbers_info').innerHTML =`Результат: ${result.numerator}/${result.denominator}`;
}
function task3_3(){
    getValueNumbers();
    if (isNaN(num1.x) || isNaN(num1.y) || isNaN(num2.x) || isNaN(num2.y) || num1.y === 0 || num2.y === 0) {
        document.getElementById('numbers_info').innerHTML = `<span style="color:red">Введено некоректні значення</span>`;
        return;
    }
    let result = actions.multi(num1,num2);
    document.getElementById('numbers_info').innerHTML =`Результат: ${result.numerator}/${result.denominator}`;
}
function task3_4(){
    getValueNumbers();
    if (isNaN(num1.x) || isNaN(num1.y) || isNaN(num2.x) || isNaN(num2.y) || num1.y === 0 || num2.y === 0) {
        document.getElementById('numbers_info').innerHTML = `<span style="color:red">Введено некоректні значення</span>`;
        return;
    }
    let result = actions.div(num1,num2);
    document.getElementById('numbers_info').innerHTML =`Результат: ${result.numerator}/${result.denominator}`;
}


function findGCD(a, b) {
    // Поки b не дорівнює 0, застосовуємо операцію ділення з залишком
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    // Найбільший спільний дільник знаходиться в a
    return a;
}



