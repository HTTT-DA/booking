const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
    }
    catch (error) {
        console.error(error.message);
        process.exit(-1);
    }
}

module.exports = { connect };
