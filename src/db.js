const mongoose = require('mongoose');
const config = require("../config.js");

const url = `mongodb+srv://${config.user}:${config.pw}@${config.host}`;
mongoose.connect(url, {useNewUrlParser: true }, (err) => {
    if (err) {
        console.log("Failed to connect to Database.");
        console.log(err);
    }
    else {
        console.log("Connected to database successfully");
    }
});