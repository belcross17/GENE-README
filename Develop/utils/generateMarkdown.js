// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, gitInfo) {
  return `
  # **${data.title}**
    
  ${data.badge}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Questions](#Questions)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributors

  ${data.contributing}

  ## Test

  ${data.test}

  ## Questions

  - What is your project title?
  - Please provide the badges links that you want
  - Please provide your project's description
  - Please provide the installation instructions
  - Please provide the project usage
  - Please provide the project license or your badge link
  - Please provide the contributing parties
  - Please provide the project tests
  - What is your github user name?
  - What is your repo link?

  ## Repository

  - [Project-Repo](${data.repo})

  ## GitHub

  ![Image](${gitInfo.gitImage})
  - ${gitInfo.name}
  - [Github-Profile](${gitInfo.profile})
  - ${gitInfo.email}

`;
}

module.exports = generateMarkdown;
