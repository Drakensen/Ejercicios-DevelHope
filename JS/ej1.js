/* Create a function named calculateSalary which takes an input parameter, and calculates and returns the corresponding salary. 
You must use the switch switch statement. For each role the corresponding salary is as follows:

ceo => 2200€
manager => 1800€
cto => 1800€
developer => 1500€
default => 1000€
*/

function calculateSalary(role) {
    switch (role) {
        case "ceo":
            return("CEO: 2200€")
            break;
    }

    switch (role) {
        case "manager":
            return("Manager: 1800€")
            break;
    }

    switch (role) {
        case "cto":
            return("CTO: 1800€")
            break;
    }

    switch (role) {
        case "developer":
            return("Developer: 1500€")
            break;
    }

    switch (role) {
        case "other":
            return("Other: 1000€")
            break;
    }
  }
  
  calculateSalary();

  const ceoSalary = calculateSalary('ceo');
  const managerSalary = calculateSalary('manager');
  const ctoSalary = calculateSalary('cto');
  const developerSalary = calculateSalary('developer');
  const otherSalary = calculateSalary('other');

  console.log(ceoSalary);
  console.log(managerSalary);
  console.log(ctoSalary);
  console.log(developerSalary);
  console.log(otherSalary);