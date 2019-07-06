
const express = require('express');
const app = express();
const path = ('path');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

require("./db.js");

app.get('*', (req, res) => {
    res.json({test: "test"});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});