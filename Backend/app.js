const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./db/db");
connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./routes/user.routes");

app.get("/", (req, res) => {
    res.send("User Clone");
});

app.use("/user", userRoutes);

module.exports = app;
