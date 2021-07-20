/* Dropping Table */
/*

const drop = require('./src/db/db_drop');

drop.dropTable('rank');

*/


/* Creating Table */
/*
const create = require('./src/db/db_create');

create.createTable(
    'rank'
    , create.addColumn('id', 'serial', 'PRIMARY KEY')
    , create.addColumn('name', 'VARCHAR (32)', 'NOT NULL')  
    , create.addColumn('score', 'integer', 'NOT NULL')
)
*/

const insert = require('./src/db/db_insert');

insert.insertValues('rank','maior', 991);