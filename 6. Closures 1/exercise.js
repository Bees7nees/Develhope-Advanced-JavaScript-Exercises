let printName = function () {
    let helloName = "Hello Jonnas Brothers! 8)";
    let inner = function () {
        return helloName;
    }
    return inner;
}

console.log(printName()());