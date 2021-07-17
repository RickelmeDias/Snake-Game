const utils = require('./utils.js');
const db = require('./database');

// Async functions to connect on the db and execute SQL to create table:

async function selectTable(table_name, column_sequence, order) {
    let result;

    await db.connect();
    // Try to insert the value

    try{
        result = await db.query(newSelect(table_name, column_sequence, order));
        console.log(`The values has been selected from table ${table_name}!`);
    } catch (error) {
        if (error = ` `){ 
            console.error(`\n\nERROR: Your select has an error!\n\n`);
        }else{
            console.error(error);
        }
    }
    await db.end();

    return result;
}

// A function to Add Column in the "Table Create":

function ColumnSequence(...columns) {
    // This util funtion will add " , " between values and verify the typeof (just if first param is true) them.
    if (columns[0] != "*"){
        return "(" + utils.PutCommaBtw(false, ...columns) + ")";
    }else{
        return columns[0];
    }
}

// Create a new Table:

function newSelect(table_name, column_sequence, order)  {
    return (
        `SELECT ${column_sequence} FROM ${table_name} ${order};`
    );
}   

// Order the table

function OrderByCrescent(crescent, column) {
    if (crescent){
        return `ORDER BY ${column} ASC`;
    }else{
        return `ORDER BY ${column} DESC`;
    }
}

module.exports = {
    selectTable:  selectTable,
    ColumnSequence: ColumnSequence,
    OrderByCrescent: OrderByCrescent
}
