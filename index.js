var inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
let employeeArr = [];
let someArr = [];

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

function init() {
    askForManagerInfo();
}
init();

function askForManagerInfo() {
    return inquirer
        .prompt(managerQuestions)
        .then((answers) => {
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

function decide(answers) {
    if(answers.eif == 'Add Engineer') {
        askForEngineerInfo();
    } else if (answers.eif == 'Add Intern') {
        askForInternInfo();
    } else {
        createHTML();
    }
}

function askForEngineerInfo() {
    return inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
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

function askForInternInfo() {
    return inquirer
        .prompt(internQuestions)
        .then((answers) => {
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

function createHTML() {

    let employeeList = '';
    for(let i = 0; i < employeeArr.length; i++){
        if(employeeArr[i].officeNum){
            employeeList += 
                `<li>
                    <div class="top-box">
                        <h2>${employeeArr[i].name}</h2>
                        <h3>Manager</h3>
                    </div>

                    <div class="bottom-box">
                        <h4>ID: ${employeeArr[i].id}</h4>
                        <h4>Email: ${employeeArr[i].email}</h4>
                        <h4>Office Number: ${employeeArr[i].officeNum}</h4>
                    </div>
                </li>`
        } else if (employeeArr[i].github) {
            employeeList += 
                `<li>
                    <div class="top-box">
                        <h2>${employeeArr[i].name}</h2>
                        <h3>Engineer</h3>
                    </div>

                    <div class="bottom-box">
                        <h4>ID: ${employeeArr[i].id}</h4>
                        <h4>Email: ${employeeArr[i].email}</h4>
                        <h4>GitHub Username: ${employeeArr[i].github}</h4>
                    </div>
                </li>`
        } else {
            employeeList += 
                `<li>
                    <div class="top-box">
                        <h2>${employeeArr[i].name}</h2>
                        <h3>Intern</h3>
                    </div>

                    <div class="bottom-box">
                        <h4>ID: ${employeeArr[i].id}</h4>
                        <h4>Email: ${employeeArr[i].email}</h4>
                        <h4>Office Number: ${employeeArr[i].school}</h4>
                    </div>
                </li>`
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
