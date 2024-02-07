const number = 5;

promise = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve();
    } else {
        reject();
    }
});

promise
    .then(() => console.log("The number is greater than 10"))
    .catch(() => console.log("The number is less than 10"))

    