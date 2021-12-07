//Database for bruger (user) 

var fs = require("fs");

//Hvor filen gemmes
const ABSOLUTE_PATH = __dirname + "/../../data";
const USER_FILE = "/users.json";

class DB {
  constructor() {
    this.users = this.openFile(USER_FILE);
  }
 
  
  saveFile(fileName, contentString) {
    fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
  }


  openFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
    return JSON.parse(file);
  }


  saveUser(user) {
    this.users.push(user);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }
  


  //Slet brugeren
  deleteUser(user) {
    this.users = this.users.filter((x) => x.email != user.email);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }

  findUser(user) {
    return this.users.find((x) => user.email == x.email);
  }


  //Opdater brugeren
  updateUser(user) {
    for (let i=0; i < this.users.length; i++) {
      console.log(this.users[i]); 
      console.log(user);
      if (this.users[i].email == user.oldEmail) {
        this.users[i].email = user.email;
        this.users[i].password = user.password;
      }
    }
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }



}


module.exports = new DB();
