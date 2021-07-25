
const Employee = require('./Employee');
const Manager = require('./Manager');
const Intern = require('./Intern');
const inquirer = require('inquirer')

class Engineer {
    constructor (engineerName = '', engineerId = Number, engineerBio = '',  engineerEmail = '', github = '') {
        this.name = engineerName;
        this.id = engineerId;
        this.bio = engineerBio;
        this.email = engineerEmail;
        this.github = github;
        this.engineer;
    } }

module.exports = Engineer