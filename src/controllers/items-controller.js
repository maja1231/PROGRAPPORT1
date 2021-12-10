const express = require("express");
const router = express.Router();
const itemModel = require("../models/item"); //Henter fra mappe Models --> item.js
const db = require("../helpers/dbitems"); //Henter fra mappe Helpers --> dbitem.js

// Opret item
router.post("/createitem", (req, res) => {
    const item = new itemModel(req.body.vare, req.body.vareKateogri, req.body.pris); //hvad objektet item består af: vare + varekategori + pris
    db.saveItem(item); //Hver gang vi kører create vil det registeret item gemmes
    res.status(200).send(true); //Giver svar tilbage at item.
});

//slet item
router.delete("/deleteitem", (req, res) => {
    const item = new itemModel(req.body.vare, req.body.vareKateogri, req.body.pris);
    db.deleteItem(item); //item vil slettes
    res.status(200).send(true); //giver svar at item er slettet
  });
  

  
  
module.exports = router;
