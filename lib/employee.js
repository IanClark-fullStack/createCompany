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

        let changeContent = '';
        if (this.school) {
            changeContent = this.school;
        } else if (this.officeNumber) {
            changeContent = this.officeNumber; 
        } else { changeContent = `<a href="github.com/${this.github}" target="blank">${this.github}</a>`; }
        // const schoolName = `${this.getSchool()}`;
        // const office = `${this.getOfficeNumber()}`
        const employeeSection = `
        <section class="container flex justify-between bg-blue-400 p-3 text-white" style="font-family: source-code-pro, monospace;">
            <div class="title">
                    <h6 class="employee-role text-md tracking-widest font-extralight">${this.constructor.name.toUpperCase()}</h6>
                    <h4 class="employee-name text-5xl" style="font-family: proxima-nova, sans-serif;">${this.name}</h4>
            </div>
            <div class="info">
                <ul class="employee-info flex justify-content text-right">
                    <li class="employee-num">employee ${this.id.toLowerCase()}</li>
                    <li class="employee-specific">${changeContent.toLowerCase()}</li>
                </ul>
                <a class="employee-contact" href="mailto:${this.email}">${this.email.toLowerCase()}</a>
            </div>
        </section>`
        return employeeSection;
    }
    

}
module.exports = Employee;