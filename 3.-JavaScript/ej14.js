/* Create a function called uncompletedNotes that returns only not completed todos. */

function uncompletedNotes(notes) {
  notes.forEach((note) => {
    note.todos = note.todos.filter((todo) => !todo.done);
  });
  
const result = notes.filter((note) => note.todos.length > 0);
return result;
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
    
const print = uncompletedNotes(notes);
console.log(print);