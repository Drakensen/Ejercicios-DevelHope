/* Create a function called sortPeopleByAge that returns the people in ascending order by age. */
function sortPeopleByAge (people) {
people.sort( (a, b) => {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    }
    return 0;
});
}

const people = [
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

const sortingByAge = sortPeopleByAge(people)
console.log(people);