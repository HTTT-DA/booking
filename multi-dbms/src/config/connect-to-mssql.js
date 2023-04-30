const sql = require('mssql');

// Khoa: DESKTOP-G51F95O
const config = {
    user: 'sa',
    password: '1',
    server: 'DESKTOP-G51F95O',
    database: 'BookingWithNoSQL',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        return pool;
    })
    .catch(err => console.log('Database connection failed!', err));

module.exports = {
    sql,
    poolPromise
};
