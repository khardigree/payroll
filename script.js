// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.getElementById("add-employees-btn");

const employees = [];

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let addingEmployees = true;

  while (addingEmployees) {
    const continueAdding = confirm("Do you want to add an employee?");
    if (!continueAdding) {
      addingEmployees = false;
    } else {
      const firstName = prompt("First name:");
      const lastName = prompt("Last name:");
      let salary = prompt("Salary:");
      
// Code to make sure a valid input has been entered
      while (isNaN(salary) || salary.trim() === "") {
        alert("Please enter a valid salary.");
        salary = prompt("Enter employee's salary:");
      }

      salary = parseFloat(salary);

      employees.push({
        firstName: firstName,
        lastName: lastName,
        salary: salary,
      });
    }
  }
  return employees;
};

function gatherEmployeeData() {
  const collectedEmployees = collectEmployees();
  console.log(collectedEmployees);
}

document
  .getElementById("add-employees-btn")
  .addEventListener("click", gatherEmployeeData);

const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;

  employeesArray.forEach((employee) => {
    totalSalary += employee.salary;
  });

  const numberOfEmployees = employeesArray.length;
  const averageSalary = totalSalary / numberOfEmployees;

  console.log(
    `Average Salary: $${averageSalary.toFixed(
      2
    )} for ${numberOfEmployees} employees`
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(
    `Congrats, ${randomEmployee.firstName} ${randomEmployee.lastName}. You won our raffle!`
  );
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