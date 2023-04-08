const redis = require('redis');
async function connect() {
    try {
        const redisClient = redis.createClient({
            host: 'localhost',
            port: 6379
        });

        redisClient.on('connect', () => {});
    }
    catch (error) {
        console.error(error.message);
        process.exit(-1);
    }
}

module.exports = { connect };