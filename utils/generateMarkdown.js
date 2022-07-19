const fs = require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(!license){
//site to make badges = https://shields.io/

return '';
}
else  
  return `[![License: ${license}](https://img.shields.io/badge/license-${license}-yellowgreen)](${renderLicenseLink(license)})`;
 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != ""){

    if (license === 'MIT') {
      return `https://lbesson.mit-license.org/`
    }
    if (license === 'ISC') {
      return `https://opensource.org/licenses/ISC`
    }
    if (license === 'GNU GPLv3') {
      return `https://opensource.org/licenses/MPL-2.0`
    }
    if (license === 'Unlicensed') {
      return `http://unlicense.org/`
    }


  } 
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else
   {
    return `## Licenses for this project is ${license}.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

### Table of Contents:
### [Name of Project.](#title)
### [Name of Repository.](#github)
### [Description of project.](#description)
### [Programs to install.](#install)
### [Name of Author.](#author)
### [contact Email.](#email)
### [Name of website.](#website)
### [License type.](#lincense)






  
## title
  Name of Project = ${data.title}

## github
  Repository of the project = ${data.github}

## description
  Description of your project = ${data.description}

## install
  Programs need to be installed for program to run = ${data.install}

# author
  Author = ${data.Author}

## email
  Contact Email = ${data.Email}

## website
  Website = ${data.website}

## lincense
  Lincense = ${renderLicenseBadge(data.license)}
             ${renderLicenseLink(data.license)}
            ${data.license}

  


`;
}

module.exports = generateMarkdown;
