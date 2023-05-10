const { poolPromise } = require('../../config/connect-to-mssql');

async function getUserByEmail(email) {
  try {
    const pool = await poolPromise;
    const query = `SELECT * FROM dbo.Customer WHERE email = '${email}'`;
    const result = await pool.request().query(query);
    return result.recordset[0];
  } catch (err) {
    return "Error getting user's email:" + err;
  }
}

module.exports = { getUserByEmail };
