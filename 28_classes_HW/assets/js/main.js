import Circle from "../classes/Circle.js";

document.addEventListener('DOMContentLoaded', function(){
    const radiusValue = document.getElementById('radiusValue');
    const resultContainer = document.getElementById('results');
    let result = '';

    radiusValue.addEventListener("input", function() {
        const circle1 = new Circle(parseFloat(radiusValue.value));

        document.getElementById('getRadius').onclick = function(){
        const radius = circle1.radius;
        result = `Радіус = ${radius}`;
        resultContainer.innerHTML = result;
        };

        document.getElementById('changeRadius').onclick = function(){

            const newRadius = prompt("Введіть нове значення радіуса:");
            if (newRadius !== null) {
                circle1.radius = parseFloat(newRadius);
            const radius = circle1.radius;
            result = `Радіус = ${radius}`;
            resultContainer.innerHTML = result;
            }
        };

        document.getElementById('getDiametr').onclick = function(){
            const diametr = circle1.diameter;
            result = `Діаметр = ${diametr}`;
            resultContainer.innerHTML = result;
        };

        document.getElementById('getArea').onclick = function(){
            const area = circle1.calculateArea();
            result = `Площа = ${area}`;
            resultContainer.innerHTML = result;
        };

        document.getElementById('getLength').onclick = function(){
            const length = circle1.calculateLength();
            result = `Довжина = ${length}`;
            resultContainer.innerHTML = result;
        };
    });
})



