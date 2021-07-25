const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class App {
    constructor () {
        this.employee;
        this.id;
        this.role = [];
        this.bio;
        this.email;
        this.officeNumber;
        this.github;
        this.school;
        this.creditHours;
        this.team;
    }

    // method to initialize teamBuilder
    initializeApp () {
        console.log('/////////// WELCOME TO TEAM BUILDER ///////////////')
        inquirer   
            .prompt({
                type: 'text',
                name: 'teamName',
                message: 'What is the name of your Software Engineering team that you are building (Required)?'
            })
            .then(({ teamName }) => {
                this.team = new this.team(teamName);

                this.startBuildingTeam();
            });
    }
    
    startBuildingTeam() {
    if (!this.teamName.Manager) {
        this.inquireTeamManager = false;
    } else {
        this.inquireTeamManager = true;
    }

    console.log(this.teamName + 'Team currently has:');
    //////// getTeamMembers() is in Employee class //////
    console.table(this.teamName.getTeamMembers());

    this.buildTeam();

    }   

    buildTeam() {
        if (!this.inquireTeamManager) {
            inquirer.prompt([
                {
                type:'text',
                name: 'managerName',
                message: 'What is the managers name (Required)?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('You must enter a managers name...');
                            return false;
                        }
                    }
                },
                type: 'number',
                name: 'officeNumber',
                message: 'What is the office phone number? (Required)',
                    validate: phoneInput => {
                        if (phoneInput === num) {
                            return true;
                        } else {
                            console.log('please enter a valid number ie. 5555555555');
                            return false;
                        }
                    }
                ]).then(({ managerName, phoneInput })) => {
                    this.teamName.manager = new this.teamName.manager(managerName);
                    this.teamName.managerName.phone = new this.teamName.managerName.phone(officeNumber);
            }
        }
    console.log('Team ' + this.teamName + ' is managed by ' + this.teamName.managerName + ' and can be reached at ' + this.teamName.managerName.officeNumber);

    /// ask for name, id, bio, email from and add to Employee class
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

        ])
    }
}

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
}}

    module.exports = App;