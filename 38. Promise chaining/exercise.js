const isLogged = false;

const firstPromise = new Promise((resolve, reject) => {
    if (isLogged === true) {
      resolve(Math.random());
    } else {
      reject(new Error("User is not logged in"));
    }
});

const secondPromise = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve({ name: "Sonic el eriso", age: 666 });
        } else {
            reject(new Error("Number is not greater than 0.5"));
        }
    });
};
  
firstPromise
    .then((firstPromiseResult) => {
        console.log(firstPromiseResult);
        return secondPromise(firstPromiseResult);
    })
    .then((secondPromiseResult) => {
        console.log(secondPromiseResult);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });