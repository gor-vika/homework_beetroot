import Circle from "../classes/Circle.js";
import Marker from "../classes/Marker.js";

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

document.addEventListener('DOMContentLoaded', function(){
    const fillPercentInput = document.getElementById('fill_percent');
    const writeMarkerButton = document.getElementById('writeMarker');
    const userInput = document.getElementById('userInput');
    // const resultContainer = document.getElementById('result_marker');

    let marker = new Marker('black', fillPercentInput.value);

    userInput.addEventListener('input', function(){
        const highlightedText = marker.write(userInput.value);
        userInput.value = highlightedText;
    });

    // Слухач події click для кнопки "Показати маркер"
    writeMarkerButton.addEventListener('click', function() {
        // Оновлення кількості чорнила у маркері на основі значення поля вводу
        marker = new Marker('yellow', fillPercentInput.value);
        // Виклик методу write маркера з поточним текстом поля вводу
        const highlightedText = marker.write(userInput.value);
        // Відображення виділеного тексту у відповідному контейнері
        userInput.value = highlightedText;
    });
    
    
})



