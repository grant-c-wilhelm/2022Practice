// You are to create a collection of employee's information for your company. Each employee has the following attributes:

// 1. Name
// 2. Job title
// 3. Salary
// 4. Status

// First, you will create an empty array named `employees`

// Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.

// This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.

// (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

// You will then:

// 1. Instantiate three employees
// 2. Override the status attribute of one of them to either "Part Time" or "Contract"
// 3. Call the `printEmployeeForm` method for each employee
// 4. Put the generated employees into the `employees` array using whichever method you prefer.

// Here's a refresher for the constructor syntax. Attempt writing yours without using the following code:


let employees = []

function Employee(name, title, salary, workStatus) {
    this.name = name
    this.title = title
    this.salary = salary
    this.workStatus = "Full Time"
    this.printInfo = function() { console.log(`${name} is a(n) ${title} with a salary of ${salary} and is currently working ${workStatus}`) }
}

let johnDoe = new Employee("Johns Does", "Supervisor", "10,000", "full time")
johnDoe.workStatus = "Contract"

let maryDoe = new Employee("Mary Joes", "Aid", "10/hr", "Full Time")

let harryDoe = new Employee("Harry Joes", "intern", "15/hr", "Full Time")


employees.push(johnDoe, maryDoe, harryDoe)


let employeeList =  {johnDoe, maryDoe, harryDoe}

console.log(employeeList)