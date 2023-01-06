// function returns the generate markdown for README

function generateMarkdown(data) {
    return `

# ${data.Title}
# License:
[![License: MIT](https://img.shields.io/badge/License${data.License}-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Table of Contents 
* [Installation] (#installation)
* [Usage] (#usage)
* [Contributing] (#contributing)
* [Tests] (#tests)
* [Questions] (#questions)

# Installation
The following must install in order to run application

# Usage
In order to use the app, ${data.Usage}

# Contributing 
Contributors: ${data.Contributing}

# Tests
The following is needed to run rests: ${data.Tests}

# Questions
If you have any questions, contact ${data.Questions}

`
}

module.exports = generateMarkdown; 