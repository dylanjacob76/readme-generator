const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = data =>
  `
${data.username}
${data.email}
${data.project}
${data.description}
${data.license}
${data.dependencies}
${data.tests}
${data.information}
${data.contribution}
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
        { value: "None" }
      ]
    },
    {
      type: "input",
      name: "dependencies",
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
      name: "information",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "contribution",
      message: "What does the user need to know about contributing to the repo?",
    }
  ])
  .then((data) => {
    fs.writeFile(`${data.username}-README.md`, generateREADME(data), (err) => {
      err ? console.error(err) : console.log("Generating README...");
    });
  });