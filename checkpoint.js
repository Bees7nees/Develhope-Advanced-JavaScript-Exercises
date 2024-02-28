// Ejercicio 1

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arraysum (array) {
    const parArray = array.filter(value => { return value % 2 == 0 });
    let result = 0;
    for (let i = 0; i < parArray.length; i++) {
        result += parArray[i]
    };
    console.log(result)
    return result;
}

// console.log(arraysum(numeros));

// Ejercicio 2

const people = [
    { name: "Mario", age: 32 },
    { name: "Luigi", age: 28 },
    { name: "Peach", age: 29 },
    { name: "Toad", age: 35 },
];
  
function getOlder(array) {
    let theOldest = array[0];
    array.forEach((element) => {
        if (theOldest.age < element.age) {
            theOldest = element;
        }
    });
    return theOldest;
}

// console.log(getOlder(people))

// Ejercicio 3

// 'https://api.github.com/users/' + usuario + '/repos'


async function fetchRepos (id) {
    const arr = await fetch(`https://api.github.com/users/${id}/repos`)
    const response = await arr.json()
    let reposNameList = []
    for (let i = 0; i < response.length; i++) {
        reposNameList.push(response[i].name);
    }
    return reposNameList;
}

fetchRepos("Bees7nees")
    .then (data => console.log(data))
    .catch (() => console.error("Error"))