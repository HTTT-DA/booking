const { conn, sql } = require("../../config/connect-to-mssql");

module.exports = function () {
    this.test = async (id, result) => {
        try {
            const pool = await conn;
            const sqlQuery = "SELECT * FROM [dbo].[user]";
            return await pool.request()
                .query(sqlQuery, (e, data) => {
                    if (!e) result(null, data.recordset);
                    else result(true, null);
                });
        } catch {
            result(true, null);
        }
    };
};
