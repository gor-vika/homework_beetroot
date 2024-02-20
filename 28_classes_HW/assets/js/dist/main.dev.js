"use strict";

var _Circle = _interopRequireDefault(require("../classes/Circle.js"));

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