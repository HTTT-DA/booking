// get poolPromise from app.js
const { poolPromise } = require('../../config/connect-to-mssql');

module.exports = function () {
    this.getAllProperty = async () => {
        try {
            const pool = await poolPromise;
            const result = await pool.request().query('SELECT * FROM property');
            return result.recordset;
        } catch (err) {
            return err.message;
        }
    };
};
