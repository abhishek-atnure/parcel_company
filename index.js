const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db');

//port on server wil start
const PORT = 5000;

//enables all cors requests
app.use(cors());

//get all trucks
app.get('/truck', (req, res) => {
    res.send(db.trucks)

})
//get single truck with parcel id
app.get('/truck/:id', (req, res) => {
    const { id } = req.params;
    res.send(db.trucks[id])
})

//server will listen
app.listen(PORT, () => {
    console.log(`connnected to port ${PORT}`);
})