class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = Math.floor(Math.random() * 9 + 1000);
        this.email = email;
        this.role = role;
    }
    getName();
    getId();
    getEmail();
    getRole();
}

module.exports = Employee;

/* 
The first class is an Employee parent class with the following properties and methods
Name
Id
email
getName()
getId()
getEmail()
getRole() Returns employee

*/