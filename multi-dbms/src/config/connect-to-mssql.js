const sql = require('mssql');

const config = {
    user: 'sa',
    password: '1',
    server: 'DESKTOP-G51F95O',
    database: 'BookingWithoutNoSQL',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL');
        return pool;
    })
    .catch(err => console.log('Database connection failed!', err));

module.exports = {
    sql,
    poolPromise
};
