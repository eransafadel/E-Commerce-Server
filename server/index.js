const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

dotenv.config();

const res = mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Succssefuly"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, () => console.log("Server is Running"));
