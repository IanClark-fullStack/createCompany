const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, git) {
        super(name, id, email);

        this.git = git;
    }
    
}

module.exports = Engineer;