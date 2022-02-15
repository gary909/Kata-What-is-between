function between(a, b) {
    let myArr = [];
    for (var i = a; i <= b; i++){
        myArr.push(i);
    }
    return myArr;
}

console.log(between(1, 4)); // Return [1, 2, 3, 4]
console.log(between(-2, 2)); // Return [-2, -1, 0, 1, 2]