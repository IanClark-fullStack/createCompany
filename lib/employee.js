class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Top Level Object Methods\
    getName(){
        return this.name; 
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }

}
module.exports = Employee;