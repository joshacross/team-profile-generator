const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class App {
    constructor() {
    }

    initializeApp () {
        this.Employee.push(new Manager('managerName', 'managerId', 'managerBio', 'managerEmail', 'officeNumber', 'github'));
        this.Employee.push(new Engineer('engineerName', 'engineerId', 'engineerBio', 'engineerEmail', 'github'));
        this.Employee.push(new Intern('internName', 'internId', 'internEmail', 'internRole'));

        this.currentEmployee = this.Employee

        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'teamName',
                    message: 'What is the name of your Software Engineering Team? (Required)',
                    validate: teamInput => {
                        if (teamInput) {
                        return true;
                        } else {
                        console.log('You must enter a title for your team');
                        return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'managerName',
                    message: 'What is the first and last name of the manager of this team? (Required)',
                    validate: managerInput => {
                        if (managerInput) {
                        return true;
                        } else {
                        console.log('Please enter an employee name...');
                        return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'managerBio',
                    message: 'Enter Manager Bio (skip by entering null value) (Required)',
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: 'What is the managers ID number? (required)',
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
                    name: 'managerEmail',
                    message: 'What is the managers email address? (Required)',
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
    }}}

    module.exports = App;