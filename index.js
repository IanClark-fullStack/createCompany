const fs = require('fs');
const inquirer = require('inquirer');
// const generatePage = require('./dist/index.html');

// Require sub classes 
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern.js');
const Employee = require('./lib/Employee.js');

// Main Menu Array 
const menuChoices = ['Add an Engineer', 'Add an Intern', 'Or finish building the team'];

// Start HTML 
const beginFile = `<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Team Rolodex</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://use.typekit.net/lga8kfj.css">
        <link rel="stylesheet" href="./styles.css">
        
    </head>
    <body>
        <header><h1 class="text8-xl bg-blue-300 text-white my-4" style="font-family: proxima-nova, sans-serif;">Team Rolodex</h1></header>
        <main class="w-1/2 mx-auto divide-y divide-white">`;
// Final Team Members Array 
let finalTeam = [];

let overwriteFile = [
    {
        type: 'confirm', 
        name: 'overwrite', 
        message: 'Would you like to overwrite the previous team page and start again?',
        default: false
    },
]

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
        message: `\x1b[35mEnter your team Info, starting the manager> Press (Enter) to Continue\x1b[0m`,
    },
    {
        type: 'input',
        name: 'employeeName',
        message: 'What is the members name?',
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'Enter the employee ID',
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Enter their preferred email address',
    },
    {
        type: 'input',
        name: 'mgmtOffice',
        message: 'Enter the office # of the manager',
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
const fireQuestions = () => {
    inquirer.prompt(employeeQuestions)
        // Grab & Evaluate the Answer Data  
    .then((firstAnswers) => {
        employeeQuestions.shift()
            // The first promise, returns data specific to the manager role. 
        let teamManager = new Manager(firstAnswers.employeeName, firstAnswers.employeeID, firstAnswers.employeeEmail, firstAnswers.mgmtOffice);
        // After constructing the manager, push it to our team array. 
        finalTeam.push(teamManager);
        mutateQuestions(firstAnswers);
    })
}

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
        startPage(finalTeam); 
    }
}

const startPage = (arrayOfMembers) => {
    for (let i=0; i < arrayOfMembers.length; i++) {
        // Method to create a section for each employee in the final team array.
        let section = arrayOfMembers[i].paintToPage();
        // Paint each section to the Html page
        fs.appendFile('./dist/index.html', section, function (err) {
            err ? console.error(err) : console.log('Section added!')
        })
    }
    // Function to add the Final Closing tags to the page    
    return finalizePage();
}

const finalizePage = () => {
    const endHtml = `
    </main>        
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src="../src/generatePage.js" async defer></script>
    </body>
    </html>`; 
    fs.appendFile('./dist/index.html', endHtml, function(err) {
        err ? console.error(err) : console.log('End html added!')
    })
}

// Define Initialization function 
const init = () => {
    if (fs.existsSync('./dist/index.html')) {   // Prompt the User if the File Already exists
        inquirer.prompt(overwriteFile)
        .then((overwriteResponse) => {
            if (!overwriteResponse.response) { // If they wish to overwrite the file
                fs.writeFile('./dist/index.html', beginFile, (err) =>
                    err ? console.error(err) : console.log(`\x1b[32mfile created\x1b[0m`)
                )
                fireQuestions();
            } else {
                console.log('To create a new page, please move your index.html to a new folder');
            }
        })
    }
}
// Call Initialization function 
init();

