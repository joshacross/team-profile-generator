class Employee {
    constructor(name, id, bio, email, role) {
        this.name = name;
        this.id = Math.floor(Math.random() * 10000);
        this.bio = bio;
        this.email = email;
        this.role = 'Employee'
    }

    getName() {
        return (`name: ${this.name}`);
    }

    getId() {
        return (`ID: ${this.id}`);
    }

    getBio() {
        return (`Bio: ${this.bio}`);
    }

    getEmail() {
        return (`Email: ${this.email}`);
    }

    getRole() {
        return (`${this.role}`);
    }
}

module.exports = Employee;
