export default class Circle{
    constructor(radius){
        this._radius = radius
    }

    get radius(){
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    get diameter(){
        return this._radius*2;
    }

    calculateArea(){
        return (Math.PI*Math.pow(this._radius,2)).toFixed(2);
    }

    calculateLength(){
        return (2*Math.PI*this._radius).toFixed(2);
    }
}