const express = require("express");
const router = express.Router();
const itemModel = require("../models/item"); //Henter fra mappe Models --> item.js
const db = require("../helpers/dbitems"); //Henter fra mappe Helpers --> dbitem.js

// Opret item
router.post("/createitem", (req, res) => {
    const item = new itemModel(req.body.vare, req.body.vareKateogri, req.body.pris); //hvad objektet item består af: vare + varekategori + pris
    db.saveItem(item); //Hver gang vi kører create vil det gemte item gemmes
    res.status(200).send(true); //Giver svar tilbage at item 
});

//slet item
router.delete("/delete", (req, res) => {
    const item = new itemModel(req.body.vare, req.body.vareKateogri, req.body.pris);
    db.deleteItem(item);
    res.status(200).send(true);
  });
  
  router.post("/login", (req, res) => {
    const item = new itemModel(req.body.vare, req.body.vareKateogri, req.body.pris);
    const found = db.findItem(item);
    if (found) {
      if (item.vare == found.vare) {
        res.status(200).send(true);
      } else {
        res.status(401).send(false);
      }
    } else {
      res.status(404).send(false);
    }
  });
  
module.exports = router;
