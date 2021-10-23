const Employee = require('../lib/Employee.js');

const generatePage = (teamArray) => {
    console.log(teamArray);
    teamArray.forEach((el) => {
        el.paintToPage();
    })
}


 module.exports = generatePage;