const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


// loop over all employees
for (let employee of employees){

  let employeeOutput = processEmployeeBonus(employee)
  console.log(employeeOutput)
}

// create a function that takes in an object and returns an object
/**
 * 
 * @param {*} emloyeeInput employee to process
 * @return {object}  object with bonus information
 */
function processEmployeeBonus(employeeInput){
  employeeInput.bonusPercentage =200;

  if (employeeInput.reviewRating < 2){
    employeeInput.bonusPercentage = 0;
  }

  else if (employeeInput.reviewRating === 3){
    employeeInput.bonusPercentage = 0.04
  }
  else if (employeeInput.reviewRating === 4){
    employeeInput.bonusPercentage = 0.06
  }

  else if (employeeInput.reviewRating === 5){
    employeeInput.bonusPercentage = 0.10
  }

  else{
    // Do nothing
  }

  if (employeeInput.employeeNumber.length === 4){
    employeeInput.bonusPercentage += 0.05;
  }
  
  if(employeeInput.annualSalary > 65000){
    employeeInput.bonusPercentage -=0.01
  }

  if (employeeInput.bonusPercentage < 0){
    employeeInput.bonusPercentage = 0;
  }

  else if (employeeInput.bonusPercentage > 0.13){
    employeeInput.bonusPercentage = 0.13;
  }


  return employeeInput

}
// calculate bonus
// move that calculation into a separate function 
// write some tests




function employeeBonus(employee){
return {
  name: name,
  bonusPercentage: bonusPercentage,
  totalBonus: totalBonus,
  totalCompensation: totalCompensation
}

}

console.log( employees );
