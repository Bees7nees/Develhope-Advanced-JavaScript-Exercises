const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// const id = person.id;

let { id, ...personInfo} = person;



// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age
// };


console.log(id, personInfo);

// Just to be sure
console.log(person)
console.log(id);
console.log(personInfo);