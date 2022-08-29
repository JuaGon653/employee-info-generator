var inquirer = require('inquirer');
const { waitForDebugger } = require('inspector');
const { functions } = require('lodash');
var eif = 'manager';

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
        return; //turn into creating the html file
    }
}

function askForEngineerInfo() {
    return inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
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
