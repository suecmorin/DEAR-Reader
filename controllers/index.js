const router = require('express').Router();


const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const bookRoutes = require('./api/bookRoutes');
const userRoutes = require('./api/userRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/book', bookRoutes);
router.use('/user', userRoutes);

module.exports = router;

// router.get('/', async (req, res) => {
//     // Add a comment describing the purpose of the render method
//     // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
//     res.render('homepage.handlebars');
//   });

//   router.get('/api/userRoutes', async (req, res) => {
//     return res.render('user', User[req.params.num -1]);
//   });

  
// router
//     .post('/signup', function (req, res, next) {
//         let user = new User(req.body);    

//         user.save(function (err) {
//             if (err) res.send(err);
//             else res.json({message: 'user has been created'});
//         })

//     });

// module.exports = router;
