// Database .env config:
require('dotenv').config();

const db = {
    USER: process.env.DB_USER,
    HOST: process.env.DB_HOST,
    DATABASE: process.env.DB_DATABASE,
    PASS: process.env.DB_PASS,
    PORT: process.env.DB_PORT
}

// Database client config
const pg = require ('pg');
const client = new pg.Client ({
    user: db.USER,
    host: db.HOST,
    database: db.DATABASE,
    password: db.PASS,
    port: db.PORT
});

// Exporting client
module.exports = client;