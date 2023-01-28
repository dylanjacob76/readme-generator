const inquirer = require("inquirer");
const fs = require("fs");

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

const generateREADME = data => 
`# ${data.project}


## Description
${data.description}


## Table of Contents
* [Installion](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)


## Installation
To install necessary dependencies, run the following command:
> ${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:
> ${data.tests}

## Lisence
${data.license}

## Questions
If you have any questions about the repo, open an issue or contact me directly at <${data.email}>. You can find more of my work at [${data.username}](https://github.com/${data.username}).
`
inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    },
    {
      type: "input",
      name: "project",
      message: "What is your project's name?"
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project:"
    },
    {
      type: "list",
      name: "lisence",
      message: "What kind of license should your project have?",
      choices: [
        { value: "MIT" },
        { value: "Apache 2.0" },
        { value: "GPL 3.0" },
        { value: "BSD 3" },
        { value: "No License" }
      ]
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies?",
      default: "npm i"
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be run to run tests?",
      default: "npm test"
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "contributing",
      message: "What does the user need to know about contributing to the repo?",
    }
  ])
  .then((data) => {
    fs.writeFile("README.md", generateREADME(data), (err) => {
      err ? console.error(err) : console.log("Generating README...");
    });
  });