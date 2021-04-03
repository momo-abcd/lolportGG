var express = require('express');
var router = express.Router();

/* query 관련 모듈 */
const mysql = require('mysql');
const dbconfig = require('../DB/db');
const connection = mysql.createConnection(dbconfig);

router.get('/userName/', function(req, res, next) {
  if(req.query.summonerName) {
    res.redirect(`/search/userName/${req.query.summonerName}`);
  }else {
    res.send('123123123123');
  }
});
router.get('/userName/:summonerName', function(req, res, next) {
  let getQuery = 
                'select * from ' + 
                '(select user.닉네임, report.리폿날짜, report.고의적_죽음, report.욕설, report.패드립, report.픽창_악의적_닷지유도, report.comment, report.Img ' +
                'FROM userInfo user INNER JOIN reportInfo report ' + 
                'ON user.puuid = report.puuid) c ' + 
                'where 닉네임= '+ `'${req.params.summonerName}'`

  connection.query(getQuery,(err, rows, fields)  => {
    if(err) console.log(err);
    res.render('search', {data:rows});
  })
});

module.exports = router;
