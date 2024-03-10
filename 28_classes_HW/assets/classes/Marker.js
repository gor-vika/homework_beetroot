export default class Marker {
    constructor (color, fill){
        this.color = color;
        this.fill = fill
    }

    write(text){
        let rez = '';
        for (let i=0; i<text.length; i++){

            if (text[i].trim() !== '' && this.fill >0){
                rez += `<span style="color: ${this.color};">${text[i]}</span>`;
                this.fill -= 0.5;
                
            } else {
                rez += text[i];
            }
            
        }
        return rez;
    }
}