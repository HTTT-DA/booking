
/*async function getUserInformation(userid, information) {
  try {
    const client = await cassandra.connect();
    const query = "SELECT ? FROM customer WHERE customer_id = ?";
    const params = [information, email];
    const result = await client.execute(query, params, {prepare: true});
    return result.rows[0] || null;
  } catch (err) {
    return "Error getting user's email:" + err;
  }
}

module.exports = {getUserInformation};*/

