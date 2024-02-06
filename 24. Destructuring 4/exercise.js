const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, firstName:name, lastName:surname, age:old } = person;
console.log(id, name, surname, old);

// Gracias por el feedback, necesitaba leer con más detenimiento
// el enlace de referencia que se puso en la plataforma :)