const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const writeFile = require('../utils/generate-teamBuilder');

// make a new teamBuild and run buildTeam
class Team {
    constructor () {
        this.Team = [];
        this.teamQuestions = [];
    }


    intializeTeam = () => {
        console.log('/////////// WELCOME TO TEAM BUILDER ///////////////')
        this.mainMenu();
    }

    mainMenu() {

        inquirer
            .prompt(
                {
                    type: 'list',
                    name: 'selection',
                    message: 'What would you like to do?',
                    choices: [
                        'Add Manager',
                        'Add Engineer',
                        'Add Intern',
                        'Build Team',
                        'logout'
                    ]
                })
                .then(({ selection }) => {
                    switch(index) {
                        case 'Add Manager':
                            this.Team.push(new Manager(data.name, data.id, data.))
                            break;
                        case 'Add Engineer':
                            console.log('Add Engineer');
                            this.addEmployee('Engineer');
                            break;
                        case 'addIntern':
                            this.addEmployee('Intern');
                            break;
                        case 'Build Team':
                            console.log('One moment while we assemble your team for you...');
                            if (this.team.length === 0) {
                                console.log('woops, you need to have team members to build a team. Start by adding a team member');
                                this.mainMenu()
                            } else {
                            this.assembleTeam();
                            break;
                            }
                        case 'logout':
                            console.log('Thanks for choosing Team Builder! See You Soon. Goodbye.');
                            process.exit();
                    }
                });
                /////close menu
    }

    addEmployee() {
        addEmployee().then(push(employeeData) => Team.index.length)
        

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
                        {
                        type: 'input',
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
                        }
                        ]).then(({ managerName, phoneInput }) => {
                            this.teamName.manager = new this.teamName.manager(managerName);
                            this.teamName.managerName.phone = new this.teamName.managerName.phone(officeNumber);
                    })
                }
            
                console.log('Team ' + this.teamName + ' is managed by ' + this.teamName.managerName + ' and can be reached at ' + this.teamName.managerName.officeNumber);

                mainMenu();

            }
        

            ///////////////MAIN MENU //////////////////////

            /// ask if they would like to enter another manager, engineer, or add an intern name, id, bio, email from and add to Employee class

            ////End Inquirer
        }
}




    module.exports = Team;