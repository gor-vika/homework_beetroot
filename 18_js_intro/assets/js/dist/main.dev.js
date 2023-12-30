"use strict";

function task1() {
  var userName = prompt("Введи своє ім'я тут");
  alert("\u041F\u0440\u0438\u0432\u0456\u0442, ".concat(userName, "!"));
}

function task2() {
  var currentYear = new Date().getFullYear();
  var userBirthdayYear = prompt("Введи рік народження");
  var userAge = currentYear - userBirthdayYear;
  alert("\u0422\u043E\u0431\u0456 \u043F\u043E\u0432\u043D\u0438\u0445 ".concat(userAge, " \u0440\u043E\u043A\u0438!"));
}

function task3() {
  var squareLength = prompt("Яка довжина сторони квадрату?");
  var squarePerimeter = squareLength * 4;
  alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0443 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ".concat(squarePerimeter, "."));
}

function task4() {
  var circleRadius = prompt("Який радіус кола?");
  var circleArea = Math.round(Math.pow(circleRadius, 2) * Math.PI);
  alert("\u041F\u043B\u043E\u0449\u0430 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0456 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ".concat(circleArea));
}

function task5() {
  var distance = prompt("Скільки кілометрів між містами?");
  var time = prompt("За скільки годин потрібно дістатися?");
  var speed = distance / time;
  alert("\u0429\u043E\u0431 \u0434\u0456\u0441\u0442\u0430\u0442\u0438\u0441\u044C \u0432\u0447\u0430\u0441\u043D\u043E, \u0412\u0430\u043C \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0457\u0445\u0430\u0442\u0438 \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ".concat(speed, " \u043A\u043C/\u0433\u043E\u0434"));
}

function task6() {
  var currencyRate = 0.8863;
  var dollarAmount = prompt("Вкажіть суму доларів США");
  var euroAmount = dollarAmount * currencyRate;
  alert("".concat(dollarAmount, " USD \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ").concat(euroAmount, " EUR"));
}