const express = require("express");
const router = express.Router();
const userModel = require("./../models/user"); //Henter fra Model mappen --> user.js fil
const db = require("./../helpers/db"); //Henter fra Helpers mappen --> db.js


//Register bruger
router.post("/create", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.saveUser(user); //Hver gang vi kører "create" vil den registeret bruger gemmes. 
  res.status(200).send(true);
});




//Slet bruger
router.delete("/delete", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.deleteUser(user);
  res.status(200).send(true);
});



// Log ind
router.post("/login", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  const found = db.findUser(user);
  if (found) {
    if (user.password == found.password) {
      res.status(200).send(true);
    } else {
      res.status(401).send(false);
    }
  } else {
    res.status(404).send(false);
  }
});

//Opdater bruger
router.put("/update", (req, res) => {
  const user = {email: req.body.email, password: req.body.password, oldEmail: req.body.oldEmail};
  db.updateUser(user);
  res.status(200).send(true);
});

module.exports = router;


