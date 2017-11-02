const router = require('express').Router(),
      User   = require('../models/user');

router.get("/", (req, res, next) => {
  res.render('main/landing');
  // res.json('thojo');
});

router.get('/create-new-user', (req, res,next) =>{
  var user = new User();
  user.email = "sample@gmail.com";
  user.name = "Hillary";
  user.password = "Hello";
  user.save(function(err){
    if(err) return next(err);
    res.json("successfully created user");
  })
});

module.exports = router;
