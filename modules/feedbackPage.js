const dbconfig = require('../DB/db');
const mysql = require('mysql');
const connection = mysql.createConnection(dbconfig);

const firstPage = function(req,res, next) {
  let query = 'SELECT id,name, ip, content FROM feedback_board ORDER BY id DESC LIMIT 0,5;'
  connection.query(query, (err, rows) => {
      if(err) console.log(err);
      req.body.data = rows;
      });
console.log('123123123',req.body.data);
next();
}


module.exports = firstPage;
