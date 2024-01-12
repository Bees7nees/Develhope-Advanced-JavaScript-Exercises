const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon"

/*
Since person2 has another object as a value, person2
becomes a constant immitation. It is important to
mention that it goes BOTH ways. Changes done to 
person1 will affect person2's properties and values,
and viceversa.
*/

console.log(person1);
console.log(person2);
