function greeter(name:string){
    return "Hello"+name;
}

let message = greeter('Buğra');

console.log(message);

let number:number
number = 10
number = 10.4

let city : string = "Adana"
city = "Ankara"
city = "İstanbul"

let isTrue : boolean
isTrue = true
isTrue = false

let numbers: number[] = [1,2,3];
let numbers2: Array<number> = [1,2,3];

let array:[number,string] = [2,"Ankara"]

enum Colors {Red=1,Black=2,Blue=3}

let color : Colors = Colors.Red;

let value: any = "Ankara"
value = 2;
value = {};

let value2: void = undefined

function greeter2():void{
    console.log("hello");
}

let age: number;
age = 10

class Musteri{
    
}