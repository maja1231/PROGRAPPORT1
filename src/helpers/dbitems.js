//Database for vare (item) --> Her gemmes items
var fs = require("fs");

const ABSOLUTE_PATH = __dirname + "/";
const ITEM_FILE = "../../data/items.json";

class DB {
  constructor() {
    this.items = this.openItemFile(ITEM_FILE);
  }
 
  //Her gennems fil med vores items
  saveItemFile(fileName, contentString) {
    fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
  }

 //Item kan åbnes
  openItemFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
    return JSON.parse(file);
  }
  

  //Gem item
  saveItem(item) {
    this.items.push(item);
    this.saveItemFile(ITEM_FILE, JSON.stringify(this.items));
  }

  //Slet item
  deleteItem(item) {
    this.items = this.items.filter((x) => x.vare != item.vare);
    this.saveItemFile(ITEM_FILE, JSON.stringify(this.items));
  }


}

module.exports = new DB();
