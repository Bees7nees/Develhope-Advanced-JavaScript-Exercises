function printAsyncName(callback, string) {
    setTimeout(callback, 1000);
    setTimeout(() => console.log(string), 2000);
}

function callback() {
    return console.log("Hello");
}

printAsyncName(callback, "Alfredo Motoreto III")