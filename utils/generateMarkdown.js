// function returns the generate markdown for README

function generateMarkdown(data) {
    return `

# ${data.Title}
# Table of Contents 
* [Installation] (#installation)
* [Usage] (#usage)
* [License] (#license) 
* [Contributing] (#contributing)
* [Tests] (#tests)
* [Questions] (#questions)

# Installation
The following must install in order to run application

# Usage
In order to use the app, ${data.Usage}

# License
This project is licensed under ${data.License}

# Contributing 
Contributors: ${data.Contributing}

# Tests
The following is needed to run rests: ${data.Tests}

# Questions
If you have any questions, contact ${data.Questions}

`
}

module.exports = generateMarkdown; 