/* = = = = Snake Game Back-end = = = = */
// Database .env config:
require('dotenv').config();

const server = {
    PORT: process.env.SERVER_PORT
}

// ===== Requires and variables =====
const db_select = require('./db/db_select.js');
const db_insert = require('./db/db_insert.js')

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const port = server.PORT;

// GET:
app.get('/rank', (req, res) => {

    // Getting values form database using my modules to select sql table: 
    void async function () {
        const result_get_rank = await db_select.gettingRank('rank', false, 'score', '*');
        res.send(result_get_rank);
    }()
    
});

// POST:
app.post('/rank', (req, res) => {
    const { name, score }= req.body;

    // Getting values form database using my modules to select sql table: 
    void async function () {
        await db_insert.insertValues('rank',`${name}`, score);
    }()

    res.status(201).json(req.body);
});

// Server is running:
app.listen(port, () => {
    console.log(`Server is running port ${port}`);
})

