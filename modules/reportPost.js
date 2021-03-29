const fs = require('fs');
const path = require('path');

const mysql = require('mysql');
var axios = require('axios');
const dbconfig = require('../DB/db');
const connection = mysql.createConnection(dbconfig);

module.exports = function (req, res, next) {
    let name = encodeURI(req.body.nickname);
    const apiKey = 'RGAPI-9ed8373d-53ec-42b7-9c39-cc85f8dfc74a';
    let reqRiotApi = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/kr1?api_key=${apiKey}`
    try{
            axios.get(reqRiotApi)
            .then(axiosRes => {
            console.log('running')
                let option =[0,0,0,0,0];
                if(typeof(req.body.select) == 'object'){
                    for(let i=0; i< req.body.select.length;i++){
                        switch(req.body.select[i]){
                            case '고의적_죽음':
                                option[0]=1;
                                break;
    
                            case '욕설':
                                option[1]=1;
                                break;
                            
                            case '패드립':
                                option[2]=1;
                                break;
                            case '고의_트롤':
                                option[3]=1
                                break;
                            
                            case '픽창_악의적_닷지유도' :
                                option[4] = 1
                                break;
    
                            default :
                                break;
                        }
                    }
                }else {
                    switch(req.body.select){
                            case '고의적_죽음':
                                option[0]=1;
                                break;
    
                            case '욕설':
                                option[1]=1;
                                break;
                            
                            case '패드립':
                                option[2]=1;
                                break;
                            case '고의_트롤':
                                option[3]=1
                                break;
                            
                            case '픽창_악의적_닷지유도' :
                                option[4] = 1
                                break;
    
                            default :
                                break;
                        }
                }
                /* 한번 등록 된 아이디인지 검사하는 쿼리 */
                // let queryUser = 'INSERT INTO userInfo (puuid, 닉네임) VALUES '+ `('${axiosRes.data.puuid}','${axiosRes.data.gameName}')`;
                let isRegisterdQuery = `SELECT puuid FROM userInfo WHERE puuid='${axiosRes.data.puuid}'`;
            connection.query(isRegisterdQuery, (err,rows) => {
                if(err) console.log(err);
    
                    let inputDataQuery = 'INSERT INTO reportInfo (고의적_죽음, 욕설, 패드립, cs_뺏어먹기, 픽창_악의적_닷지유도, comment, puuid) VALUES ' + 
                                        `(${option[0]},${option[1]},${option[2]},${option[3]},${option[4]},'${req.body.comment}','${axiosRes.data.puuid}')`;
    
                    if(rows[0] == undefined){ /* 한번도 등록 되지 않았다면 userInfo 테이블에 등록후 reportInfo 테이블에 나머지 정보 입력  */
                            let regiQuery = 'INSERT INTO userInfo (puuid, 닉네임) VALUES '+ `('${axiosRes.data.puuid}','${axiosRes.data.gameName}')`;
                            connection.query(regiQuery, (err, rows) => {
                                console.log('등록 되었습니다.');
                            });
    
                            connection.query(inputDataQuery, (err, rows) => {
                                if(err) console.log(err);
                                console.log('inputQuery success!');
                            })
                    }else{                   /* 이미 등록 되어있다면 바로 reportInfo 테이블에 정보 입력 */
                            connection.query(inputDataQuery, (err, rows) => {
                                if(err) console.log(err);
                                console.log('inputQuery success!');
                            })
                    }
            }) 

                next();
            }).catch(err => {
                console.log('reportPost.js 에서 riotAPI 통신에 에러가 일어남! [ 98Line ] -->  error occured');
                fs.unlink(`${path.join(__dirname, '..', 'public', 'uploads')}/${req.file.filename}`,(err) => {
                    if(err) console.log(err);
                });
                res.render('alert')
            });
        }catch(err){
            console.log(err);
        }

}