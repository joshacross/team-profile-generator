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


    initializeTeam() {
        console.log('/////////// WELCOME TO TEAM BUILDER ///////////////')
        this.mainMenu();
    };

    mainMenu() {
        console.log('//////////////////MAIN MENU //////////////////////')
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
                            this.addEmployee('Manager');
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
        inquirer
            .prompt([
                {
                    type: 'input',
                    name:'name',
                    message: 'What is your Employees Name?'
                }
            ])

            ////End Inquirer////
    }


}
        

            ///////////////MAIN MENU //////////////////////

            /// ask if they would like to enter another manager, engineer, or add an intern name, id, bio, email from and add to Employee class






    module.exports = Team;