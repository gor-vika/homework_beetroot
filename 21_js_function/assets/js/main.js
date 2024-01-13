function howManyArguments(){
    return arguments.length;
}

function task1(){
    const param = document.getElementById('arguments').value;
    const array = param.split(',');
    result = howManyArguments(...array);
    document.getElementById('argumentsHelp').innerHTML = result;
}

function task2(){
    const num1 = document.getElementById('first_number').valueAsNumber;
    const num2 = document.getElementById('second_number').valueAsNumber;
    let result = 0;

    checkData(num1);
    checkData(num2);
    
    if (compareNumbers(num1, num2) >0){
        result = 1;
    }
    else if (compareNumbers(num1, num2)<0){
        result = -1;
    }
    else if (compareNumbers(num1, num2) === 0){
        result = 0;
    }
    
    document.getElementById('twoNumbersHelp').innerHTML = result;
    // ось тут в разі не введення даних відображається і 0, і повідомлення про помилку???
}
function checkData (variable){
    if (isNaN(variable)){
       document.getElementById('twoNumbersError').innerHTML = `<span style="color:red">Некоректне значення</span>`;
       return;
    }
}
const compareNumbers = (x, y) => x - y;

function task3(){
    const num = document.getElementById('factorial_number').valueAsNumber;
    if (isNaN(num)){
        document.getElementById('factorial_numberHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return;
    }
    textResult = numFactorial(num)
    document.getElementById('factorial_numberHelp').innerHTML = textResult;
}
function numFactorial(x){
    let result = 1;
    for (let i=1; i<=x; i++){
        result *=i;
    }
    return result;
}

function task4(){
    const num1 = document.getElementById('number_100').valueAsNumber;
    const num2 = document.getElementById('number_10').valueAsNumber;
    const num3 = document.getElementById('number_1').valueAsNumber;
    let result = 0;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
        document.getElementById('numberHundredHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return;
    }
    result = hundredNumber(num1, num2, num3);
    document.getElementById('numberHundredHelp').innerHTML = result;
}

const hundredNumber = (x,y,j) => x*100 + y*10 + j;
 
function task5(){
    const num1 = document.getElementById('length_rectangle').valueAsNumber;
    const num2 = document.getElementById('width_rectangle').valueAsNumber;
    let result = 0;

    if (isNaN(num1)){
        document.getElementById('rectangleHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return;
    }
    if (!isNaN(num1) && !isNaN(num2)){
        result = square(num1,num2);
    }
    if (!isNaN(num1) && isNaN(num2)){
        result = square(num1);
    }
    
    document.getElementById('rectangleHelp').innerHTML = result;
}

const square = (x, y=x) => x*y;

function task6(){
    const num = document.getElementById('perfect_number').valueAsNumber;
    let result = '';

    if (isNaN(num) || num < 3){
        document.getElementById('perfect_numberHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return;
    }
    if (perfectNumber(num) === true){
        result = `Число ${num} досконале`;
    };
    if (perfectNumber(num) === false){
        result = `Число ${num} не досконале`;
    };

    document.getElementById('perfect_numberHelp').innerHTML = result;
}
function perfectNumber(x){
    let sum = 0;
    for (let i=1; i<x; i++){
        if (x%i === 0){
            sum += i;
        }
    }
    if (sum === x){
        return true;
    }
    else return false;
}

function task7(){
    const minNum = document.getElementById('perfect_number_min').valueAsNumber;
    const maxNum = document.getElementById('perfect_number_max').valueAsNumber;
    let result = '';
    let num = 0;

    if (isNaN(minNum) || isNaN(maxNum) || minNum === 0 || maxNum === 0){
        document.getElementById('perfect_number_minMaxHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return;
    }
    if (minNum < maxNum){
        for (let i = minNum; i <= maxNum; i++){
            if (perfectNumber(i) === true){
             result += i+', ';
         }
         }
    }
    if (minNum > maxNum){
        for (let i = maxNum; i <= minNum; i++){
            if (perfectNumber(i) === true){
             result += i+', ';
         }
         }
    }
    if (minNum === maxNum){
        if (perfectNumber(minNum) === true){
            result = 'Число досконале';
        }
        else result = 'Число не досконале';
    }
    document.getElementById('perfect_number_minMaxHelp').innerHTML = result;
}