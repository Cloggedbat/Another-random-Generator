// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager {
    constructor(name, id, email, school){
    //   super(name, id, email) 
      this.school;
    }
    getSchool(){
        return this.school;
    }
    getRole() {
        return "Manager";
      }
    }
 module.exports = Manager;