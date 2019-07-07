
const express = require('express');
const app = express();
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

require("./db.js");

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
