const fs = require('fs');

const generatePage = require('./src/page-template.js');

const readmeDataArgs = process.argv.slice(2);

const [projectTitle, description] = readmeDataArgs;



fs.writeFile('README.md', generatePage(projectTitle, description), err => {
    if (err) throw err;

    console.log('README complete! Check out README.MD to see the output!');
});
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
