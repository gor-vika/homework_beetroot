"use strict";

var car = {
  Manufacturer: 'Ford',
  Model: 'Fusion',
  Year: 2014,
  Speed: 120,
  FuelTank: 60,
  FuelConsamption: 10,
  getFullInfo: function showInfo() {
    var result = '<ul>';

    for (var key in this) {
      if (typeof this[key] !== 'function') {
        result += "<li class=\"car_list\"><b>".concat(key, ": </b><span class=\"btn btn-info\">").concat(this[key], "</span></li>");
      }
    }

    result += '</ul>';
    return result;
  }
};

function showResult(resultValue, idValue) {
  var result = resultValue;
  return document.getElementById(idValue).innerHTML = result;
}

function getData(idValue) {
  return document.getElementById(idValue).valueAsNumber;
}

function task1() {
  var fullInfo = car.getFullInfo();
  showResult(fullInfo, 'car_info');
}

function getTime() {
  var dist = getData("distance");
  var breakDuration = 1;
  var durationOneTrip = 4;
  var speed = car.Speed;
  var fuelConsamp = car.FuelConsamption;
  result = '';

  if (isNaN(dist)) {
    document.getElementById('car_error').innerHTML = "<span style=\"color:red\">\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  } else if (dist <= 0) {
    document.getElementById('car_error').innerHTML = "<span style=\"color:red\">\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0431\u0456\u043B\u044C\u0448\u0435 \u043D\u0443\u043B\u044F</span>";
    return;
  }

  calcResult = calcTimeAndFuel(dist, breakDuration, durationOneTrip, speed, fuelConsamp);
  result = "<div class=\"btn btn-info\">\u0429\u043E\u0431 \u043F\u043E\u0434\u043E\u043B\u0430\u0442\u0438 ".concat(dist, " \u043A\u043C \u0412\u0430\u043C \u0437\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u044C\u0441\u044F ").concat(calcResult.generalTime, " \u0433\u043E\u0434\u0438\u043D \u0442\u0430 ").concat(calcResult.generalFuel, " \u043B\u0456\u0442\u0440\u0456\u0432 \u043F\u0430\u043B\u044C\u043D\u043E\u0433\u043E </div>");
  showResult(result, 'car_info_task2');
}

function calcTimeAndFuel(distance, breakDuration, durationOneTripWithoutBreaks, speed, fuelConsamption) {
  var travelTime = 0;
  var timeWithoutBreaks = distance / speed;
  var quantityBreaks = Math.floor(timeWithoutBreaks / (breakDuration + durationOneTripWithoutBreaks));
  var timeOnBreaks = quantityBreaks * breakDuration;
  var generalTime = parseFloat(timeWithoutBreaks + timeOnBreaks).toFixed(1);
  var generalFuel = parseFloat(distance * fuelConsamption / 100).toFixed(2);
  return {
    generalTime: generalTime,
    generalFuel: generalFuel
  };
}

var time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  getFullInfo: function showInfo() {
    var result = "".concat(addZero(this.hours), ":").concat(addZero(this.minutes), ":").concat(addZero(this.seconds));
    return result;
  },
  time2Sec: function time2sec() {
    return this.hours * 3600 + this.minutes * 60 + this.seconds;
  },
  sec2Time: function sec2Time(sec) {
    return "".concat(addZero(Math.floor(sec / 3600 % 24)), ":").concat(addZero(Math.floor(sec % 3600 / 60)), ":").concat(addZero(sec % 60));
  }
};

