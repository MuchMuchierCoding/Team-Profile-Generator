const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
//const generateSite = require('./src/generate-site.js');
const team = [];

const requestManagerInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the Manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Enter the manager's name to continue");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is the employee's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Enter the employee's id to continue");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Enter the manager's email to continue");
                    return false;
                }
            }
        }, 
        {
            type: "input",
            name: "officeNumber", 
            message: "What is the manager's office number?",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Enter the manager's office number to continue");
                    return false;
                }
            }        
        },
    ]) .then(response => {
        console.log(response);
        const manager = new Manager(response.managerName, response.employeeId, response.managerEmail, response.officeNumber);
        manager.special = manager.officeNumber;
        team.push(manager);
        actionMenu();
    })
   
}

//--Add a new Engineer--
promptEngineerData = () => {
    console.log(`
    ==========================
    Input Engineer Information
    ==========================
    `)
    return inquirer.prompt([
    {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's name?",
        validate: engineerName => {
            if (engineerName) {
                return true;
            } else {
                console.log("To continue, input the name of the engineer");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "employeeId", 
        message: "Enter the employee's id",
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log("To continue, input the employee's id");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "employeeEmail",
        message: "Enter the employee's email",
        validate: employeeEmail => {
            if (employeeEmail) {
                return true;
            } else {
                console.log("To continue, input the employee's email");
                return false;
            }
        }
    }, 
    {
        type: "input",
        name: "github",
        message: "Enter the employee's github username",
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("To continue, input the employee's GitHub username");
                return false;
            }
        }
    },
    ]) .then(response => {
        console.log(response);
        const engineer = new Engineer(response.engineerName, response.employeeId, response.employeeEmail, response.github);
        engineer.special = engineer.github;
        team.push(engineer);
        actionMenu();
    })
};

//--Add an Intern--
promptInternData = () => {
    console.log(`
    =============
    Add an Intern
    =============
    `)
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log("To continue, input the intern's name");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's id?",
            validate: internId => {
                if (internId) {
                    return true;
                } else {
                    console.log("To continue, input the intern's id");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?",
            validate: internEmail => {
                if (internEmail) {
                    return true;
                } else {
                    console.log("To continue, input the intern's email?");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's school?",
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log("To continue, input the intern's school");
                    return false;
                }
            }
        },
    ]) .then(response => {
        console.log(response);
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
        intern.special = intern.school;
        team.push(intern);
        actionMenu();
    })
};



//--Complete the team--
teamComplete = () => {
    console.log(`
    ================
    Team is Complete
    ================
    `);
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath,`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="">
    <script src=""></script>
    
    <title>My Team</title>
</head>
<body>
    <header>
        <h1> My Team</h1>
    </header>
        <main>
    `);
    for (let i = 0; i < team.length; i++) {
       fs.appendFileSync(outputPath,`
       ${team[i].name}
       ${team[i].id}
       ${team[i].email}
       ${team[i].special}
       `)  
    }
   fs.appendFileSync(outputPath, `
    </main>
    </body>
    </html>
   `)
};

const actionMenu = () => {
    console.log(`
    ================
    Get Started: Build Your Team
    ================
    `);
    return inquirer.prompt([
        {
            type: "list",
            name: "actionItems",
            message: "Select what you would like to do:",
            choices: [
                "Add an Engineer", "Add an Intern", "My Team is Complete"
            ]
        }
    ]) .then(userAction => {
        switch (userAction.actionItems) {
            case "Add an Engineer":
                promptEngineerData();
                break;
            case "Add an Intern":
                promptInternData();
                break;
            case "My Team is Complete":
                teamComplete();
                break;
            }
    });
};


requestManagerInfo();