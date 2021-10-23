const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, edu) {
        super(name, id, email);

        this.edu = edu;
    }

}

module.exports = Intern;