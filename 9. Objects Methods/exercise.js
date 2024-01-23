const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

// let keys = Object.keys(person);
// console.log(keys);
// let values = Object.values(person);
// console.log(values);
let entries = Object.entries(person);
// console.log(entries);

entries.forEach(element => {
  console.log(element[0] + ": " + element[1]);
});