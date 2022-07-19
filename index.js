// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const util = require("util")
const generateMarkdown = require('./utils/generateMarkdown.js');





// TODO: Create an array of questions for user input
const questions = [
    
    {
    type: 'input',
    message: 'What is the name of the project?',
    name: 'title',
   
},
{
    type: 'input',
    message: 'What is the repository of the project',
    name: 'github',
   
  },

{
    type: 'input',
    message: 'Enter a description of your project:',
    name: 'description',
   
},
{
    type: 'input',
    message: 'Enter name of Author:',
    name: 'Author',
    
},
{
    type: 'input',
    message: 'What programs are needed to be installed for program to run',
    name: 'install',
   
  },
{
    type: 'input',
    message: 'Enter Email for contact information:',
    name: 'Email',
   
},
{
    type: 'input',
    message: 'Do you want to include a website:',
    name: 'website',
   
},

{
    type: 'list',
    name: 'license',
    message: 'Pick a license?',
    choices: ['MIT', 'ISC', 'GNU GPLv3','Unlicensed'],
    
},


];

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./generatedREADME.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: "Readme file made"
        });
      });
    });
  };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer){
        console.log(answer);
        var fileContent =generateMarkdown(answer);
        writeFile(fileContent)
    });
   
}

// Function call to initialize app
init();


module.exports = questions;

