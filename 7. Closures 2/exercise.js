let printName = function () {
    let helloName = "Hello Jonnas Brothers! 8)";
    let inner = function () {
        setTimeout(function () {
            console.log(helloName);
        }, 1000);
    }
    return inner;
}

console.log(printName()());