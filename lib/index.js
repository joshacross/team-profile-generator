const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const { initializeApp } = Employee

class App {
    constructor() {
        initializeApp();
    }
  
 
  module.exports = App;