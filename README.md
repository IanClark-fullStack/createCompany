# createCompany
The purpose of this Application 

Create Node application, that can be run using a command line interface, sucsequently prompting the user for information about individuals in their company or organization and dynamiclly produce a web page based on the users answers. 

The resulting web page will display team members info including email addresses, github profiles


Upon running the command line application, input your company / organization team members and relevant data when prompted. 

After answering the questions about your team, check the newly produced index.html file by opening it your browser. 

Key Features 
- Each users email addresses opens your default email client. 

- Each team members GitHub Username has a link associated to their profile tht opens within a new tab

Command Line App Features 

- Prompts for Data associated with the company / organization manager, including name, employee ID, email and office phone number. Ensuring we have the correct postion to be modifying the team. 
- After entering the manager info, they are given the choice of 
    a.) creating an intern team member
    b.) creating an engineer for the team 
    c.) finalize the team build. 
- If a.), complete the prompts for the interns associated data including, name. ID, email and school. Return back to the main menu,
- If b.), complete the prompts for the engineers associated data including name, ID, email and github username, return back to the main menu. 

- If c.) Exit the app and build the HTML 


Technologies Used in Production 
Node 
Inquirer 
jest for TDD

File Structure 
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           



Top Level Object Class Employee includes 
Properties 
- name 
- id 
- email 
And methods 
- getName()
- getId()
-getEmail()
getRole()

Manager includes
- officeNumber (property)
- getRole() - changed output

Engineer includes 
- github username property
- getRole() - changed output

-Intern Includes 
- school property 
- getSchool()
- getRole() - changed output

Include validation for Extra 