/*
*
    Drop Table
*
*/
const db = require('./database');

async function dropTable(table_name) {
    
    await db.connect();
        
    // Try drop table.

    try {
        await db.query(`DROP TABLE ${table_name} CASCADE`);
        console.log(`The table named ${table_name} has been DROPPED !`);
    } catch (error) {
        if (error = `table "${table_name}" does not exist`){
            console.error(`\n\nERROR: The table ${table_name} DOES NOT EXISTS!\n\n`);
        }else{
            console.error(error);
        }
    }

    
    await db.end();

}

module.exports = {
    dropTable: dropTable
}