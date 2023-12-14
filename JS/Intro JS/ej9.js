//Try to predict the output of the comparisons before printing them in the console

const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

console.log(name == lastname)                        //F
console.log(age <= average)                          //T
console.log(firstYearCompleted == lastname)          //F
console.log(yearsCompleted == firstYearCompleted)    //F [Mal, es True]
console.log(firstYearCompleted === yearsCompleted)   //F
console.log(examsCompleted < age)                    //T
console.log(isGraduated > yearsCompleted)            //F

