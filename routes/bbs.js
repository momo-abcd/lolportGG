const dbconfig = require('../DB/db');
const mysql = require('mysql');
const connection = mysql.createConnection(dbconfig);

var express = require('express');
var router = express.Router();
const feedbackSendMiddleware = require('../modules/feedbackSend');
const feedbackPage = require('../modules/feedbackPage');

/* GET home page. */


router.get('/feedback/',feedbackPage, function(req, res, next) {
    let pageIndex= req.param('id');
    let pageIndexToSend =  req.param('id');
    if(pageIndex ==undefined || pageIndex < 0|| pageIndex ==0 || pageIndex == 1) {
      pageIndex = 0;
      pageIndexToSend = 1;
    }
    else{
      pageIndex = (pageIndex - 1) *10;
    }
  let query1 = `SELECT id,name, ip, content FROM feedback_board ORDER BY id DESC LIMIT ${pageIndex},10;`
  let query2 = 'SELECT COUNT(*) AS cnt from feedback_board;';
  let QUERY = query1 + query2;

  connection.query(QUERY, (err, rows) => {
      if(err) console.log(err);
      //req.body.data = rows;
      let data = rows[0];
      let cnt = rows[1][0].cnt;
			res.render('feedback.ejs',{data:data,pageIndex:pageIndexToSend, cnt:cnt});
      //res.render('feedback.ejs')
      });
});


router.get('/feedback_page/', function(req, res, next) {
  //res.render('feedback.ejs');
    res.send('hellow');
});


router.post('/feedback_send/',feedbackSendMiddleware, function(req, res) {
    res.redirect('/bbs/feedback/');
});


module.exports = router;
