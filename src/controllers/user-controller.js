const express = require("express");
const router = express.Router();
const userModel = require("./../models/user"); //Henter fra Model mappen --> user.js fil
const db = require("./../helpers/db"); //Henter fra Helpers mappen --> db.js


//Register bruger
router.post("/create", (req, res) => {
  const user = new userModel(req.body.email, req.body.password); //Hvad objektet user består af: email + password
  db.saveUser(user); //Hver gang vi kører "create" vil den registeret bruger gemmes. 
  res.status(200).send(true); //Giver svar tilbage at brugeren er blevet registeret
});



//Slet bruger
router.delete("/delete", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.deleteUser(user); //brugeren vil slettes
  res.status(200).send(true); //Giver svar at brugeren er slettet
});


// Log ind
router.post("/login", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  const found = db.findUser(user); //Vi prøver at finde brugeren.
  if (found) { //Hvis objektet er fundet, vil det returnere objektet fra brugeren & hvis objektet ikke er fundet vil den returnere ingen ting.
    if (user.password == found.password) { //Hvis både email & password stemmer overens
      res.status(200).send(true); //Hvis der en bruger fundet vil det være "True".
    } else { 
      res.status(401).send(false); //Det lykkedes ikke at logge ind.
    }
  } else {
    res.status(404).send(false); //Hvis der ikke er fundet en bruger vil det være "false".
  }
});

//Opdater bruger
router.put("/update", (req, res) => {
  const user = {email: req.body.email, password: req.body.password, oldEmail: req.body.oldEmail};
  db.updateUser(user);
  res.status(200).send(true);
});

module.exports = router;


