// const sql = require('mssql/msnodesqlv8');

// const config = {
//     server: 'DESKTOP-G51F95O\\anhkh',
//     user: 'sa',
//     password: '1',
//     database: 'test',
//     port: 1434,
//     driver: 'msnodesqlv8'
// };

// const connect = new sql.ConnectionPool(config).connect().then((pool) => {
//     return pool;
// });

// module.exports = {
//     conn: connect,
//     sql: sql,
// };

const sql = require("msnodesqlv8");

const connectionString =
  "server=.; \
  Database=test;\
  Trusted_Connection=Yes;\
  Driver={SQL Server Native Client 11.0}";

const query = "SELECT * FROM Table_1";

function getConnection() {
    sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
  });
}

module.exports = { getConnection };