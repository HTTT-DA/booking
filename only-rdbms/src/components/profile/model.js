const { poolPromise } = require('../../config/connect-to-mssql');

module.exports = function () {
    this.getInformation = async (id) => {
        try {
            const pool = await poolPromise;
            const query =
                `SELECT * FROM dbo.Customer WHERE id = ${id}`;
            const result = await pool.request().query(query);

            if(result.recordset[0].date_of_birth !== null && result.recordset[0].date_of_birth !== undefined) {
                const dateObj = new Date(result.recordset[0].date_of_birth);
                const year = dateObj.getFullYear();
                const month = dateObj.getMonth() + 1; // Add 1 to adjust for 0-based indexing
                const day = dateObj.getDate();
                result.recordset[0].date_of_birth = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            }
            return result.recordset[0];
        }
        catch (err) {
            return err.message;
        }
    }

    this.updateFullName = async (id, fullName) => {
        try {
            const pool = await poolPromise;
            const query =
                `UPDATE dbo.Customer SET full_name = '${fullName}' WHERE id = ${id}`;
            const result = await pool.request().query(query);
            return result.rowsAffected[0];
        }
        catch (err) {
            return err.message;
        }
    };

    this.updateDisplayName = async (id, displayName) => {
        try {
            const pool = await poolPromise;
            const query =
                `UPDATE dbo.Customer SET display_name = '${displayName}' WHERE id = ${id}`;
            const result = await pool.request().query(query);
            return result.rowsAffected[0];
        }
        catch (err) {
            return err.message;
        }
    }

    this.updateEmail = async (id, email) => {
        try {
            const pool = await poolPromise;
            const query =
                `UPDATE dbo.Customer SET email = '${email}' WHERE id = ${id}`;
            const result = await pool.request().query(query);
            return result.rowsAffected[0];
        }
        catch (err) {
            return err.message;
        }
    };

    this.updatePhone = async (id, phone) => {
        try {
            const pool = await poolPromise;
            const query =
                `UPDATE dbo.Customer SET phone = '${phone}' WHERE id = ${id}`;
            const result = await pool.request().query(query);
            return result.rowsAffected[0];
        }
        catch (err) {
            return err.message;
        }
    };

    this.updateDob = async (id, dob) => {
        try {
            const pool = await poolPromise;
            const query =
                `UPDATE dbo.Customer SET date_of_birth = '${dob}' WHERE id = ${id}`;
            const result = await pool.request().query(query);
            return result.rowsAffected[0];
        }
        catch (err) {
            return err.message;
        }
    };

    this.updateNationality = async (id, nationality) => {
        try {
            const pool = await poolPromise;
            const query =
                `UPDATE dbo.Customer SET nationality = '${nationality}' WHERE id = ${id}`;
            const result = await pool.request().query(query);
            return result.rowsAffected[0];
        }
        catch (err) {
            return err.message;
        }
    };

    this.updateGender = async (id, gender) => {
        try {
            const pool = await poolPromise;
            const query =
                `UPDATE dbo.Customer SET nationality = '${gender}' WHERE id = ${id}`;
            const result = await pool.request().query(query);
            return result.rowsAffected[0];
        }
        catch (err) {
            return err.message;
        }
    };

    this.updateAddress = async (id, address) => {
        try {
            const pool = await poolPromise;
            const query =
                `UPDATE dbo.Customer SET address = '${address}' WHERE id = ${id}`;
            const result = await pool.request().query(query);
            return result.rowsAffected[0];
        }
        catch (err) {
            return err.message;
        }
    };
};