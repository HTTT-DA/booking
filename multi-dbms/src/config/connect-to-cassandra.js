const cassandra = require('cassandra-driver');

async function connect() {
    try {
          const client = new cassandra.Client({
          contactPoints: ["localhost"],
          localDataCenter: "datacenter1",
          keyspace: "dath",
          port: 9043
        });
        await client.connect();
        return client;
    }
    catch (error) {
        console.error(error.message);
        process.exit(-1);
    }
}

module.exports = { connect };

// D:\App\Cassandra\apache-cassandra-3.0.28\bin
// cassandra