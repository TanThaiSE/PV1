const pool = require("../db");

module.exports.DemoUser = async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  return res.json(result.rows);
};
