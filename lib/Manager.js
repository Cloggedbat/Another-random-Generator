// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager {
    constructor(name, id, email, officeNumber){
      this.officeNumber = officeNumber;
      this.email = email;
      this.id = id;
      this.name = name;

    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
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

 module.exports = Manager;