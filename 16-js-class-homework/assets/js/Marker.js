class Marker {
    constructor(color,interest){
        this.color = color;
        this.interest = interest;
    }
    writeMarker(text){
        let row =`<p><span style="background-color: ${this.color};">`
        for(let i = 0; i<text.length; i++){
            row += text[i]
            if(text[i]!==' '){
                this.interest -=0.5;
            }
            if(this.interest === 0){
                row +='</span>'

            }
        }
        if(this.interest<0){
            this.interest = 0;
        }
        row +='</p>'
        document.getElementById('text').innerHTML = row;
        document.getElementById('elVidsotcu').valueAsNumber = this.interest;
    }
    refill(ref){
        if (ref > 0) {
            this.interest += ref;
            if (this.interest > 100) {
                this.interest = 100;
            }
            document.getElementById('elVidsotcu').valueAsNumber = this.interest
        } else {
            toast.error('Введіть коректну кількість чорнил для дозаправки');
        }

    }
}