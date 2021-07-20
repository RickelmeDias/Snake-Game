// This file is just examples how to use the db modules.

//====================================================
//====================================================
// Testing Table Insert:
const insert = require('./db_insert');

insert.insertTable(
    'rank',
    insert.ColumnSequence('name', 'score'),
    insert.ValueSequence('cc', 13)
);
//====================================================
//====================================================
//====== Testing Table Select:
const select = require('./db_select');

let db_JSON = select.selectTable(
    'rank',
    select.ColumnSequence('*'),
    select.OrderByCrescent(false, 'score')
);

// Waiting for a promise 
db_JSON.then(result =>{
    console.log(result.rows);
});


//====== Select other option to wait for async


void async function() {
    let db_JSON = await select.selectTable(
        'rank',
        select.ColumnSequence('*'),
        select.OrderByCrescent(false, 'score')
    );

    console.log(db_JSON.rows);
}()

//====================================================
//====================================================
// Testing Table Drop:
const drop = require('./db_drop');

drop.dropTable('rank');

//====================================================
//====================================================
// Testing Table Create:
const create = require('./db_create');

create.createTable(
    'rank'
    , create.addColumn('id', 'serial', 'PRIMARY KEY')
    , create.addColumn('name', 'VARCHAR (32)', 'UNIQUE', 'NOT NULL')  
    , create.addColumn('score', 'integer', 'NOT NULL')
)