const mysql = require("mysql2");

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: "your_host",
  user: "your_user",
  password: "your_password",
  database: "your_database",
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Perform a sample query
connection.query("SELECT * FROM your_table", (err, results, fields) => {
  if (err) {
    console.error("Error executing query:", err);
    return;
  }
  console.log("Query results:", results);
});

// Close the connection
connection.end((err) => {
  if (err) {
    console.error("Error closing connection:", err);
    return;
  }
  console.log("Connection closed");
});
