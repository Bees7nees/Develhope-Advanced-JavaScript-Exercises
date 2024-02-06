function repeatHello(callbackfunction) {
    setInterval(() => {
        callbackfunction()
    }, 1000);
}

let callback = () => {
    console.log("Hello");
}

function callback2 () {
    console.log("Hello");
}

/* I don't see a reason why the callback function MUST
be an arrow function, besides it being easier to read and write. */

repeatHello(callback2);
