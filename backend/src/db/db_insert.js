const utils = require('./utils.js');
const db = require('./database');

// Async functions to connect on the db and execute SQL to create table:

async function insertTable(table_name, column_sequence, value_sequence) {
    
    await db.connect();

    // Try to insert the value

    try{
        await db.query(newInsert(table_name, column_sequence, value_sequence));
        console.log(`The values has been added to table ${table_name}!`);
    } catch (error) {
        if (error = `duplicate key value violates unique constraint`){ 
            console.error(`\n\nERROR: You tried some value has already exists and it's column is UNIQUE !\n\n`);
        }else{
            console.error(error);
        }
    }

    await db.end();
    

}

// A function to Add Column in the "Table Create":

function ColumnSequence(...columns) {
    // This util funtion will add " , " between values and verify the typeof (just if first param is true) them.
    return utils.PutCommaBtw(false, ...columns);
}

function ValueSequence(...values) {
    // This util funtion will add " , " between values and verify the typeof them.
    return utils.PutCommaBtw(true, ...values);
}

// Create a new Table:

function newInsert(table_name, column_sequence, value_sequence)  {
    return (
        `INSERT INTO ${table_name} (${column_sequence}) VALUES (${value_sequence});`
    );
}

module.exports = {
    insertTable: insertTable,
    ColumnSequence: ColumnSequence,
    ValueSequence: ValueSequence
}