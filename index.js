var inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
let employeeArr = [];

const managerQuestions = [
    {
        type: 'input',
        message: `Manager's name:`,
        name: 'name'
    },
    {
        type: 'input',
        message: `Manager's Employee ID:`,
        name: 'id'
    },
    {
        type: 'input',
        message: `Manager's Email address:`,
        name: 'email'
    },
    {
        type: 'input',
        message: `Manager's Office number:`,
        name: 'officeNum'
    },
    {
        type: 'rawlist',
        name: 'eif',
        message: 'Select One:',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building'],
        
    }
]
const internQuestions = [
    {
        type: 'input',
        message: `Intern's name:`,
        name: 'name'
    },
    {
        type: 'input',
        message: `Intern's Employee ID:`,
        name: 'id'
    },
    {
        type: 'input',
        message: `Intern's Email address:`,
        name: 'email'
    },
    {
        type: 'input',
        message: `Intern's School:`,
        name: 'school'
    },
    {
        type: 'rawlist',
        name: 'eif',
        message: 'Select One:',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building'],
        
    }
]
const engineerQuestions = [
    {
        type: 'input',
        message: `Engineer's name:`,
        name: 'name'
    },
    {
        type: 'input',
        message: `Engineer's Employee ID:`,
        name: 'id'
    },
    {
        type: 'input',
        message: `Engineer's Email address:`,
        name: 'email'
    },
    {
        type: 'input',
        message: `Engineer's GitHub Username:`,
        name: 'github'
    },
    {
        type: 'rawlist',
        name: 'eif',
        message: 'Select One:',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building'],
        
    }
]

// once index file is started; it begins asking for the manager info first
function init() {
    askForManagerInfo();
}
init();



// depending on the answer from the user; it decides whether to ask for engineer info, intern info or to generate html
function decide(answers) {
    if(answers.eif == 'Add Engineer') {
        askForEngineerInfo();
    } else if (answers.eif == 'Add Intern') {
        askForInternInfo();
    } else {
        createHTML();
        console.log('To see finished HTML file; visit "../dist/rendered.html" and open in default browser');
    }
}

// prompts for the information for a manager
function askForManagerInfo() {
    return inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            // adds new Manager object to the employeeArr array
            employeeArr.push(new Manager(answers.name, answers.id, answers.email, answers.officeNum));
            decide(answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Your console environment is not supported!")
            } else {
                console.log(error)
            }
        })
}

//prompts for the information for an Engineer
function askForEngineerInfo() {
    return inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            // adds new Engineer object to the employeeArr array
            employeeArr.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
            decide(answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Your console environment is not supported!")
            } else {
                console.log(error)
            }
        })
}

// prompts for the information for an Intern
function askForInternInfo() {
    return inquirer
        .prompt(internQuestions)
        .then((answers) => {
            // adds new Intern object to the employeeArr array
            employeeArr.push(new Intern(answers.name, answers.id, answers.email, answers.school));
            decide(answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Your console environment is not supported!")
            } else {
                console.log(error)
            }
        })
}

// generates the html file
function createHTML() {

    let employeeList = '';
    for(let i = 0; i < employeeArr.length; i++){
        if(employeeArr[i].officeNum){
            employeeList += 
                `<li>
                    <div class="top-box">
                        <h2>${employeeArr[i].getName()}</h2>
                        <h3>Manager</h3>
                    </div>

                    <div class="bottom-box">
                        <h4>ID: ${employeeArr[i].getId()}</h4>
                        <h4>Email: <a href = "mailto: ${employeeArr[i].getEmail()}">${employeeArr[i].getEmail()}</a></h4>
                        <h4>Office Number: ${employeeArr[i].officeNum}</h4>
                    </div>
                </li>\n`
        } else if (employeeArr[i].github) {
            employeeList += 
                `<li>
                    <div class="top-box">
                        <h2>${employeeArr[i].getName()}</h2>
                        <h3>Engineer</h3>
                    </div>

                    <div class="bottom-box">
                        <h4>ID: ${employeeArr[i].getId()}</h4>
                        <h4>Email: <a href = "mailto: ${employeeArr[i].getEmail()}">${employeeArr[i].getEmail()}</a></h4>
                        <h4>GitHub Username: <a target="_blank" href="https://github.com/${employeeArr[i].github}">${employeeArr[i].github}</a></h4>
                    </div>
                </li>\n`
        } else {
            employeeList += 
                `<li>
                    <div class="top-box">
                        <h2>${employeeArr[i].getName()}</h2>
                        <h3>Intern</h3>
                    </div>

                    <div class="bottom-box">
                        <h4>ID: ${employeeArr[i].id}</h4>
                        <h4>Email: <a href = "mailto: ${employeeArr[i].getEmail()}">${employeeArr[i].getEmail()}</a></h4>
                        <h4>School: ${employeeArr[i].getSchool()}</h4>
                    </div>
                </li>\n`
        }
    }
    
    fs.writeFileSync('./dist/rendered.html',`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Employee Info Generator</title>
            <link rel="stylesheet" href="./style.css">
            <script src="jquery-3.6.0.min.js"></script>
        </head>
        <body>
            <header>
                <h1>Team Members</h1>
            </header>
        
            <div id="employee-container">
                <ul>
                    ${employeeList}
                </ul>
            </div>
        
            <script src="../index.js"></script>
            
        </body>
        </html>`);
    }
