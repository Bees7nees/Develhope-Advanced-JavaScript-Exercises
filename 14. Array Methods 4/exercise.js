// function uncompletedNotes(array) {
//   array.forEach(element => {
//     element.todos.filter(element => {
//       if (element.done === false) {
//         console.log(element);
//       };
//     });
//   });
// }

// Después de leer la corrección del profesor, planteo la siguiente solución:

function uncompletedNotes(array) {
  array.forEach(element => {
    element.todos = element.todos.filter(subelement => {
      if (subelement.done === false) {
        return subelement;
      }
    })
  })
  return array;
}

const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

console.log(uncompletedNotes(notes))