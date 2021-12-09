//Database for bruger (user) 

//Fs er et "bibloteket" --> så vi kan læse/gemme noget tekst fra computeren fx JSON fil
var fs = require("fs");

//Hvor filen gemmes --> Laver to variabler til vil referer til data mappen ind i users.json
const ABSOLUTE_PATH = __dirname + "/../../data";
const USER_FILE = "/users.json";

//Funktioner i database
class DB {
  constructor() {
    this.users = this.openFile(USER_FILE); //users.json indholdet
  }
 
  //Gem fil
  saveFile(fileName, contentString) {
    fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
  }

  //Åben fil
  openFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + fileName); //ind i data mappen + ind i users.json
    return JSON.parse(file); //Gør filen til JSON
  }

  //Gem bruger
  saveUser(user) {
    this.users.push(user); //
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }
  



  //Slet brugeren
  deleteUser(user) {
    this.users = this.users.filter((x) => x.email != user.email);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }

  //Vi finder brugeren efter den email + password de har skrevet /Log ind, se om password og bruger logger ind
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
