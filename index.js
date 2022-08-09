// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const axios = require("axios");
const fs = require ("fs");
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
    },
    {
        type: "input",
        name: "license",
        message: "Please provide the project license or your badge link"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
];

// TODO: Create a function to write README file
inquirer
    .prompt(questions)
    .then(function(data){
        const URL = `https://api.github.com/users/${data.username}`;
        axios.get(URL)
        .then(function(response) {
            const gitInfo = {
                gitImage: response.data.avatar_url,
                email: response.data.email,
                profile: response.data.html_url,
                name: response.data.name
            };

            fs.writeFile("README.md", generateMarkdown(data, gitInfo), function(err) {
                if (err) {
                    throw err;
                } else {
                    console.log("README file successfully created!")
                };
            })
        })
    })

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
