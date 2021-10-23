// Import Top Level Class as a Module 
const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email); 
        
        this.officeNumber = officeNumber; 
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}


module.exports = Manager;




// Refer to How we Will Use the Sub Class 

