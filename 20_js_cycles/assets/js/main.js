function task1() {
    const userAge = document.getElementById('age').valueAsNumber;
    let rez = '';
    
    if (isNaN(userAge)){
        document.getElementById('ageHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`
        return;
    }
    
    if (userAge < 0){
        rez = 'некоректне значення';
    }
    else if (userAge >= 0 && userAge < 12){
        rez = 'дитина';
    }
    else if (userAge >= 12 && userAge < 18){
        rez = 'підліток';
    }
    else if (userAge >=18 && userAge < 60){
        rez = 'дорослий';
    }
    else if (userAge >=60 && userAge <120) {
        rez = 'пенсіонер'
    }
    else{
        rez = 'Ого!'
    }

    document.getElementById('ageHelp').innerHTML = rez;
}
function task2() {
    const keyNum = document.getElementById('number_symbol').valueAsNumber;
    let rez = '';

    if (isNaN(keyNum)){
        document.getElementById('symbolHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return
    }
    switch (keyNum){
        case 1:
            rez = `${keyNum} = !`;
            break;
        case 2:
            rez = `${keyNum} = @`;
            break;
        case 3:
            rez = `${keyNum} = #`;
            break;
        case 4:
            rez = `${keyNum} = $`;
            break;
        case 5:
            rez = `${keyNum} = %`;
            break;
        case 6:
            rez = `${keyNum} = ^`;
            break;
        case 7:
            rez = `${keyNum} = &`;
            break;
        case 8:
            rez = `${keyNum} = *`;
            break;
        case 9:
            rez = `${keyNum} = (`;
            break;
        case 0:
            rez = `${keyNum} = )`;
            break;
        default:
            rez = 'Некоректне значення!';
            break;
    }
    document.getElementById('symbolHelp').innerHTML = rez;
}

function task3(){
    const num1 = document.getElementById('number_first_range').valueAsNumber;
    const num2 = document.getElementById('number_second_range').valueAsNumber;
    let rez = 0;

    if (isNaN(num1)){
        document.getElementById('rangeHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return
    }
    if (isNaN(num2)){
        document.getElementById('rangeHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return
    }

    if (num1 <= num2) {
        for (let i = num1; i <= num2; i++ ){
            rez +=i;
        }
        rez = `Сума чисел в діапазоні від ${num1} до ${num2} становить ${rez}`;
    }
    if (num1 > num2) {
        for (let i = num2; i < num1; i++ ){
            rez +=i;
        }
        rez = `Сума чисел в діапазоні від ${num2} до ${num1} становить ${rez}`;
    }
    document.getElementById('rangeHelp').innerHTML = rez;
}

function task4(){
    const num1 = document.getElementById('number_first_divisor').valueAsNumber;
    const num2 = document.getElementById('number_second_divisor').valueAsNumber;
    let rez = 0;

    if (isNaN(num1)){
        document.getElementById('divisorHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return
    }
    if (isNaN(num2)){
        document.getElementById('divisorHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return
    }

    const min = num1 < num2 ? num1 : num2;
    for (let i=0; i<=min; i++){
        if (num1%i === 0 && num2%i === 0)
        rez = `Найбільший спільний дільник числа ${num1} та ${num2} = ${i}`;
    }
    if (num1<0 || num2<0){
        for (let i=0; i>=min; i--){
            if (num1%i === 0 && num2%i === 0)
            rez = `Найбільший спільний дільник числа ${num1} та ${num2} = ${Math.abs(i)}`;
        }
    }
    document.getElementById('divisorHelp').innerHTML = rez;
}

function task5(){
    const number = document.getElementById('number_all_divisors').valueAsNumber;
    let rez = '';

    if (isNaN(number)){
        document.getElementById('AlldivisorsHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return
    }

    for (let i=0; i <= number; i++){
        if (number%i === 0){
            rez += `<div> ${i} </div>`;
        } 
    }
    if (number <0){
        for (let i=0; i>=number; i--){
            if (number%i === 0){
                rez += `<div> ${Math.abs(i)} </div>`;
            }
        }
    }
    else if (number ===0){
        rez = 0;
    }
    document.getElementById('AlldivisorsHelp').innerHTML = rez;
}

function task6(){
    const number = document.getElementById('number_palindrom').valueAsNumber;
    const num5 = number%10;
    const num4 = Math.trunc((number/10)%10);
    const num2 = Math.trunc((number/1000)%10);
    const num1 = Math.trunc(number/10000);
    console.log(num1);
    let rez = '';

    if (isNaN(number)){
        document.getElementById('palindromHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return;
    }

    if (num1 === num5 && num2 === num4){
        rez = `число ${number} є паліндромом`;
    }
    else {
        rez = `число ${number} не є паліндромом`;
    }

    document.getElementById('palindromHelp').innerHTML = rez;
}

function task7(){
    const amount = parseFloat(document.getElementById('purchase_amount').valueAsNumber).toFixed(2);
    const disc1 = 3;
    const disc2 = 5;
    const disc3 = 7;
    let finishPrice = '';

    if (isNaN(amount)){
        document.getElementById('purchaseHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return;
    }
    if (amount <=0){
        finishPrice = 'Некорректне значення';
    }
    if (amount>0 && amount <300){
        finishPrice = `Сума до оплати ${(amount - (amount*disc1/100)).toFixed(2)} з врахуванням знижки ${disc1}%`;  
    }
    else if (amount>=300 && amount<500){
        finishPrice = `Сума до оплати ${(amount - (amount*disc2/100)).toFixed(2)} з врахуванням знижки ${disc2}%`;
    }
    else if (amount>=500){
        finishPrice = `Сума до оплати ${(amount - (amount*disc3/100)).toFixed(2)} з врахуванням знижки ${disc3}%`;
    }

    document.getElementById('purchaseHelp').innerHTML = finishPrice;
}

function task8(){
    let result = 0;
    const numbersAmount = 10;
    let positiveNumber = 0;
    let negativeNumber = 0;
    let zeroNumber = 0;
    let evenNumber = 0;
    let oddNumber = 0;
    let message = '';

    for (let i=0; i<numbersAmount; i++){
        result = +prompt(`Введи число`);
        console.log(result);
        if (isNaN(result)){
            document.getElementById('usersNumberHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
            return;
        }
        if (result < 0){
            negativeNumber +=1;
        }
        else if (result > 0){
            positiveNumber +=1;
        }
        else if (result == 0){
            zeroNumber +=1;
        }
        else {
            message = `Невірні дані`;
        }
        if (result%2===0){
            evenNumber +=1;
        }
        else if(result%2!==0){
            oddNumber +=1;
        }

    } 
    message = `Відємних чисел - ${negativeNumber}, Додатніх чисел - ${positiveNumber}, Нулів - ${zeroNumber}, парних чисел - ${evenNumber}, непарних чисел - ${oddNumber}`;
    document.getElementById(`usersNumberHelp`).innerHTML = message;
}

function task9(){
    let currentDay = new Date().getDay();
    const dayNames = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П`ятниця', 'Субота'];
    while (
        confirm(`${dayNames[currentDay]}. Хочеш побачити наступний день?`))
        {
            currentDay = (currentDay + 1) % dayNames.length;
        }   
}

function task10(){
    alert ('Загадай число від 1 до 100');
    let start = 0;
    let end = 100;
    const target = '';
    let middle = Math.floor((start + (end - start)/2));
    
    for (i=0; i<=end; i++){
        if (confirm (`Число ${middle}?`)==true){
            alert (`Вгадали! Число ${middle}`);
            return;
        }
        else if (confirm (`Число > ${middle}?`)==true){
            start = middle;
            middle = Math.floor((middle + (end - middle)/2));  
            console.log(start);   
        }
        else if (confirm (`Число > ${middle}?`)==false) {
            end = middle;
            middle = Math.floor((start + (middle- start)/2));
        }
    } 
}

function task11() {
    let result = '';

    for (let i=1; i<=10; i++){
        result +=`<ul>`
        for (let j=1; j<=10; j++){
            result += `<li>${i}*${j} = ${i*j}</li>`;
        }
        result += `</ul>`
    }
    document.getElementById('multiTableHelp').innerHTML = result;
}

// function receiveDatas(){
//     let dayIn = document.getElementById('date_data').valueAsNumber;
//     let monthIn = document.getElementById('month_data').valueAsNumber;
//     let yearIn = document.getElementById('year_data').valueAsNumber;
// }

// function checkData(data1, data2, data3){
//     if (isNaN(data1)){
//         document.getElementById('dateTaskHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
//         return;
//     }
//     if (isNaN(data2)){
//         document.getElementById('dateTaskHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
//         return;
//     }
//     if (isNaN(data3)){
//         document.getElementById('dateTaskHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
//         return;
//     }
// }



function nextDay() {

    let dayIn = document.getElementById('date_data').valueAsNumber;
    let monthIn = document.getElementById('month_data').valueAsNumber;
    let yearIn = document.getElementById('year_data').valueAsNumber;
    let dayOut = dayIn + 1,
        monthOut = monthIn,
        yearOut = yearIn;

        if (isNaN(dayIn)){
            document.getElementById('dateTaskHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
            return;
        }
        if (isNaN(monthIn)){
            document.getElementById('dateTaskHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
            return;
        }
        if (isNaN(yearIn)){
            document.getElementById('dateTaskHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
            return;
        }
    function leapYear(y){
        return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
    }
    function showResult(){
        let result = '';
        result = `${dayOut}.${monthOut}.${yearOut}`;
        document.getElementById('dateTaskHelp').innerHTML = result;
    }

    switch (monthIn){
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
            if (dayIn === 30){
                dayOut = 1;
                monthOut = monthIn + 1;
            }
            break;
        case 2:
            if (leapYear(yearIn)){
                if (dayIn === 29){
                    dayOut = 1;
                    monthOut = monthIn + 1;
                }
                else {
                    if (dayIn === 28){
                        dayOut = 1;
                        monthOut = monthIn + 1;
                    }
                }
            }
            break;
    }

    if (monthOut === 13){
        monthOut = 1;
        yearOut = yearIn + 1;
    }

    // return `${dayOut}.${monthOut}.${yearOut}`;
    return showResult();
}

    

