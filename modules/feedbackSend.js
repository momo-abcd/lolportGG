const dbconfig = require('../DB/db');
const mysql = require('mysql');
const connection = mysql.createConnection(dbconfig);


const feedbackSendMiddleware = function (req, res, next) {
  req.body.ip=req.connection.remoteAddress;
  checkValues(req.body)
  next();
}


const checkValues =  function(data){
  if(data.name != "" && data.text != "" && data.password !=""){
    doQuery(data);
  }
}

const doQuery = function(data){
  //let query = 'INSERT INTO feedback_board VALUES()';
  let query = 'INSERT INTO feedback_board (name, ip, content, password)  VALUES(' +`'${data.name}','${data.ip}','${data.text}','${data.password}')`;
  console.log(query);
  connection.query(query, (err, rows) => {
      if(err) console.log(err);
      });
  console.log(query);
  
}

module.exports = feedbackSendMiddleware;
