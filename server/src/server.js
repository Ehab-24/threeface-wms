const express = require("express");
const cors = require("cors");

const router = require("./routes");

const app = express();
app.use(cors());

require("dotenv").config({path: "./config/.env"});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});

app.use("/", router);


/////////////////////////////////////////////////////////////////

const mongoose = require("mongoose");
const seed = require("./helpers/seed");
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
    // seed();
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

module.exports = app;