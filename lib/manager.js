// Import Top Level Class as a Module 
const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email); 
        
        this.office = office; 
    }
}


module.exports = Manager;




// Refer to How we Will Use the Sub Class 

