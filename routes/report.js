var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('report');
//   res.render('index', { title: 'Express' });
});

// router.get('/searchID', function(req, res, next) {
//     res.render('report');
// //   res.render('index', { title: 'Express' });
// });

router.post('/searchId/', function(req, res, next) {
    // console.log(req);
    res.send(req.body.select[0]);


    // riot api module
    // axios.post('https://naver.com')
    // .then(resp => {
    //     res.send(resp.data);
    // }).catch(err => {
    //     console.log(err);
    // });
});
module.exports = router;
