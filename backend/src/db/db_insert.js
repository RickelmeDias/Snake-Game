// ===== Console DEBUG =====
const Console_DEBUG = false;

// ===== Requires =====
const utils = require('./utils.js');        // Utility for database codes.
const db = require ('./database');          // Database to connect.



//==================================
// ===== Insert Table Function =====
// =================================

// Async function to connect on the db and execute SQL to insert values:

async function insertTable(table_name, column_sequence, value_sequence) {
    
    client = db.createClient(); // Connecting to database.
    await client.connect();     // Waiting for connecting.


    // Sending the value to insert using (INSERT) SQL COMMAND:
    try{
        await client.query(newInsert(table_name, column_sequence, value_sequence));
            Console_DEBUG === true ? console.log(`The values has been added to table ${table_name}!`) : "";
    } catch (error) {
        /*
        if (error = `duplicate key value violates unique constraint`){ 
            Console_DEBUG === true ? console.error(`\n\nERROR: You tried some value has already exists and it's column is UNIQUE !\n\n`) : "";
        }else{
            Console_DEBUG === true ? console.error(error) : "";
        }
        */
        console.error(error);
    }

    await client.end();
    

}


// =============================================================
// =====  Other Functions to use in "selectTable" Function =====
// =============================================================

// Execute the INSERT INTO SQL COMMAND with values:

function newInsert(table_name, column_sequence, value_sequence)  {
    return (
        `INSERT INTO ${table_name} (${column_sequence}) VALUES (${value_sequence});`
    );
}   

// Making the column sequence and values:

function ColumnSequence(...columns) {
    // This util funtion will add " , " between values and verify the typeof (just if first param is true) them.
    return utils.PutCommaBtw(false, ...columns);
}

function ValueSequence(...values) {
    // This util funtion will add " , " between values and verify the typeof them.
    return utils.PutCommaBtw(true, ...values);
}

// Function will be exported for use:

async function insertValues(table_name, name_value, score_value) {
        await insertTable(
                            table_name,
                            ColumnSequence('name', 'score'),
                            ValueSequence(name_value, score_value)
        )
}

// ===========================================
// =====  Module Exports for this module =====
// ===========================================

// Testing Table Create:

module.exports = {
    insertValues: insertValues
}
