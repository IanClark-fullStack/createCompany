const fs = require('fs');
const inquirer = require('inquirer');
const generateContent = require('./src/generatePage.js');

// Require sub classes 
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');


// Main Menu Array 
const menuChoices = ['Add an Engineer', 'Add an Intern', 'Or finish building the team'];

let teamMember;

// Final Team Members Array 
let finalTeam = [];


const githubPlease = {
    type: 'input',
    name: 'gitUser',
    message: 'GitHUBBBB',
};
const schoolPlease = {
    type: 'input',
    name: 'eduName',
    message: 'schooool',
};

// RED
// console.log(`\x1b[31m${mainMenu}\x1b[0m`)

// Global Variables - Present User with the Questions 
let employeeQuestions = [
    {
        type: 'input', 
        name: 'welcome', 
        message: 'Welcome to the easiest way to create a company directory. When you have finished answering the following prompts, your team members info will be saved to a new web page and accesible at any time.'
    },
    {
        type: 'input',
        name: 'employeeName',
        message: 'Please enter your team managers name',
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'Enter the employee ID for this manager',
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Enter the preferred email address for this manager',
    },
    {
        type: 'input',
        name: 'mgmtOffice',
        message: 'Enter the office # associated with this manager',
    },
    // Return back to Options Questions
    {
        type: 'list',
        name: 'menuOption',
        choices: menuChoices,
        message: 'What would you like to do next?',
        default: menuChoices[2],
    },
]


// After the init function, 
const mutateQuestions = (data) => {
   // If the user selects an option other "finish build", 
    if (data.menuOption === 'Add an Engineer') { 
        employeeQuestions.splice(3, 1, githubPlease); // Replace the previous role-specific question 
        inquirer.prompt(employeeQuestions) // send the user back to the top of the prompt
        .then((data) => {
            let teamMember = new Engineer(data.employeeName, data.employeeID, data.employeeEmail, data.gitUser);
            finalTeam.push(teamMember);
            // Evaluate the Main Menu Response Again
            mutateQuestions(data);
        })
        
    } 
    else if (data.menuOption === 'Add an Intern') { 
        employeeQuestions.splice(3, 1, schoolPlease);
        inquirer.prompt(employeeQuestions)
        .then((data) => {
            let teamMember = new Intern(data.employeeName, data.employeeID, data.employeeEmail, data.eduName);
            finalTeam.push(teamMember);
            // Evaluate the Main Menu Response Again
            mutateQuestions(data);
        })
    } else { // If we're not adding a new team member, exit the function with the built-up array
       return generateContent(finalTeam);
    }
     
}


// Define Initialization function 
const init = () => {
    inquirer.prompt(employeeQuestions)

       // Grab & Evaluate the Answer Data  
    .then((firstAnswers) => {
        employeeQuestions.shift()

         // The first promise, returns data specific to the manager role. 
        let teamMember = new Manager(firstAnswers.employeeName, firstAnswers.employeeID, firstAnswers.employeeEmail, firstAnswers.mgmtOffice);
        // After constructing the manager, push it to our team array. 
        finalTeam.push(teamMember);


        mutateQuestions(firstAnswers);
        
    })
}

// Call Initialization function 
init();

