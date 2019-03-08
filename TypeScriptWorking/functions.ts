function sum(x,y){
    return x+y;
}

function sum2(x:number, y:number):number{
    return x+y;
}

function sum4(x:number, y:number=4):number{
    return x+y;
}

function sum5(x:number, y?:number):number{
    if(y){
        return x+y;
    }else{
        return x+5;
    }
    
}

function invite(firstGuest,...otherGuest:String[]):String{
    return firstGuest + otherGuest.join(" ");
}
console.log(invite('bugra','taha','hazal'));