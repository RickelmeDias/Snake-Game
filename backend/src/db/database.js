// Requires.
require('dotenv').config();
const pg = require ('pg');







// Functions to create a client.
function createClient(){  
        const db = {
            USER: process.env.DB_USER,
            HOST: process.env.DB_HOST,
            DATABASE: process.env.DB_DATABASE,
            PASS: process.env.DB_PASS,
            PORT: process.env.DB_PORT
        }

        const client = new pg.Client ({
            user: db.USER,
            host: db.HOST,
            database: db.DATABASE,
            password: db.PASS,
            port: db.PORT
        });
    
        return client;
}






// Exporting client
module.exports = {
    createClient:createClient

}



