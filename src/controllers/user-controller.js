const express = require("express");
const router = express.Router();
const userModel = require("./../models/user");
const db = require("./../helpers/db");

router.post("/create", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.saveUser(user);
  res.status(200).send(true);
});





//slet bruger
router.delete("/delete", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.deleteUser(user);
  res.status(200).send(true);
});

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


