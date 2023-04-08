const sql = require('mssql/msnodesqlv8');

const config = {
    server: 'DESKTOP-G51F95O\\anhkh',
    user: 'sa',
    password: '1',
    database: 'test',
    port: 1434,
    driver: 'msnodesqlv8'
};

const connect = new sql.ConnectionPool(config).connect().then((pool) => {
    return pool;
});

module.exports = {
    conn: connect,
    sql: sql,
};