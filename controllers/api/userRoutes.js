//What does router.post('./create') do?
const router = require('express').Router();

const { User } = require('../../models');

router.post('./create', async (req, res) => {
  try {
    const userData = await userData(req.body.email);
//    const validPassword = await userData(req.body.password);
  const checkUser = await User.findOne({ where: { username } });
 if (userData === checkUser ) res.status(400).json({ message:  'User already exists, please try again' });
   return } catch (err) {
    res.status(400).json(err);
  }
});
     
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
