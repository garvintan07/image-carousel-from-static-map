var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourpassword",
  database: "carousel"
});

connection.connect();

const getTheData = callback => {
  const query = "SELECT * FROM imageCarousel";
  connection.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      callback(null, result);
    }
  });
};

module.exports = getTheData;
