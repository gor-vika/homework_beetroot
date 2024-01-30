//Create stoplight
const stoplight = document.createElement ('div');
stoplight.className = 'stoplight';
document.querySelector('.page-wrapper').prepend(stoplight);

//Create btn-switch
const btn = document.createElement('button');
btn.setAttribute('type', "button");
btn.className = "btn btn-primary btn-lg";
btn.innerText = `Перемкнути колір`;
document.querySelector('.page-wrapper').append(btn);

//create colors
const red = document.createElement('div');
red.classList = 'spotlight_color red';
stoplight.append(red);

const yellow = document.createElement('div');
yellow.classList = 'spotlight_color yellow spotlight_off';
stoplight.append(yellow);

const green = document.createElement('div');
green.classList = 'spotlight_color green spotlight_off';
stoplight.append(green);

const colors = document.querySelectorAll('.spotlight_color');
let currentIndex = 0;

btn.onclick = function (){
    colors[currentIndex].classList.add('spotlight_off');
    currentIndex = (currentIndex + 1) % colors.length;
    colors[currentIndex].classList.remove('spotlight_off');
}
