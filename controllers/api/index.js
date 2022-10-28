const router = require('express').Router();

const bookRoutes = require('./bookRoutes');
const userRoutes = require('./userRoutes');

router.use('/book', bookRoutes);
router.use('/user', userRoutes);

module.exports = router;

// const apiRoutes = require('../api');
// const homeRoutes = require('../homeRoutes');
// const userRoutes = require('./userRoutes');
// const bookRoutes = require('../api/bookRoutes');

// router.use('/api ', apiRoutes);
// router.use('/', homeRoutes);
// router.use('/users', userRoutes);
// router.use('/books', bookRoutes);

//what does this do?
// router.post('/users/login', );

// module.exports = router;
