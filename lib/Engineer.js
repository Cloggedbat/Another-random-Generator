// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer {
    constructor(name, id, email, github){
        this.email = email;
      this.id = id;
      this.name = name;
      this.github = github;
    }
   
    getRole(){
        return 'Engineer'
    }
    getGithub(){
        return this.github
    }
    getName() {
        return this.name
      }
    
      getId() {
        return this.id
      }
      getEmail() {
        return this.email
      }
}

 module.exports = Engineer;