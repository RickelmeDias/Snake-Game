const select = require('../db/db_select');

async function GetRank() {
    let db_JSON = await select.selectTable(
        'rank',
        select.ColumnSequence('*'),
        select.OrderByCrescent(false, 'score')
    );

    let result = "{";

    for (let i = 0; i < db_JSON.rows.length; i++){
        delete db_JSON.rows[i].id;
        result += `${JSON.stringify(db_JSON.rows[i])}`;

        if (i != db_JSON.rows.length - 1) {
            result += ','
        }
    }

    result += "\n}";

    return result;
}

module.exports = {
    GetRank:GetRank
}