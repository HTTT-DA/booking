const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'dath',
    port: 9043
});

client.connect((err) => {
    if (err) {
        console.error('Failed to connect to Cassandra', err);
    }
})

module.exports = client;
