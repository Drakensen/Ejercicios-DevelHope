/* Create a function called ageAverage that takes in an array of people and returns the average age. */

function calculateAverageAge(persons) {
    let total= 0;
    let count= 0;
    persons.forEach((element) => {
        total+= element.age;
        count++;
    });
    const averageAge = total/count;
    return averageAge;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);