function howManyArguments(){
    return arguments.length;
}

function getData(idValue){
    return document.getElementById(idValue).value;
}
function showResult(resultValue, idValue){
    let result = resultValue;
    return document.getElementById(idValue).innerHTML = result;
}

function task1(){
    const param = getData("arguments");
    const array = param.split(',');
    result = howManyArguments(...array);
    showResult(result, 'argumentsHelp');
}

function task2(){
    const num1 = parseFloat(getData('first_number'));
    const num2 = parseFloat(getData('second_number'));
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
    showResult(result, 'twoNumbersHelp');
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
    const num = parseInt(getData('factorial_number'));
    if (isNaN(num)){
        document.getElementById('factorial_numberHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return;
    }
    textResult = numFactorial(num);
    showResult(textResult, 'factorial_numberHelp');
}
function numFactorial(x){
    let result = 1;
    for (let i=1; i<=x; i++){
        result *=i;
    }
    return result;
}

function task4(){
    const num1 = parseInt(getData('number_100'));
    const num2 = parseInt(getData('number_10'));
    const num3 = parseInt(getData('number_1'));
    let result = 0;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
        document.getElementById('numberHundredHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return;
    }
    result = hundredNumber(num1, num2, num3);
    showResult(result, 'numberHundredHelp');

}

const hundredNumber = (x,y,j) => x*100 + y*10 + j;
 
function task5(){
    const num1 = parseFloat(getData('length_rectangle'));
    const num2 = parseFloat(getData('width_rectangle'));
    let result = 0;

    if (isNaN(num1)){
        document.getElementById('rectangleHelp').innerHTML = `<span style="color:red">Некоректне значення</span>`;
        return;
    }
    if (!isNaN(num1) && !isNaN(num2)){
        result = square(num1,num2).toFixed(2);
    }
    if (!isNaN(num1) && isNaN(num2)){
        result = square(num1).toFixed(2);
    }
    showResult(result, 'rectangleHelp');
}

const square = (x, y=x) => x*y;

function task6(){
    const num = parseInt(getData('perfect_number'));
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
    showResult(result, 'perfect_numberHelp');
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
    const minNum = parseInt(getData('perfect_number_min'));
    const maxNum = parseInt(getData('perfect_number_max'));
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
    showResult(result, 'perfect_number_minMaxHelp');

}