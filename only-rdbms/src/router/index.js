const express = require('express');
const index = express.Router();

const { poolPromise } = require('../config/connect-to-mssql');

index.get('/', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM customer');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


module.exports = index;