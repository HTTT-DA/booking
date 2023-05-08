/*const sql = require('mssql');

// Khoa: DESKTOP-G51F95O
const config = {
    user: 'sa',
    password: '1',
    server: 'LAPTOP-HV4IJC5O',
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

*/
 
const sql = require('mssql');
const sql_danh = require('mssql/msnodesqlv8')

// Danh
const config = {
    driver: 'SQL Server',
    server: 'FINN\\SQLEXPRESS',
    database: 'BookingWithNoSQL',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
};


const poolPromise = new sql_danh.ConnectionPool(config)
    .connect()
    .then(pool => {
        return pool;
    })
    .catch(err => console.log('Database connection failed!', err));

module.exports = {
    sql_danh,
    poolPromise
};
