"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Marker =
/*#__PURE__*/
function () {
  function Marker(color, fill) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.fill = fill;
  }

  _createClass(Marker, [{
    key: "write",
    value: function write(text) {
      var rez = '';

      for (var i = 0; i < text.length; i++) {
        if (text[i].trim() !== '' && this.fill > 0) {
          rez += "<span style=\"color: ".concat(this.color, ";\">").concat(text[i], "</span>");
          this.fill -= 0.5;
        } else {
          rez += text[i];
        }
      }

      return rez;
    }
  }]);

  return Marker;
}();

exports["default"] = Marker;