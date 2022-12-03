var express = require('express');
var router = express.Router();


/* GET login page. */
router.get('/', function(req, res) {
  if(req.session.user){
    res.redirect('/home')
  }
  else{
    res.render('index',{"loginError": req.session.loginError})
    req.loginError = false;
  }
}); 

const credentials = {
  email: 'abhimodiyil197@gmail.com',
  password: 'admin123'
}

// login to home
router.post('/login', (req, res) => {
  if(req.body.email == credentials.email && req.body.password == credentials.password){
    req.session.user = req.body.email;
    res.redirect('/home');
  }else{
    req.session.loginError = true;
    res.redirect('/')
  }
}); 

module.exports = router;