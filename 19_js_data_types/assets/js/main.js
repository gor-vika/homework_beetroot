function task1(){
    const num1 = 0.1;
    const num2 = 0.2;
    const sum = parseFloat(num1 + num2).toFixed(1);
    alert (`0,1 + 0,2 = ${sum}`);
}
function task2(){
    const string = "1";
    const numb = 2;
    const sum = parseInt(string) + numb;
    //const sum = +string + numb;
    alert (`"1" + 2 = ${sum}`);
}
function task3(){
    const flashDrive = prompt("Який обсяг флешки в Гб?");
    const fileSize = 820;
    const filesAmount = Math.trunc(flashDrive*1024 / fileSize);
    alert (`На флешці ${flashDrive}Гб поміститься ${filesAmount} файлів 820Мб`);
}
function task4(){
    const money = prompt("Скільки грошей є в гаманці?");
    const chocPrice = prompt("Скільки коштує одна шоколадка?");
    const chocAmount = Math.trunc(money/chocPrice);
    const fundBalance = parseFloat(money - chocPrice*chocAmount).toFixed(2);
    alert (`Можна купити ${chocAmount} шоколадок та залишиться ${fundBalance} решти`);
}
function task5(){
    const numb1 = prompt("Ввести трьохзначне число");
    const unit3 = numb1%10;
    const unit2 = parseInt((numb1 / 10)%10);
    const unit1 = parseInt(numb1/100);
    const numbNew = unit3*100 + unit2*10 + unit1;
    alert (`Число ${numb1} у зворотному порядку буде ${numbNew}`);
}
function task6(){
    const sumDeposit = prompt ("Сума вкладу");
    const percent = 5;
    const period = 2;
    const sumPercent = parseFloat(sumDeposit*(percent/100)/12*period).toFixed(2);
    alert (`З суми депозиту в ${sumDeposit} під ${percent}% річних терміном на ${period} місяці, сума нарахованих відсотків складе ${sumPercent}`);
}