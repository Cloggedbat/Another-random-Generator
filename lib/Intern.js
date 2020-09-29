// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern {
    constructor(name, id, email, school){
        // super (name, id, email);
        this.email = email;
        this.id = id;
        this.name = name;
      this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern'
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

 module.exports = Intern;
