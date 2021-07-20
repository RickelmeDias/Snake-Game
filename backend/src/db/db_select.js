// ===== Console DEBUG =====
const Console_DEBUG = false;

// ===== Requires =====
const utils = require('./utils.js');        // Utility for database codes.
const db = require ('./database');          // Database to connect.



//==================================
// ===== Select Table Function =====
// =================================

// Async function to connect on the db and execute SQL to SELECT values:
async function selectTable(table_name, column_sequence, order) {
    
    client = db.createClient(); // Connecting to database.
    await client.connect();     // Waiting for connecting.
    
    let result;                 // Variable to get the DB selected values/

    // Getting the value using "SELECT" SQL COMMAND:

    try{
        result = await client.query(newSelect(table_name, column_sequence, order));
        
        // Console.log to debug if the command had run.
        Console_DEBUG === true ? console.log(`The values has been selected from table ${table_name}!`) : "";
    } catch (error) {
        if (error = ` `){
            // Console Error if select values are wrong:
            Console_DEBUG === true ? console.error(`\n\nERROR: Your select has an error!\n\n`) : "";
        }else{
            // Console Error:
            // console.error(error);
        }
    }

    // Leaving client
    await client.end();

    // Returning (SELECT) command value.
    return result.rows;
}





// =============================================================
// =====  Other Functions to use in "selectTable" Function =====
// =============================================================


// (SELECT) SQL COMMAND EXECUTE A NEW:
function newSelect(table_name, column_sequence, order)  {
    return (
        `SELECT ${column_sequence} FROM ${table_name} ${order} LIMIT 10;`
    );
}   


// A COLUMN SEQUENCE E.G: ( SELECT (NAME,SCORE) )
function ColumnSequence(...columns) {
    // This util funtion will add " , " between values and verify the typeof (just if first param is true) them.
    if (columns[0] != "*"){
        return "(" + utils.PutCommaBtw(false, ...columns) + ")";
    }else{
        return columns[0];
    }
}


// TABLE ORDER AND WHAT DEFINE THIS ORDER E.G: OrderByCrescent(false, 'score')
function OrderByCrescent(crescent, column) {
    if (crescent){
        return `ORDER BY ${column} ASC`;
    }else{
        return `ORDER BY ${column} DESC`;
    }
}








// Function will be exported for use:

async function gettingRank(table_name, orderByCrescent, orderColumnReference, ...columnSequence) {
    const value_req = await selectTable(
                        table_name,
                        ColumnSequence(columnSequence),
                        OrderByCrescent(orderByCrescent, orderColumnReference)
                        )

                        Console_DEBUG === true ? console.error(value_req) : "";
    return value_req;
}





// ===========================================
// =====  Module Exports for this module =====
// ===========================================

// Testing Table Create:

module.exports = {
    gettingRank: gettingRank
}
