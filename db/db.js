const mysql = require("mysql");

const con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "newt",
});


con.getConnection((error, connection) => {
  if (error) {
    console.log("Error: " + error);
    return;
  }
  console.log("Conectado a la bd");

  });

module.exports = con;
