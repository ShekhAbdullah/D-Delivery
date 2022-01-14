const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const errorMiddleware = require("./middleware/error");




app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports
const product = require("./routes/productRoute");

app.use("/api/v1", product);



// Middleware for Errors
app.use(errorMiddleware);



module.exports = app;