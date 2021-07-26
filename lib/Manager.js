const Employee = require('./Employee');

class Manager extends Employee {
    constructor (officeNumber, role) {
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getOfficeNumber() {
        return (`Manager's Office Number: ${officeNumber}`);
    }

    getRole() {
        return (`${thisRole}`);
    }
}

module.exports = Manager;