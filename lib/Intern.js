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

class Intern {
    constructor (internName = '', internId = Number, internEmail = '', internRole = '') {
        this.name = internName;
        this.id = internId;
        this.email = internEmail;
        this.school = internSchool;
        this.creditHours = internCreditHours;
    }
}

module.exports = Intern;