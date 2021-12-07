//Index.js er det første som bliver kørt

//Laver et API
const express = require("express");
const { emitWarning } = require("process");
const { Script } = require("vm");
const app = express();

const PORT = 8080; //Serveren er sat til at lytte til port 8080
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


//Referer til user controller
const userController = require("./src/controllers/user-controller");



//Referer til views mappen, som er bl.a login
app.use(express.static("./src/views"));

app.use(express.json());

//Routes
app.use("/users", userController);


//Referer til items controller
const itemsController = require("./src/controllers/items-controller.js");
app.use("/item", itemsController);