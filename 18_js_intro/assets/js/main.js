function task1(){
    const userName = prompt("Введи своє ім'я тут");
    alert (`Привіт, ${userName}!`);
}
function task2(){
    const currentYear = new Date().getFullYear();
    const userBirthdayYear = prompt ("Введи рік народження");
    const userAge = currentYear - userBirthdayYear;
    alert (`Тобі повних ${userAge} роки!`);
}
function task3(){
    const squareLength = prompt ("Яка довжина сторони квадрату?")
    const squarePerimeter = squareLength * 4;
    alert (`Периметр квадрату становить ${squarePerimeter}.`)
}
function task4(){
    const circleRadius = prompt ("Який радіус кола?");
    const circleArea = Math.round(Math.pow(circleRadius, 2)*Math.PI);
    alert (`Площа окружності становить ${circleArea}`);
}
function task5(){
    const distance = prompt ("Скільки кілометрів між містами?");
    const time = prompt ("За скільки годин потрібно дістатися?");
    const speed = distance / time;
    alert (`Щоб дістатись вчасно, Вам потрібно їхати зі швидкістю ${speed} км/год`);
}
function task6(){
    const currencyRate = 0.8863;
    const dollarAmount = prompt ("Вкажіть суму доларів США");
    const euroAmount = dollarAmount * currencyRate;
    alert (`${dollarAmount} USD становить ${euroAmount} EUR`);
}