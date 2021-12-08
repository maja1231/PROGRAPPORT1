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

//Middleware --> det der vil ske før, der bliver kørt noget i vores controller,
//Vil gøre alt indholdet i Views til at blive vores endpoints.  
app.use(express.static("./src/views"));
//Hver gang der bliver skrevet noget i body vil dette være string --> til JSON
app.use(express.json());

//Routes
app.use("/users", userController);


//Referer til items controller
const itemsController = require("./src/controllers/items-controller");
app.use("/item", itemsController);

