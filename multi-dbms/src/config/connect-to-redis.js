const redis = require('redis');
async function connect() {
    try {
        const redisClient = redis.createClient({
            host: 'localhost',
            port: 6379
        });

        // console.log(redisClient);

        redisClient.on('connect', () => {});

        return redisClient;
    }
    catch (error) {
        console.error(error.message);
        process.exit(-1);
    }
}

module.exports = { connect };