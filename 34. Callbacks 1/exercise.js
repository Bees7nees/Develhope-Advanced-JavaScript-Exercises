function printAsyncName(callbackfunction, name) {
    setTimeout(() => {
      callbackfunction()
    }, 1000);
    setTimeout(() => {
        console.log(name);
    }, 2000);
}
function callback() {
    console.log("Hello");
}

printAsyncName(callback, "Iñigo Montoya");