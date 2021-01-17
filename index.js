// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of the project? (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter the project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTableOfContents',
            message: 'Would you like to add a Table of Contents?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'tableOfContents',
            message: 'Select the items you would like in the Table of Contents.',
            choices: ['Installation', 'Usage', 'Credits', 'License', 'Badges', 'Features', 'Contributing', 'Tests', 'Questions'],
            when: ({ confirmTableOfContents }) => {
                if (confirmTableOfContents) {
                    return true;
                }
                else {
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide the installation instructions for the project. (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter install instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide content for the usage of the project. (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter usage content!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter any credits for the project. (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter credits for the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: 'Provide the license for this project. (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please provide license information!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmBadges',
            message: 'Would you like to add any Badges?',
            default: false
        },
        {
            type: 'input',
            name: 'badges',
            message: 'Enter any Badges you would like to add.',
            when: ({ confirmBadges }) => {
                if (confirmBadges) {
                    return true;
                }
                else {
                    return false;
                }

            }
        },
        {
            type: 'confirm',
            name: 'confirmFeatures',
            message: 'Would you like list any features?',
            default: false
        },
        {
            type: 'input',
            name: 'features',
            message: 'List any features of the project.',
            when: ({ confirmFeatures }) => {
                if (confirmFeatures) {
                    return true;
                }
                else {
                    return false;
                }

            }
        },
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to provide contributing information?',
            default: false
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide any information for contributing to the project.',
            when: ({ confirmContributing }) => {
                if (confirmContributing) {
                    return true;
                }
                else {
                    return false;
                }

            }
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to add any Tests?',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any information on tests for the project',
            when: ({ confirmTests }) => {
                if (confirmTests) {
                    return true;
                }
                else {
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your contact e-mail address? (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter your contact email!');
                    return false;
                }
            }
        }

    ]);
};

questions().then(answers => console.log(answers));

// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageMarkdown = generatePage(projectTitle, description);


// fs.writeFile('README.md', pageMarkdown, err => {
//     if (err) throw err;

//     console.log('README complete! Check out README.MD to see the output!');
// });








// const readmeDataArgs = process.argv.slice(2, process.argv.length);
// console.log(readmeDataArgs);

// const printReadmeData = readmeDataArr => {
//     readmeDataArr.forEach(readmeItem => console.log(readmeItem));
// };

// printReadmeData(readmeDataArgs);

// // TODO: Include packages needed for this application
// const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown.js');
// const inquirer = requrie('inquirer');

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app

// getUserData();
