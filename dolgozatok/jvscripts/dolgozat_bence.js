class Car{
    constructor(name, color) {
        this.name = name
        this.tank = 70;
        this.color = color
        this.fogyasztas = 5;
        this.utasok = [];

        Object.defineProperty(this, 'kerekszam',{
        value: 4,
        writable: false,
        enumerable: true,
        configurable: true
         });
    if(!this.color){
        this.color="white";
    }
}
printallinfo (){
    console.log(this.name+"rendszama: "+this.name);
    console.log("auto tankja: "+this.tank);
    console.log("auto szine: "+this.color);
    console.log("auto fogyasztas: "+this.fogyasztas);
    console.log("auto kerekek száma: "+car1.kerekszam)
    }

    myCargoing(kilometers){
        let fogyasztas = this.fogyasztas /100;
        if(this.tank<=0){
            console.log("ures a tank")
        }
        while(kilometers >=0){
            kilometers--;
            this.tank = this.tank - fogyasztas;
        }
        let osszeg = Math.round(this.tank * 10) / 100;
        console.log(this.name+" rendszamu kocsi tankja "+osszeg+" liter uzemanyag maradt");


    }
}
let car1 = new Car("wer-532 ");
car1.printallinfo();
car1.myCargoing(50);

