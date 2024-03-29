"use strict";

var _Circle = _interopRequireDefault(require("../classes/Circle.js"));

var _Marker = _interopRequireDefault(require("../classes/Marker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var radiusValue = document.getElementById('radiusValue');
  var resultContainer = document.getElementById('results');
  var result = '';
  radiusValue.addEventListener("input", function () {
    var circle1 = new _Circle["default"](parseFloat(radiusValue.value));

    document.getElementById('getRadius').onclick = function () {
      var radius = circle1.radius;
      result = "\u0420\u0430\u0434\u0456\u0443\u0441 = ".concat(radius);
      resultContainer.innerHTML = result;
    };

    document.getElementById('changeRadius').onclick = function () {
      var newRadius = prompt("Введіть нове значення радіуса:");

      if (newRadius !== null) {
        circle1.radius = parseFloat(newRadius);
        var radius = circle1.radius;
        result = "\u0420\u0430\u0434\u0456\u0443\u0441 = ".concat(radius);
        resultContainer.innerHTML = result;
      }
    };

    document.getElementById('getDiametr').onclick = function () {
      var diametr = circle1.diameter;
      result = "\u0414\u0456\u0430\u043C\u0435\u0442\u0440 = ".concat(diametr);
      resultContainer.innerHTML = result;
    };

    document.getElementById('getArea').onclick = function () {
      var area = circle1.calculateArea();
      result = "\u041F\u043B\u043E\u0449\u0430 = ".concat(area);
      resultContainer.innerHTML = result;
    };

    document.getElementById('getLength').onclick = function () {
      var length = circle1.calculateLength();
      result = "\u0414\u043E\u0432\u0436\u0438\u043D\u0430 = ".concat(length);
      resultContainer.innerHTML = result;
    };
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var fillPercentInput = document.getElementById('fill_percent');
  var writeMarkerButton = document.getElementById('writeMarker');
  var userInput = document.getElementById('userInput'); // const resultContainer = document.getElementById('result_marker');

  var marker = new _Marker["default"]('black', fillPercentInput.value);
  userInput.addEventListener('input', function () {
    var highlightedText = marker.write(userInput.value);
    userInput.value = highlightedText;
  }); // Слухач події click для кнопки "Показати маркер"

  writeMarkerButton.addEventListener('click', function () {
    // Оновлення кількості чорнила у маркері на основі значення поля вводу
    marker = new _Marker["default"]('yellow', fillPercentInput.value); // Виклик методу write маркера з поточним текстом поля вводу

    var highlightedText = marker.write(userInput.value); // Відображення виділеного тексту у відповідному контейнері

    userInput.value = highlightedText;
  });
});