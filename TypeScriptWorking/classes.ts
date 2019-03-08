class Home{
    _roomNumber: number;
    _windowNumber: number;
    _floor: number;
    constructor(roomNumber,windowNumber,floor){
        this._floor = floor;
        this._windowNumber = windowNumber;
        this._roomNumber = roomNumber;
    }
    eatMeal(){
        console.log('TEST');
    }
}

class Person{
    private _name: String;

    get name():String{
        return this.name;
    }
    set name(name:String){
        this._name = name;
    }
    save(){
        console.log('save');
    }
}

class Worker2 extends Person{
    buy(){
        console.log('worker');
    }
}

class Employer extends Person{
    employer(){
        console.log('employer');
    }
}


let worker = new Worker2();
worker.buy();
worker.save();
