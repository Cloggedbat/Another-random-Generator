// Classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const HTMLpg = require("./templets/main.html")

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { async } = require("rxjs");

 async function start() {
    // add what the team requirerments are/ how many are needed
    console.log('Lets make a team')    
    
    await inquirer
    .prompt ([
        
        // this will prompt you to pick the position needed for the task
        // I will need to find a way to have it log to the prospective position
        {
            type: "input",
            message: "What is the enployees name?",
            name:"name",
            // look into validations 
        },
        {
            type: "list",
            message: "What position are you looking for?",
            choices: [
                'Engineer',
                'Intern',
                'Manager',
                
            ],
            name: 'role'
        },
        {
            type: "input",
            message: "What is the enployees number?",
            name: 'employeenum',
            // look into validations 
        },
        {
            type: "input",
            message: "What is the enployees name?",
            name:"name",
            // look into validations 
        },


    ])
    .then((data) => {
    
        // var input = render(data)
        name = data.name;
        id = data.id;
        role = data.role;
        email = data.email;
        console.log(data.name)
        console.log(data.role)
        console.log(data.employeenum)
        // writetofile('intern.html')
    });
   

}
start();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// I belive that this is all bing dun in htmlRender.js
// .then(function(response){
    
//     console.log(response)
    
//     const answers = gm(response)
//     writeToFile("README.md", answers)
//     console.log(writeToFile)
// })

// // function to write README file
// function writeToFile(fileName, data) {
//     // console.log(fileName, data)
//     fs.writeFile(fileName, data, function (err) {
//         if (err) {
//             throw err;
//         };
        
//     })
// }