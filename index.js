const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'index.html');

const renderPage = require('./src/htmlRenderer');

const teamMembers = [];

function startApp() {
    function createTeam() {
        inquirer.prompt([{
            type: 'list',
            message: 'What type of team member would you like to add to your team?',
            name: 'memberChoice',
            choices: ['Engineer', 'Intern', 'No more team members are needed']
        }]).then(function(userInput) {
            switch(userInput.memberChoice) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default: 
                    makeTeam();
            };
        });
    };
    function createManager() {
        inquirer.prompt([
            {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the team manager?',
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the manager's employee ID number?"
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the manager's email address?"
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the manager's office number?"
            }
    ]).then(answers => {
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOfficeNumber
            );
            teamMembers.push(manager);
            createTeam();
        });
    };
    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's employee ID number?"
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's Email address?"
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the engineer's Github account"
            }
        ]).then(answers => {
            const engineer = new Engineer
            (
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGithub
            );
            teamMembers.push(engineer);
            createTeam();
        });
    };
    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?"
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the intern's employee ID number?"
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the email of the intern?"
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What school does the intern go to?"
            }
        ]).then(answers => {
            const intern = new Intern
            (
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool
            );
            teamMembers.push(intern);
            createTeam();
        });
    }
    function makeTeam() {
        fs.writeFileSync(outputPath, renderPage(teamMembers), 'utf-8');
    }
    createManager();
}

startApp();