function repeatHello(callbackfunction) {
    let helloInterval = setInterval(() => {
        callbackfunction()
    }, 1000);
    setTimeout(() => {
        clearInterval(helloInterval)
    }, 5000);
}

let callback = () => {
    console.log("Hello");
}

// function callback2 () {
//     console.log("Hello");
// }

repeatHello(callback);
