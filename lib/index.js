const inquirer = require('inquirer');
const Employee = require('./Employee');
const Monaager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class App {
    constructor() {
        const initializeApp = () => {
            return inquirer
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