"use strict";

//Create stoplight
var stoplight = document.createElement('div');
stoplight.className = 'stoplight';
document.querySelector('.page-wrapper').prepend(stoplight); //Create btn-switch

var btn = document.createElement('button');
btn.setAttribute('type', "button");
btn.className = "btn btn-primary btn-lg";
btn.innerText = "\u041F\u0435\u0440\u0435\u043C\u043A\u043D\u0443\u0442\u0438 \u043A\u043E\u043B\u0456\u0440";
document.querySelector('.page-wrapper').append(btn); //create colors

var red = document.createElement('div');
red.classList = 'spotlight_color red';
stoplight.append(red);
var yellow = document.createElement('div');
yellow.classList = 'spotlight_color yellow spotlight_off';
stoplight.append(yellow);
var green = document.createElement('div');
green.classList = 'spotlight_color green spotlight_off';
stoplight.append(green);
var colors = document.querySelectorAll('.spotlight_color');
var currentIndex = 0;

btn.onclick = function () {
  colors[currentIndex].classList.add('spotlight_off');
  currentIndex = (currentIndex + 1) % colors.length;
  colors[currentIndex].classList.remove('spotlight_off');
};