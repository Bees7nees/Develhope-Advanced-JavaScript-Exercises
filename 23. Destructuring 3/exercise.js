// Destructuring for easier age checking
function isAdult(person) {
  const {id, firstName, lastName, age} = person;
  return age >= 18
}

/*
Si esta es la respuesta, no entiendo por qué sería más sencillo
al haber ahora dos líneas de código dentro de la función en lugar
de una sola :o ?
*/

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));