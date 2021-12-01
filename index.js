const express = require("express");
const { emitWarning } = require("process");
const { Script } = require("vm");
const app = express();

const PORT = 8080; // Serveren er sat til at lytte til port 8080
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});



const userController = require("./src/controllers/user-controller");




app.use(express.static("./src/views"));



app.use(express.json());


app.use("/users", userController);

