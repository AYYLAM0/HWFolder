// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message:"What is this project called?",
        name:"Title",
    },

    {
        type: "input",
        message:"Give a brief description of the project",
        name:"Description",
    },

    {
        type: "input",
        message:"What is your GitHub username?",
        name:"Github",
    },

    {
        type: "input",
        message:"What email address should be used for contacting you?",
        name:"Email",
    },

    {
        type: "input",
        message:"What is required for installation of this project?",
        name:"Required install",
    },

    {
        type: "input",
        message:"What liscenses were used for this project",
        name:"Liscense",
    },

    {
        type: "input",
        message:"Who else contributed to this project?",
        name:"Contributions",
    },

    {
        type: "input",
        message:"What command is used for testing this app?",
        name:"Testing",
    },
    {
        type: "input",
        message:"What usage case brought this project to be?",
        name:"Usage",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.write("./develop/"+fileName, data, function(error) {
        if (error) {
            console.log(error);
        }
        console.log ("LETS GO README MADE")
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("GennedReadMe.md",generateMarkdown(data));
    })
}

// Function call to initialize app
init();
