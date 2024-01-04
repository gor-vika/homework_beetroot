"use strict";

function task1() {
  var num1 = 0.1;
  var num2 = 0.2;
  var sum = parseFloat(num1 + num2).toFixed(1);
  alert("0,1 + 0,2 = ".concat(sum));
}

function task2() {
  var string = "1";
  var numb = 2;
  var sum = parseInt(string) + numb; //const sum = +string + numb;

  alert("\"1\" + 2 = ".concat(sum));
}

function task3() {
  var flashDrive = prompt("Який обсяг флешки в Гб?");
  var fileSize = 820;
  var filesAmount = Math.trunc(flashDrive * 1024 / fileSize);
  alert("\u041D\u0430 \u0444\u043B\u0435\u0448\u0446\u0456 ".concat(flashDrive, "\u0413\u0431 \u043F\u043E\u043C\u0456\u0441\u0442\u0438\u0442\u044C\u0441\u044F ").concat(filesAmount, " \u0444\u0430\u0439\u043B\u0456\u0432 820\u041C\u0431"));
}

function task4() {
  var money = prompt("Скільки грошей є в гаманці?");
  var chocPrice = prompt("Скільки коштує одна шоколадка?");
  var chocAmount = Math.trunc(money / chocPrice);
  var fundBalance = parseFloat(money - chocPrice * chocAmount).toFixed(2);
  alert("\u041C\u043E\u0436\u043D\u0430 \u043A\u0443\u043F\u0438\u0442\u0438 ".concat(chocAmount, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A \u0442\u0430 \u0437\u0430\u043B\u0438\u0448\u0438\u0442\u044C\u0441\u044F ").concat(fundBalance, " \u0440\u0435\u0448\u0442\u0438"));
}

function task5() {
  var numb1 = prompt("Ввести трьохзначне число");
  var unit3 = numb1 % 10;
  var unit2 = parseInt(numb1 / 10 % 10);
  var unit1 = parseInt(numb1 / 100);
  var numbNew = unit3 * 100 + unit2 * 10 + unit1;
  alert("\u0427\u0438\u0441\u043B\u043E ".concat(numb1, " \u0443 \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u043E\u043C\u0443 \u043F\u043E\u0440\u044F\u0434\u043A\u0443 \u0431\u0443\u0434\u0435 ").concat(numbNew));
}

function task6() {
  var sumDeposit = prompt("Сума вкладу");
  var percent = 5;
  var period = 2;
  var sumPercent = parseFloat(sumDeposit * (percent / 100) / 12 * period).toFixed(2);
  alert("\u0417 \u0441\u0443\u043C\u0438 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0443 \u0432 ".concat(sumDeposit, " \u043F\u0456\u0434 ").concat(percent, "% \u0440\u0456\u0447\u043D\u0438\u0445 \u0442\u0435\u0440\u043C\u0456\u043D\u043E\u043C \u043D\u0430 ").concat(period, " \u043C\u0456\u0441\u044F\u0446\u0456, \u0441\u0443\u043C\u0430 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432 \u0441\u043A\u043B\u0430\u0434\u0435 ").concat(sumPercent));
}