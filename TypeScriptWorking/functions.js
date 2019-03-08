function sum(x, y) {
    return x + y;
}
function sum2(x, y) {
    return x + y;
}
function sum4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
function sum5(x, y) {
    if (y) {
        return x + y;
    }
    else {
        return x + 5;
    }
}
function invite() {
    var otherGuest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherGuest[_i] = arguments[_i];
    }
    return otherGuest.join(" ");
}
console.log(invite('bugra', 'taha', 'hazal'));
