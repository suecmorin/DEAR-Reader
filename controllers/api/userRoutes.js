const router = require('express').Router();
const { response } = require('express');
const { User } = require('../../models');

//router.post('./create', async (req, res) => {
//  try {
//    const userData = await userData(req.body.email);
//    const validPassword = await userData(req.body.password);
//  const checkUser = await User.findOne({ where: { email: req.body.email } });
// if (userData === checkUser {
// res
// .status(400)
// .json({ message:  'User already exists, please try again' });
//   return;
 // }
 //router.post('/User', async (req, res) => {
// try {
//  res.newuser.create ({
 //   user_id:
 //   email: req.body.email
  //  password: req.body.password
   // }).then (function (newuser){
   //   if (newuser) {
   //     res.send(newuser);
   //   response.status(200).send('New user added');
   //      return;
    //  } else {
    //    response.status(400).send('Error in adding new user'); 
//        return;
    //  }
   // });
 // }):


router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
