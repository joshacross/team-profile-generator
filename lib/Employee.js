const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engieer');
const Intern = require('../lib/Intern');

class Employee {
    constructor (name = '', id = Number, email = '', role = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.employee;
    }

    initializeApp() {
        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: 'What is your name?'
            })
            .then(({ name }) => {
                this.employee = new Employee(name);
            })
    };
        

module.exports = Employee;

/* 
The first class is an Employee parent class with the following properties and methods
Name
Id
email
getName()
getId()
getEmail()
getRole() Returns employee

*/