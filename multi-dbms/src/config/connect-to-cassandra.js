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

//Import data from csv file

/*
COPY DATH.customer (customer_id,email,full_name,display_name,phone_number,nationality,gender,address,language,currency,password,avatar) 
FROM 'C:/Users/ACER/Desktop/customer.csv' 
WITH HEADER = TRUE ;

COPY DATH.payment_detail (customer_id,payment_method,cardholder_name,card_number,cvc) 
FROM 'C:/Users/ACER/Desktop/payment_detail.csv' 
WITH HEADER = TRUE ;
*/
