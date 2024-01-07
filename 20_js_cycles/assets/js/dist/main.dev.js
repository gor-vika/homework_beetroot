"use strict";

function task1() {
  var userAge = document.getElementById('age').valueAsNumber;
  var rez = '';

  if (isNaN(userAge)) {
    document.getElementById('ageHelp').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  if (userAge < 0) {
    rez = 'некоректне значення';
  } else if (userAge >= 0 && userAge < 12) {
    rez = 'дитина';
  } else if (userAge >= 12 && userAge < 18) {
    rez = 'підліток';
  } else if (userAge >= 18 && userAge < 60) {
    rez = 'дорослий';
  } else if (userAge >= 60 && userAge < 120) {
    rez = 'пенсіонер';
  } else {
    rez = 'Ого!';
  }

  document.getElementById('ageHelp').innerHTML = rez;
}

function task2() {
  var keyNum = document.getElementById('number_symbol').valueAsNumber;
  var rez = '';

  if (isNaN(keyNum)) {
    document.getElementById('symbolHelp').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  switch (keyNum) {
    case 1:
      rez = "".concat(keyNum, " = !");
      break;

    case 2:
      rez = "".concat(keyNum, " = @");
      break;

    case 3:
      rez = "".concat(keyNum, " = #");
      break;

    case 4:
      rez = "".concat(keyNum, " = $");
      break;

    case 5:
      rez = "".concat(keyNum, " = %");
      break;

    case 6:
      rez = "".concat(keyNum, " = ^");
      break;

    case 7:
      rez = "".concat(keyNum, " = &");
      break;

    case 8:
      rez = "".concat(keyNum, " = *");
      break;

    case 9:
      rez = "".concat(keyNum, " = (");
      break;

    case 0:
      rez = "".concat(keyNum, " = )");
      break;

    default:
      rez = 'Некоректне значення!';
      break;
  }

  document.getElementById('symbolHelp').innerHTML = rez;
}

function task3() {
  var num1 = document.getElementById('number_first_range').valueAsNumber;
  var num2 = document.getElementById('number_second_range').valueAsNumber;
  var rez = 0;

  if (isNaN(num1)) {
    document.getElementById('rangeHelp').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  if (isNaN(num2)) {
    document.getElementById('rangeHelp').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  if (num1 <= num2) {
    for (var _i = num1; _i <= num2; _i++) {
      rez += _i;
    }

    rez = "\u0421\u0443\u043C\u0430 \u0447\u0438\u0441\u0435\u043B \u0432 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0456 \u0432\u0456\u0434 ".concat(num1, " \u0434\u043E ").concat(num2, " \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ").concat(rez);
  }

  if (num1 > num2) {
    for (var _i2 = num2; _i2 < num1; _i2++) {
      rez += _i2;
    }

    rez = "\u0421\u0443\u043C\u0430 \u0447\u0438\u0441\u0435\u043B \u0432 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0456 \u0432\u0456\u0434 ".concat(num2, " \u0434\u043E ").concat(num1, " \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ").concat(rez);
  }

  document.getElementById('rangeHelp').innerHTML = rez;
}

function task4() {
  var num1 = document.getElementById('number_first_divisor').valueAsNumber;
  var num2 = document.getElementById('number_second_divisor').valueAsNumber;
  var rez = 0;

  if (isNaN(num1)) {
    document.getElementById('divisorHelp').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  if (isNaN(num2)) {
    document.getElementById('divisorHelp').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  var min = num1 < num2 ? num1 : num2;

  for (var _i3 = 0; _i3 <= min; _i3++) {
    if (num1 % _i3 === 0 && num2 % _i3 === 0) rez = "\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0441\u043F\u0456\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A \u0447\u0438\u0441\u043B\u0430 ".concat(num1, " \u0442\u0430 ").concat(num2, " = ").concat(_i3);
  }

  if (num1 < 0 || num2 < 0) {
    for (var _i4 = 0; _i4 >= min; _i4--) {
      if (num1 % _i4 === 0 && num2 % _i4 === 0) rez = "\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0441\u043F\u0456\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A \u0447\u0438\u0441\u043B\u0430 ".concat(num1, " \u0442\u0430 ").concat(num2, " = ").concat(Math.abs(_i4));
    }
  }

  document.getElementById('divisorHelp').innerHTML = rez;
}

function task5() {
  var number = document.getElementById('number_all_divisors').valueAsNumber;
  var rez = '';

  if (isNaN(number)) {
    document.getElementById('AlldivisorsHelp').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  for (var _i5 = 0; _i5 <= number; _i5++) {
    if (number % _i5 === 0) {
      rez += "<div> ".concat(_i5, " </div>");
    }
  }

  if (number < 0) {
    for (var _i6 = 0; _i6 >= number; _i6--) {
      if (number % _i6 === 0) {
        rez += "<div> ".concat(Math.abs(_i6), " </div>");
      }
    }
  } else if (number === 0) {
    rez = 0;
  }

  document.getElementById('AlldivisorsHelp').innerHTML = rez;
}

function task6() {
  var number = document.getElementById('number_palindrom').valueAsNumber;
  var num5 = number % 10;
  var num4 = Math.trunc(number / 10 % 10);
  var num2 = Math.trunc(number / 1000 % 10);
  var num1 = Math.trunc(number / 10000);
  console.log(num1);
  var rez = '';

  if (isNaN(number)) {
    document.getElementById('palindromHelp').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  if (num1 === num5 && num2 === num4) {
    rez = "\u0447\u0438\u0441\u043B\u043E ".concat(number, " \u0454 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C\u043E\u043C");
  } else {
    rez = "\u0447\u0438\u0441\u043B\u043E ".concat(number, " \u043D\u0435 \u0454 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C\u043E\u043C");
  }

  document.getElementById('palindromHelp').innerHTML = rez;
}

function task7() {
  var amount = parseFloat(document.getElementById('purchase_amount').valueAsNumber).toFixed(2);
  var disc1 = 3;
  var disc2 = 5;
  var disc3 = 7;
  var finishPrice = '';

  if (isNaN(amount)) {
    document.getElementById('purchaseHelp').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  if (amount <= 0) {
    finishPrice = 'Некорректне значення';
  }

  if (amount > 0 && amount < 300) {
    finishPrice = "\u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 ".concat((amount - amount * disc1 / 100).toFixed(2), " \u0437 \u0432\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0437\u043D\u0438\u0436\u043A\u0438 ").concat(disc1, "%");
  } else if (amount >= 300 && amount < 500) {
    finishPrice = "\u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 ".concat((amount - amount * disc2 / 100).toFixed(2), " \u0437 \u0432\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0437\u043D\u0438\u0436\u043A\u0438 ").concat(disc2, "%");
  } else if (amount >= 500) {
    finishPrice = "\u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 ".concat((amount - amount * disc3 / 100).toFixed(2), " \u0437 \u0432\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0437\u043D\u0438\u0436\u043A\u0438 ").concat(disc3, "%");
  }

  document.getElementById('purchaseHelp').innerHTML = finishPrice;
}

function task8() {
  var result = 0;
  var numbersAmount = 10;
  var positiveNumber = 0;
  var negativeNumber = 0;
  var zeroNumber = 0;
  var evenNumber = 0;
  var oddNumber = 0;
  var message = '';

  for (var _i7 = 0; _i7 < numbersAmount; _i7++) {
    result = +prompt("\u0412\u0432\u0435\u0434\u0438 \u0447\u0438\u0441\u043B\u043E");
    console.log(result);

    if (isNaN(result)) {
      document.getElementById('usersNumberHelp').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
      return;
    }

    if (result < 0) {
      negativeNumber += 1;
    } else if (result > 0) {
      positiveNumber += 1;
    } else if (result == 0) {
      zeroNumber += 1;
    } else {
      message = "\u041D\u0435\u0432\u0456\u0440\u043D\u0456 \u0434\u0430\u043D\u0456";
    }

    if (result % 2 === 0) {
      evenNumber += 1;
    } else if (result % 2 !== 0) {
      oddNumber += 1;
    }
  }

  message = "\u0412\u0456\u0434\u0454\u043C\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B - ".concat(negativeNumber, ", \u0414\u043E\u0434\u0430\u0442\u043D\u0456\u0445 \u0447\u0438\u0441\u0435\u043B - ").concat(positiveNumber, ", \u041D\u0443\u043B\u0456\u0432 - ").concat(zeroNumber, ", \u043F\u0430\u0440\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B - ").concat(evenNumber, ", \u043D\u0435\u043F\u0430\u0440\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B - ").concat(oddNumber);
  document.getElementById("usersNumberHelp").innerHTML = message;
}

function task9() {
  var currentDay = new Date().getDay();
  var dayNames = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П`ятниця', 'Субота'];

  while (confirm("".concat(dayNames[currentDay], ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?"))) {
    currentDay = (currentDay + 1) % dayNames.length;
  }
}

function task10() {
  alert('Загадай число від 1 до 100');
  var start = 0;
  var end = 100;
  var target = '';
  var middle = Math.floor(start + (end - start) / 2);

  for (i = 0; i <= end; i++) {
    if (confirm("\u0427\u0438\u0441\u043B\u043E ".concat(middle, "?")) == true) {
      alert("\u0412\u0433\u0430\u0434\u0430\u043B\u0438! \u0427\u0438\u0441\u043B\u043E ".concat(middle));
      return;
    } else if (confirm("\u0427\u0438\u0441\u043B\u043E > ".concat(middle, "?")) == true) {
      start = middle;
      middle = Math.floor(middle + (end - middle) / 2);
      console.log(start);
    } else if (confirm("\u0427\u0438\u0441\u043B\u043E > ".concat(middle, "?")) == false) {
      end = middle;
      middle = Math.floor(start + (middle - start) / 2);
    }
  }
}

function task11() {
  var result = '';

  for (var _i8 = 1; _i8 <= 10; _i8++) {
    result += "<ul>";

    for (var j = 1; j <= 10; j++) {
      result += "<li>".concat(_i8, "*").concat(j, " = ").concat(_i8 * j, "</li>");
    }

    result += "</ul>";
  }

  document.getElementById('multiTableHelp').innerHTML = result;
} // function task12(){
//     const userDate = new Date(document.getElementById(`date_task`).value);
//     let nextDate = new Date();
//     nextDate = `${userDate.setDate(userDate.getDate() + 1)}`;
//     document.getElementById(`dateTaskHelp`).innerHTML = nextDate;
// }