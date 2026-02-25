const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const myrouter = require("./routers/router");
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
//Connect to Mongodb
mongoose
  .connect(
    "mongodb+srv://krm9741_db_user:f4PdGm2F*N7LcLN@visitorlog.npvejwj.mongodb.net/?appName=Visitorlog",
  )
  .then(() => console.log("Mongodb connected successfully"))
  .catch((err) => console.log(err));
app.use(myrouter);
app.listen(port, () => {
  console.log("Server is running");
});
