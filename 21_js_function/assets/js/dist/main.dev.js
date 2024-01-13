"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function howManyArguments() {
  return arguments.length;
}

function task1() {
  var param = document.getElementById('arguments').value;
  var array = param.split(',');
  result = howManyArguments.apply(void 0, _toConsumableArray(array));
  document.getElementById('argumentsHelp').innerHTML = result;
}

function task2() {
  var num1 = document.getElementById('first_number').valueAsNumber;
  var num2 = document.getElementById('second_number').valueAsNumber;
  var result = 0;
  checkData(num1);
  checkData(num2);

  if (compareNumbers(num1, num2) > 0) {
    result = 1;
  } else if (compareNumbers(num1, num2) < 0) {
    result = -1;
  } else if (compareNumbers(num1, num2) === 0) {
    result = 0;
  }

  document.getElementById('twoNumbersHelp').innerHTML = result; // ось тут в разі не введення даних відображається і 0, і повідомлення про помилку???
}

function checkData(variable) {
  if (isNaN(variable)) {
    document.getElementById('twoNumbersError').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }
}

var compareNumbers = function compareNumbers(x, y) {
  return x - y;
};

function task3() {
  var num = document.getElementById('factorial_number').valueAsNumber;

  if (isNaN(num)) {
    document.getElementById('factorial_numberHelp').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  textResult = numFactorial(num);
  document.getElementById('factorial_numberHelp').innerHTML = textResult;
}

function numFactorial(x) {
  var result = 1;

  for (var i = 1; i <= x; i++) {
    result *= i;
  }

  return result;
}

function task4() {
  var num1 = document.getElementById('number_100').valueAsNumber;
  var num2 = document.getElementById('number_10').valueAsNumber;
  var num3 = document.getElementById('number_1').valueAsNumber;
  var result = 0;

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    document.getElementById('numberHundredHelp').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  result = hundredNumber(num1, num2, num3);
  document.getElementById('numberHundredHelp').innerHTML = result;
}

var hundredNumber = function hundredNumber(x, y, j) {
  return x * 100 + y * 10 + j;
};

function task5() {
  var num1 = document.getElementById('length_rectangle').valueAsNumber;
  var num2 = document.getElementById('width_rectangle').valueAsNumber;
  var result = 0;

  if (isNaN(num1)) {
    document.getElementById('rectangleHelp').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  if (!isNaN(num1) && !isNaN(num2)) {
    result = square(num1, num2);
  }

  if (!isNaN(num1) && isNaN(num2)) {
    result = square(num1);
  }

  document.getElementById('rectangleHelp').innerHTML = result;
}

var square = function square(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
  return x * y;
};

function task6() {
  var num = document.getElementById('perfect_number').valueAsNumber;
  var result = '';

  if (isNaN(num) || num < 3) {
    document.getElementById('perfect_numberHelp').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  if (perfectNumber(num) === true) {
    result = "\u0427\u0438\u0441\u043B\u043E ".concat(num, " \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0435");
  }

  ;

  if (perfectNumber(num) === false) {
    result = "\u0427\u0438\u0441\u043B\u043E ".concat(num, " \u043D\u0435 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0435");
  }

  ;
  document.getElementById('perfect_numberHelp').innerHTML = result;
}

function perfectNumber(x) {
  var sum = 0;

  for (var i = 1; i < x; i++) {
    if (x % i === 0) {
      sum += i;
    }
  }

  if (sum === x) {
    return true;
  } else return false;
}

function task7() {
  var minNum = document.getElementById('perfect_number_min').valueAsNumber;
  var maxNum = document.getElementById('perfect_number_max').valueAsNumber;
  var result = '';
  var num = 0;

  if (isNaN(minNum) || isNaN(maxNum) || minNum === 0 || maxNum === 0) {
    document.getElementById('perfect_number_minMaxHelp').innerHTML = "<span style=\"color:red\">\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  if (minNum < maxNum) {
    for (var i = minNum; i <= maxNum; i++) {
      if (perfectNumber(i) === true) {
        result += i + ', ';
      }
    }
  }

  if (minNum > maxNum) {
    for (var _i = maxNum; _i <= minNum; _i++) {
      if (perfectNumber(_i) === true) {
        result += _i + ', ';
      }
    }
  }

  if (minNum === maxNum) {
    if (perfectNumber(minNum) === true) {
      result = 'Число досконале';
    } else result = 'Число не досконале';
  }

  document.getElementById('perfect_number_minMaxHelp').innerHTML = result;
}