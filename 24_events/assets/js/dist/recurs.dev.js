"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var array = [1, 2, [3, 4], 5, [6, [7, 8]], 9, 10];

function flat(arr) {
  var res = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = [].concat(_toConsumableArray(res), _toConsumableArray(flat(arr[i])));
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}

console.log(flat(array));