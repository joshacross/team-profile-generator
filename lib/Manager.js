/* 
The first class is an Employee parent class with the following properties and methods
Name
Id
email
getName()
getId()
getEmail()
getRole() Returns employee

Manager:
1.) GitHub
2.) getGithub()
3.) getRole()

*/

const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Employee = require('./Employee');

class Manager {
    constructor (managerName = '', managerId = Number, managerBio = '',  managerEmail = '', officeNumber = Number) {
        this.name = managerName;
        this.id = managerId;
        this.bio = managerBio;
        this.email = managerEmail;
        this.telephone = officeNumber;
        this.manager;
    } }

module.exports = Manager;