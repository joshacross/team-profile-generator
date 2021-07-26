/* 
The first class is an Employee parent class with the following properties and methods
Name
Id
email
getName()
getId()
getEmail()
getRole() Returns employee

Intern: 
1.) school
2.) getSchool()
3.) getRole() - Overridden to return 'Intern'

consider adding validation to ensure that user input provided is in proper expected format



*/

Employee = require('./Employee');

class Intern extends Employee {
    constructor (school, creditHours, role) {
        this.school = school
        this.creditHours = creditHours;
        this.role = 'Intern';
    }

    getSchool () {
        return(`${this.school}`)
    }

    getCreditHours () {
        return(`${this.creditHours}`)
    }

    getRole () {
        return(`${this.role}`);
    }
}

module.exports = Intern;