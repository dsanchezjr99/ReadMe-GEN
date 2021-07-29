// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const createReadMe = require('./utils/readme-template');

const fs =require('fs');
// const { type } = require('os');
// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            name: 'Welcome Page',
            message: 'This is Your Own Personal ReadMe Generator, Now lets Create'
        },
        {
            type: 'input',
            name: 'Github',
            message: 'Please Enter Your Github Username',
            validate: githubInput => {
                if(githubInput) {
                    return github;
                } else {
                    console.log('You need to enter your Github username')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please Enter Your Email Address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Enter A Valid Email Address')
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'title',
            message: 'Please Give Your Project A Title',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }else {
                    console.log('You Must Give Your Project A Title')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstructions',
            message: 'Do You Want To Add instructions',
            default: true
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please Provide The Instructions Below',
            when: ({ confirmInstall }) => confirmInstall
        },
        {
            type: 'input',
            name: 'purpose',
            message: 'What Is the Purpose of This Project',
            validate: purposeInput => {
                if (purposeInput) {
                    return true;
                } else {
                    console.log('Please Provide A Purpose or Use For This Project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'confirmContributors',
            message: 'Would you Like to Add any Rules or Guidlines For Contributors',
            default: true
        },
        {
            type: 'input',
            name: 'Contributors',
            message: 'Please Add Rules or Guidlines',
            when: ({confirmContributors}) => confirmContributors
        },
        {
            type:'confirm',
            name: 'confirmTesting',
            message: 'Would You like to Add Any Instructions For Testing',
            default: true
        },
        {
            type: 'input',
            name: 'test',
            message: 'Describe the Types of Testing included in your project',
            when: ({confirmTesting}) => confirmTesting
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'Which License Is Being Used in Your Project',
            choices: ['Mit License', 'Apache License', 'General Public License']
        }
    ])

}



const questions = [];
// TODO: Create a function to write README file
const writeFileSync = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFileSync('./dist/Read.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Your ReadMe File Was Created!!'
            });
        });

    });
};

promptUser()
.then(input => {
    return generateMarkdown(input);
})
// function writeToFile(fileName, data) {}
.then(data => {
    return writeFileSync(data);
})


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();