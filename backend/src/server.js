/*

Snake Game Back-end

*/

// .env
require('dotenv').config();
const sv = {
    PORT: process.env.SERVER_PORT
}

// Api
const port = sv.PORT;
const express = require('express');
const app = express();

const rank = require('./ranking/getRank.js')

app.get('/rank', (req, res) => {
    let result = rank.GetRank();
    // Waiting for a promise 
    result.then(a =>{
        res.send(a) // Convert to JSON, by send.
    });

    
    
});

app.listen(port, () => {
    console.log(`Server is running port ${port}`);
})