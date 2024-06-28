// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");
addEmployeesBtn.addEventListener("click", function () {
  console.log(employees);
});

// Collect employee data
let employees = [];
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  // Psuedocode:
  // When  user clicks "Add Employees" button, they receive a prompt
  let firstName = prompt("Enter first name");
  // The first prompt with collect first name
  let lastName = prompt("Enter last name");
  // The second prompt will collect last name
  let salary = prompt("Enter salary");
  // The third prompt will collect salary
  salary = Number(salary);
  if (isNaN(salary)) {
    return 0;
  }
  // If the salary is not entered, it defaults to 0

  employees = [
    {
      firstName: firstName,
      lastName: lastName,
      salary: parseInt(salary), //parses string and returns integer
    },
  ];
  // the vales will be stored in an object called employees

  // The user will be asked to confirm wheter or not they want to enter another employee
  let proceed = true;
  while (proceed) {
    let addAnotherEmployee = confirm("Do you want to enter another employee?");
    if (addAnotherEmployee) {
      firstName = prompt("Enter first name");
      lastName = prompt("Enter last name");
      salary = prompt("Enter salary");
      employees.push({
        //adds elements to end of array
        firstName: firstName,
        lastName: lastName,
        salary: parseInt(salary),
      });
    } else {
      proceed = false;
    }
  }
  // If yes, the user will be directed to enter another, if cancel, the confirm window will disappear
  return employees;
  // outputs value of employees object for validation in collect.js
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // check if there are employees in the object
  // if (employees.length > 0) {
  // define variable with number of employees
  // initialize total salary accumulator
  let totalSalary = 0;

  let numberOfEmployees = employeesArray.length;
  // iterate over each employee in the object to sum their salaries
  employeesArray.forEach(function (employee) {
    // assign and add the values to total salary
    totalSalary += employee.salary;
  });

  // find the average salary by dividing total salary by num of employees
  let averageSalary = totalSalary / numberOfEmployees;
  // define new variable which converts average salary to to decimals
  let averageSalaryWithTwoDecimals = averageSalary.toFixed(2);
  // log the result
  console.log(
    `The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalaryWithTwoDecimals}`
  );
  // } else {
  // console.log(`No employees entered`);
  // }
};

const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // check if there are employees in the object
  if (employeesArray.length > 0) {
    // grab random employee
    const numberOfEmployees = employeesArray.length;
    const randomIndex = Math.floor(Math.random() * numberOfEmployees);
    const randomEmployee = employeesArray[randomIndex];

    const employeeFirstName = randomEmployee.firstName;
    const employeeLastName = randomEmployee.lastName;
    // log the outcome
    console.log(
      `Congratulations to ${employeeFirstName} ${employeeLastName}, our random drawing winner!`
    );
  }
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
