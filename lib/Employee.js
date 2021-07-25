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

module.exports = Employee;