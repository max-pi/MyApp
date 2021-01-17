const hostname = '134.122.34.37';
const port = 80;
const express = require('express')
const app = express()
const path = require("path");

var mysql = require('mysql');
var con = mysql.createConnection({
  socketPath : '/var/run/mysqld/mysqld.sock',
  host: '134.122.34.37',
  port: '80',
  user: 'root',
  password: 'GoodGuy1n',
  database : 'aliens',
  insecureAuth : false 
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Database connected!");
});




app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});