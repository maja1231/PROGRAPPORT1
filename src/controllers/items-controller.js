const express = require("express");
const router = express.Router();
const itemModel = require("../models/item");
const db = require("../helpers/dbitems");

// Opret item
router.post("/createitem", (req, res) => {
    const item = new itemModel(req.body.vare, req.body.vareKateogri, req.body.pris);
    db.saveItem(item);
    res.status(200).send(true);
    console.log(req.body)
});

  
module.exports = router;
