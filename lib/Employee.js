const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Employee {
    constructor (employeeName = '', employeeId = Number, employeeEmail = '', employeeRole = '') {
        this.name = employeeName;
        this.id = employeeId;
        this.email = employeeEmail;
        this.role = employeeRole;
        this.employee;
    }   }

module.exports = Employee;