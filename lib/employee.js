class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Top Level Object Methods\
    getName(){
        return `${this.name}`; 
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return `${this.email}`;
    }
    getRole(){
        return this.constructor.name;
    }
    paintToPage() {
        const employeeSection = `
        <main>
            <section class="container">
                <h6 class="employee-role">${this.constructor.name}</h6>
                <h4 class="employee-name">${this.name}</h4>
                <ul class="employee-info">
                    <li class="employee-num">${this.id}</li>
                    <li class="employee-specific">${this.schoolName || this.github || this.officeNumber}</li>
                </ul>
                <a class="employee-contact" href="#">${this.email}</a>
            </section>
        </main>`
        return employeeSection;
    }

}
module.exports = Employee;