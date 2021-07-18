// ===== Console DEBUG =====
const Console_DEBUG = false;

// ===== Requires =====
const db = require ('./database');          // Database to connect.

async function dropTable(table_name) {
    
    client = db.createClient(); // Connecting to database.
    await client.connect();     // Waiting for connecting.
        
    // Try drop table.

    try {
        await db.query(`DROP TABLE ${table_name} CASCADE`);
        // console.log(`The table named ${table_name} has been DROPPED !`);
    } catch (error) {
        if (error = `table "${table_name}" does not exist`){
            // console.error(`\n\nERROR: The table ${table_name} DOES NOT EXISTS!\n\n`);
        }else{
            // console.error(error);
        }
    }

    
    await db.end();

}

dropTable('rank');