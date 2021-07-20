// ===== Console DEBUG =====
const Console_DEBUG = false;

// ===== Requires =====
const utils = require('./utils.js');
const db = require('./database');

// Async functions to connect on the db and execute SQL to create table:

async function createTable(table_name, ...columns) {

    client = db.createClient(); // Connecting to database.
    await client.connect();     // Waiting for connecting.

    // Try create table.

    try {
        await client.query(newTable(table_name, ...columns));
        console.log(`The table named ${table_name} has been CREATED !`);
    } catch (error) {
        if (error = `relation "${table_name}" already exists`){
            console.error(`\n\nERROR: The table ${table_name} ALREADY EXISTS !\n\n`);
        }else{
            // console.error(error);
        }
    }
    
    await client.end();

}

// A function to Add Column in the "Table Create":

function addColumn(...columnThings) {
    let output = "";

    for (let i = 0; i < columnThings.length; i++) {
        output += `${columnThings[i]}`
        if (i != columnThings.length-1) {
                output += " "
        }
    }

    return output;
}

// Create a new Table:

function newTable (table_name, ...values)  {
    return (
        `CREATE TABLE ${table_name} (${newColumns(...values)})`
    );
}   

// Create new Columns for the new table:

function newColumns(...values) {
    return utils.PutCommaBtw(false, ...values);;
}

module.exports = {
    createTable: createTable,
    addColumn: addColumn
}