const cassandra = require("../../config/connect-to-cassandra");

async function getUserByEmail(email) {
  try {
    const client = await cassandra.connect();
    const query = "SELECT * FROM customer WHERE email=?";
    const params = [email];
    const result = await client.execute(query, params, { prepare: true });
    return result.rows[0] || null;
  } catch (err) {
    return "Error getting user's email:" + err;
  }
}

module.exports = { getUserByEmail };
