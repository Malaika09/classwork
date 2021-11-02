var express = require('express');
var userC = require('../controllers/userc');
var router = express.Router();

/* GET users listing. */
router.get('/', userC.userController);
router.get('/addUser', function(req, res){
    res.render('addUser');
});
router.post('/addData', userC.userAdd );
module.exports = router;
