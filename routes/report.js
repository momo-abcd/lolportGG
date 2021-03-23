var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('report');
});
router.post('/searchId/', function(req, res, next) {

    let name = req.body.nickname;
    let apiURL = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/kr1?api_key=RGAPI-bcb587ca-bc74-4c62-97ea-a50ddc587a6b`

    // riot api module
    axios.get(apiURL)
    .then(axiosRes => {
        res.send(axiosRes.data);
    }).catch(err => {
        console.log('error occured');
        res.render('report');
    });
    // const {data, config} = await axios.get(apiURL);
    // console.log('asdasd');
    // res.send(req.body);
});
module.exports = router;