function task2_1() {
  time.hours = getData('hours');
  time.minutes = getData('minutes');
  time.seconds = getData('seconds');

  if (isNaN(time.hours) || time.hours < 0 || time.hours > 24) {
    document.getElementById('hours_error').innerHTML = "<span style=\"color:red\">\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  if (isNaN(time.minutes) || time.minutes < 0 || time.minutes > 60) {
    document.getElementById('minutes_error').innerHTML = "<span style=\"color:red\">\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  if (isNaN(time.seconds) || time.seconds < 0 || time.seconds > 60) {
    document.getElementById('seconds_error').innerHTML = "<span style=\"color:red\">\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  var fullTime = time.getFullInfo();
  showResult(fullTime, 'time_info');
}

function task2_2() {
  var newSeconds = parseInt(getData('qtySec'));
  var newTimeSec = 0;
  var result = '';

  if (isNaN(newSeconds) || newSeconds < 0) {
    document.getElementById('new_sec_error').innerHTML = "<span style=\"color:red\">\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
  } else {
    newTimeSec = time.time2Sec() + newSeconds;
    result = "\u041D\u043E\u0432\u0438\u0439 \u0447\u0430\u0441 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ".concat(time.sec2Time(newTimeSec));
    showResult(result, 'time_info');
  }
}

function task2_3() {
  var newMinutes = parseInt(getData('qtyMin'));
  var newTimeMin = 0;
  var result = '';

  if (isNaN(newMinutes) || newMinutes < 0) {
    document.getElementById('new_min_error').innerHTML = "<span style=\"color:red\">\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
  } else {
    newTimeMin = time.time2Sec() + newMinutes * 60;
    result = "\u041D\u043E\u0432\u0438\u0439 \u0447\u0430\u0441 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ".concat(time.sec2Time(newTimeMin));
    showResult(result, 'time_info');
  }
}

function task2_4() {
  var newHours = parseInt(getData('qtyHours'));
  var newTimeHour = 0;
  var result = '';

  if (isNaN(newHours) || newHours < 0) {
    document.getElementById('new_hour_error').innerHTML = "<span style=\"color:red\">\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
  } else {
    newTimeHour = time.time2Sec() + newHours * 3600;
    result = "\u041D\u043E\u0432\u0438\u0439 \u0447\u0430\u0441 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ".concat(time.sec2Time(newTimeHour));
    showResult(result, 'time_info');
  }
}

var addZero = function addZero(n) {
  return n < 10 ? '0' + n : n;
};

var num1 = {
  x: 0,
  y: 0
};
var num2 = {
  x: 0,
  y: 0
};
var actions = {
  sum: function sumNumbers(number1, number2) {
    var numerator = number1.x * number2.y + number2.x * number1.y;
    var denominator = number1.y * number2.y;
    var gcd = findGCD(numerator, denominator);
    return {
      numerator: numerator / gcd,
      denominator: denominator / gcd
    };
  },
  sub: function subtractNumbers(number1, number2) {
    var numerator = number1.x * number2.y - number2.x * number1.y;
    var denominator = number1.y * number2.y;
    var gcd = findGCD(numerator, denominator);
    return {
      numerator: numerator / gcd,
      denominator: denominator / gcd
    };
  },
  multi: function multiplyNumbers(number1, number2) {
    var numerator = number1.x * number2.x;
    var denominator = number1.y * number2.y;
    var gcd = findGCD(numerator, denominator);
    return {
      numerator: numerator / gcd,
      denominator: denominator / gcd
    };
  },
  div: function divisionNumbers(number1, number2) {
    var numerator = number1.x * number2.y;
    var denominator = number1.y * number2.x;
    var gcd = findGCD(numerator, denominator);
    return {
      numerator: numerator / gcd,
      denominator: denominator / gcd
    };
  }
};

function getValueNumbers() {
  num1.x = parseInt(getData('numerator_first'));
  num1.y = parseInt(getData('denominator_first'));
  num2.x = parseInt(getData('numerator_second'));
  num2.y = parseInt(getData('denominator_second'));
}

function task3_1() {
  getValueNumbers();

  if (isNaN(num1.x) || isNaN(num1.y) || isNaN(num2.x) || isNaN(num2.y) || num1.y === 0 || num2.y === 0) {
    document.getElementById('numbers_info').innerHTML = "<span style=\"color:red\">\u0412\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  var result = actions.sum(num1, num2);
  document.getElementById('numbers_info').innerHTML = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(result.numerator, "/").concat(result.denominator);
}

function task3_2() {
  getValueNumbers();

  if (isNaN(num1.x) || isNaN(num1.y) || isNaN(num2.x) || isNaN(num2.y) || num1.y === 0 || num2.y === 0) {
    document.getElementById('numbers_info').innerHTML = "<span style=\"color:red\">\u0412\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  var result = actions.sub(num1, num2);
  document.getElementById('numbers_info').innerHTML = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(result.numerator, "/").concat(result.denominator);
}

function task3_3() {
  getValueNumbers();

  if (isNaN(num1.x) || isNaN(num1.y) || isNaN(num2.x) || isNaN(num2.y) || num1.y === 0 || num2.y === 0) {
    document.getElementById('numbers_info').innerHTML = "<span style=\"color:red\">\u0412\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  var result = actions.multi(num1, num2);
  document.getElementById('numbers_info').innerHTML = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(result.numerator, "/").concat(result.denominator);
}

function task3_4() {
  getValueNumbers();

  if (isNaN(num1.x) || isNaN(num1.y) || isNaN(num2.x) || isNaN(num2.y) || num1.y === 0 || num2.y === 0) {
    document.getElementById('numbers_info').innerHTML = "<span style=\"color:red\">\u0412\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</span>";
    return;
  }

  var result = actions.div(num1, num2);
  document.getElementById('numbers_info').innerHTML = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(result.numerator, "/").concat(result.denominator);
}

function findGCD(a, b) {
  // Поки b не дорівнює 0, застосовуємо операцію ділення з залишком
  while (b !== 0) {
    var temp = b;
    b = a % b;
    a = temp;
  } // Найбільший спільний дільник знаходиться в a


  return a;
}