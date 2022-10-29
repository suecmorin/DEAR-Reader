const router = require("express").Router();
const Books = require("../models/Books");

//This route accidentally gets the homepage, we need a different route for books
router.get("/", async (req, res) => {
  const bookData = await Books.findAll().catch((err) => {
    res.json(err);
  });
  const book = bookData.map((book) => book.get({ plain: true }));
  res.render("book", { book });
});

// This can be the route for books
router.get("/book", async (req, res) => {
  const bookData = await Books.findAll().catch((err) => {
    res.json(err);
  });
  //Is this the sequelize function?
  const book = bookData.map((book) => book.get({ plain: true }));
  res.render("book", { book });
});

// Route to get one book
router.get("/book/:id", async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id);
    if (!bookData) {
      res.status(404).json({ message: "No book with this id!" });
      return;
    }
    const book = bookData.get({ plain: true });
    res.render("book", book);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// const { User, Books } = require('../models');
// //const withAuth = require('../utils/auth');

// router.get('/user',/* withAuth,*/ async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((user) => user.get({ plain: true }));

//     res.render('homepage')
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

// module.exports = router;
