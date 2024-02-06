const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

// With help: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
const json = JSON.stringify(person, ['id', 'age']);

console.log(json); // Should return: { id: 1, age: 25 }