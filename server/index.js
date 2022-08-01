const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");

dotenv.config();



const res = mongoose
  .connect(
    process.env.MONGO_URL)
  .then(() => console.log("DBConnection Succssefuly"))
  .catch((err) => {
    console.log(err)});

app.use("/api/user",userRoute);

app
  .listen(process.env.PORT|| 5000, () => console.log("Server is Running"));
