const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the project about?",
    name: "Description"
}, {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What does the user need to install?",
    name: "Installation"
}, {
    type: "input",
    message: "How is the app used? Give instructions",
    name: "Usage" 
}, {
    type: "input",
    message: "What is the license?", 
    name: "License"
}, {
    type: "input",
    message: "Who contributed to the project",
    name: "Contributing"
}, {
    type: "input",
    message: "Will there be a test?",
    name: "Tests"
}, {
    type: "input",
    message: "Questions included",
    name: "Questions"
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions)
    .then(function(data) {
        writeToFile("README.md", generatorMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
