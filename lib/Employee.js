const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engieer');
const Intern = require('../lib/Intern');

class Employee {
    constructor (employeeName = '', employeeID = Number, employeeEmail = '', employeeRole = '') {
        this.name = employeeName;
        this.id = employeeID;
        this.email = employeeEmail;
        this.role = employeeRole;
        this.employee;
    }

    initializeApp() {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'employeeName',
                    message: 'What is the name of your new employee? (Required)',
                    validate: employeeInput => {
                        if (employeeInput) {
                        return true;
                        } else {
                        console.log('Please enter an employee name...');
                        return false;
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'employeeRole',
                    message: 'What is the role of this new employee? (required)',
                    choices: ['Intern', 'Employee', 'Engineer', 'Manager']
                },
                {
                    type: 'input',
                    name: 'employeeID',
                    message: 'What is the employee ID for this new employee? (required)',
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter a valid ID...');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'employeeEmail',
                    message: 'What is this new employees email? (Required)',
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter a valid Email...');
                            return false;
                        }
                    }
                }
            ])
        }
    }
        

module.exports = Employee;