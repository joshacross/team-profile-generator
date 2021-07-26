const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const { writeFile } = require('../utils/generate-teamBuilder');
const generatePage = require('../src/page-template');

// make a new teamBuild and run buildTeam
class Team {
    constructor () {
        const team = [];
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
                    name: 'action',
                    type: 'list',
                    message: 'What would you like to do?',
                    choices: [
                        'Add Manager',
                        'Add Engineer',
                        'Add Intern',
                        'Build Team',
                        'logout'
                    ]
                })
                .then((answer) => {
                    switch(answer.action) {
                        case 'AddManager':
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

    addEmployee = (employeeData) => {
        // if there is no data, then set employeeData.employees to equal an empty array
        const teamData = [];
        const employees = [];
        
        if (!teamData.employees) {
            teamData.employees = [];
        }


        // prompt questions: 
        inquirer
            .prompt([
                {
                    type: 'input',
                    name:'name',
                    message: 'What is your Employees Name?'
                },
                {
                    type: 'input',
                    name:'id',
                    message: 'What is your Employees ID?'
                },
                {
                    type: 'input',
                    name:'email',
                    message: 'What is your Employees email'
                },
                {
                    type: 'input',
                    name:'bio',
                    message: 'Enter a short bio of the employee'
                },
                {
                    type: 'input',
                    name:'role',
                    message: 'What is your employees role?'
                },
                {
                    type: 'input',
                    name:'officeNumber',
                    message: 'What is your employees officeNumber?'
                },
                {
                    type: 'input',
                    name:'github',
                    message: 'whatis your employees github username?'
                },
                {
                    type: 'input',
                    name:'school',
                    message: 'What school does your Intern attend'
                },
                {
                    type: 'input',
                    name:'creditHours',
                    message: 'How many credit hours is your Intern working per week?'
                }
            ])
            .then(employeeData => {
                teamData.push(employeeData)
                .then(team).push(teamData);
                return this.mainMenu();
              });
          };

    assembleTeam() {
        generatePage(teamData)
        .then(html => {
                return writeFile(html);
            })
            .catch(err => {
                console.log(err);
            })
    };

}
        

            ///////////////MAIN MENU //////////////////////

            /// ask if they would like to enter another manager, engineer, or add an intern name, id, bio, email from and add to Employee class






module.exports = Team;