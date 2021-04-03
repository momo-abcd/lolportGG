var express = require('express');
var router = express.Router();
const reportPost = require('../modules/reportPost');

const multer = require('multer');
const path = require('path');
// const upload = multer({ dest:'/../public/uploads/', limits: { fileSize: 5 * 1024 * 1024 } });
const fileFilter = (req, file, cb) => {
    // mime type 체크하여 이미지만 필터링
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        console.log("이미지 파일이 아닙니다!");
        req.fileErr = true;
        cb(null, false);
    }
}
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname,'..', 'public', 'uploads'));
        },
        filename: function (req, file, cb) {
            cb(null, new Date().valueOf() + path.extname(file.originalname));
        }
    }),
    fileFilter: fileFilter
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('report');
});


/* report post page!! */
router.post('/searchId/', upload.array('attachment'),reportPost,function (req, res) {
    res.render('alertPostSuccess');
} );
module.exports = router;
