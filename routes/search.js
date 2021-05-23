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
  let query1 = 
                'select * from ' + 
                '(select user.닉네임, report.리폿날짜, report.고의적_죽음, report.욕설, report.패드립, report.픽창_악의적_닷지유도, report.comment, report.Img ' +
                'FROM userInfo user INNER JOIN reportInfo report ' + 
                'ON user.puuid = report.puuid) c ' + 
                'where 닉네임= '+ `'${req.params.summonerName}';`;
  let query2 = "select count(*) as 총패드립수 from reportInfo where puuid=(select puuid from userInfo where 닉네임='" +req.params.summonerName + "') group by 패드립 having 패드립=1;"
  let query3 = "select count(*) as 총욕설수 from reportInfo where puuid=(select puuid from userInfo where 닉네임='" + req.params.summonerName + "') group by 욕설 having 욕설=1;"
  let query4 = "select count(*) as 총고의적_죽음수 from reportInfo where puuid=(select puuid from userInfo where 닉네임='" + req.params.summonerName + " ') group by 고의적_죽음 having 고의적_죽음=1;"
  let query5 = "select count(*) as 총cs_뺏어먹기수 from reportInfo where puuid=(select puuid from userInfo where 닉네임='" +req.params.summonerName + "') group by cs_뺏어먹기 having cs_뺏어먹기=1;"
  let query6 = "select count(*) as 총픽창_악의적_닷지유도수 from reportInfo where puuid=(select puuid from userInfo where 닉네임='" + req.params.summonerName + "') group by 픽창_악의적_닷지유도 having 픽창_악의적_닷지유도=1;"
  let query7 = "select Img from reportInfo where puuid=(select puuid from userInfo where 닉네임='" + req.params.summonerName + " ') and Img like '%;%'";
  let getQuery = query1 + query2 + query3 + query4 + query5 + query6 + query7;
               

  connection.query(getQuery,(err, rows, fields)  => {
    if(err){
      console.log(err);
    }
    let checkData=[]
    for(let i=1;i<6;i++){
      if(rows[i][0] != undefined){
        checkData.push(i);
      }
    }
    let allInfo=[];
    for(let i=0;i<checkData.length;i++){
      let obj = rows[checkData[i]][0]
      allInfo.push(obj[Object.keys(obj)[0]]);
    }

    console.log('-----------------------------------------');
    console.log(rows[6][0].Img);
    console.log(rows[6].length);
    allImgs = '';
    for(let i=0;i<rows[6].length;i++){
      allImgs += rows[6][i].Img;
    }
    allImgs += ';';
    console.log(allImgs);
    let arr = ['패드립수','욕설수','고의적죽음수','cs뺏어먹기수','닷지유도수'];

    let data1 = {
      패드립수: '',
      욕설수:'',
      고의적죽음수:'',
      cs뺏어먹기수:'',
      닷지유도수:'',
    }
    for(let i=1;i<6;i++){
      if(rows[i][0] != undefined){
        data1[arr[i-1]]=Object.values(rows[i][0])[0];
      }else {
        data1[arr[i-1]]=0;
      }
    }
    console.log('-----------------------------------------');

    /*
       순서!!
    let allInfo = {
      pedrip:rows[1][0].총패드립수,
      yoksul:rows[2][0].총욕설수,
      jookum:rows[3][0].총고의적_죽음수,
      cs:rows[4][0].총cs_뺏어먹기수,
      //dodge:rows[5][0].총픽창_악의적_닷지유도수,
    }
    */

    //console.log(allInfo)
    //res.render('search', {data:rows[0], allInfo:allInfo});
    res.render('search', {data:rows[0], allInfo:data1,allImgs:allImgs});
    
  })
});

module.exports = router;
