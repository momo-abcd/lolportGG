var express = require('express');
var router = express.Router();
const reportPost = require('../modules/reportPost');

const multer = require('multer');
const path = require('path');
// const upload = multer({ dest:'/../public/uploads/', limits: { fileSize: 5 * 1024 * 1024 } });
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname,'..', 'public', 'uploads'));
        },
        filename: function (req, file, cb) {
            cb(null, new Date().valueOf() + path.extname(file.originalname));
        }
    }),
})
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('report');
});


/* report post page!! */
router.post('/searchId/', upload.single('attachment'),reportPost,function (req, res) {
    res.render('report');
} );
module.exports = router;
