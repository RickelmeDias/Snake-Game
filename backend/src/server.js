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

app.get('/rank', (req, res, next) => {
    
    console.log("Sending... "); // Middleware
    next();
    
});
app.get('/rank', (req, res, next) => {
    
    res.send({ name: "Jimmy", score: 55 }) // Converter para JSON, o method send faz isso.
    
});

app.listen(port, () => {
    console.log(`Server is running port ${port}`);
})