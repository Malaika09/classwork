module.exports.userController = function(req, res, next) {
    res.render('users', { name: 'Malaika' });
  }

module.exports.userAdd = function(req, res){
  var name = req.body.Uname;
  res.send(name);
}