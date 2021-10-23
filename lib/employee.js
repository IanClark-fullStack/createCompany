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
        <section class="container flex justify-between" style="font-family: source-code-pro, monospace;">
            <div class="title">
                    <h6 class="employee-role text-md">${this.constructor.name}</h6>
                    <h4 class="employee-name text-5xl" style="font-family: proxima-nova, sans-serif;">${this.name}</h4>
            </div>
            <div class="info">
                <ul class="employee-info">
                    <li class="employee-num">${this.id}</li>
                    <li class="employee-specific">${this.schoolName || `<a href="github.com/${this.github}" target="blank">${this.github}</a>` || this.officeNumber}</li>
                </ul>
                <a class="employee-contact" href="mailto:${this.email}">${this.email}</a>
            </div>
        </section>`
        return employeeSection;
    }
    finalizePage() {
        const endHtml = `
        </main>        
            <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
            <![endif]-->
            <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
            <script src="../src/generatePage.js" async defer></script>
        </body>
        </html>`; 
        return endHtml; 
    }

}
module.exports = Employee;