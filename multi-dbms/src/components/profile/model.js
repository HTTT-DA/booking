const client  = require('../../config/connect-to-cassandra');

module.exports = function () {
    this.getInformation = async (id) => {
        try {
            const query = 'SELECT * FROM customer WHERE customer_id = ?';
            const params = [id];

            const result = await client.execute(query, params, { prepare: true });

            if(result.rows[0].date_of_birth !== null && result.rows[0].date_of_birth !== undefined) {
                const dateObj = new Date(result.rows[0].date_of_birth);
                const year = dateObj.getFullYear();
                const month = dateObj.getMonth() + 1; // Add 1 to adjust for 0-based indexing
                const day = dateObj.getDate();
                result.rows[0].date_of_birth = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            }
            return result.rows[0];
        }
        catch (err) {
            return err.message;
        }
    }

    this.updateFullName = async (id, fullName) => {
        try {
            const query = 'UPDATE customer SET full_name = ? WHERE customer_id = ?';
            const params = [fullName, id];

            await client.execute(query, params, { prepare: true });
            return "Update full name successfully";
        }
        catch (err) {
            return err.message;
        }
    };

    this.updateDisplayName = async (id, displayName) => {
        try {
            const query = 'UPDATE customer SET display_name = ? WHERE customer_id = ?';
            const params = [displayName, id];

            await client.execute(query, params, { prepare: true });
            return "Update display name successfully";
        }
        catch (err) {
            return err.message;
        }
    }

    this.updateEmail = async (id, email) => {
        try {
            const query = 'UPDATE customer SET email = ? WHERE customer_id = ?';
            const params = [email, id];

            await client.execute(query, params, { prepare: true });
            return "Update email successfully";
        }
        catch (err) {
            return err.message;
        }
    };

    this.updatePhone = async (id, phone) => {
        try {
            const query = 'UPDATE customer SET phone_number = ? WHERE customer_id = ?';
            const params = [phone, id];

            await client.execute(query, params, { prepare: true });
            return "Update phone number successfully";
        }
        catch (err) {
            return err.message;
        }
    };

    this.updateDob = async (id, dob) => {
        try {
            const query = 'UPDATE customer SET date_of_birth = ? WHERE customer_id = ?';
            const params = [dob, id];

            await client.execute(query, params, { prepare: true });
            return "Update date of birth successfully";
        }
        catch (err) {
            return err.message;
        }
    };

    this.updateNationality = async (id, nationality) => {
        try {
            const query = 'UPDATE customer SET nationality = ? WHERE customer_id = ?';
            const params = [nationality, id];

            await client.execute(query, params, { prepare: true });
            return "Update nationality successfully"
        }
        catch (err) {
            return err.message;
        }
    };

    this.updateGender = async (id, gender) => {
        try {
            const query = 'UPDATE customer SET gender = ? WHERE customer_id = ?';
            const params = [gender, id];

            await client.execute(query, params, { prepare: true });
            return "Update gender successfully"
        }
        catch (err) {
            return err.message;
        }
    };

    this.updateAddress = async (id, address) => {
        try {
            const query = 'UPDATE customer SET address = ? WHERE customer_id = ?';
            const params = [address, id];

            await client.execute(query, params, { prepare: true });
            return "Update address successfully"
        }
        catch (err) {
            return err.message;
        }
    };
};