class Employee {
    constructor(name, id, bio, email, role) {
        this.name = name;
        this.id = id;
        this.bio = bio;
        this.email = email;
        this.role = 'Employee'
    }

    getName() {
        return (`${this.name}`);
    }

    getId() {
        const id = () => {
            return Math.floor(Math.random() * 10000);
        }
        id();
        return (`${this.id}`);
    }

    getBio() {
        return (`${this.bio}`);
    }

    getEmail() {
        return (`${this.email}`);
    }

    getRole() {
        return (`${this.role}`);
    }
}

module.exports = Employee;
