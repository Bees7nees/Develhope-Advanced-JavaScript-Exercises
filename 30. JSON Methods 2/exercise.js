class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //Edited for testing
  static toJson(person) {
    return JSON.stringify(person);
  }

  //Answer:
  static fromJson(json) {
    return JSON.parse(json);
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);

//Testing
const developer2 = Person.toJson(developer);
console.log(developer2);