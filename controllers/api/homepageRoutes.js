const router = require('express').Router();
const { Comments } = require('../models');
const withAuth = require('../utils/auth');

//route to show all reviews for a single book
router.get('/', (req, res) => {
        Comments.findAll({
        where: { title: req.body.bookId },
        attributes: { include: ['user_id', 'comment', 'stars'] },
        order:  [['user_id', 'ASC']],
        }); 
    const comments = CommentsData.map((Comments) => 
      Comments.get ({plain: true }));
    res.json(Comments);
    })
    .catch((err) => {
    res.status(500).json(err);
    });



//route to create a new review
router.post('/:title',  (req, res) => {
    Comments.create(
        {
        title: req.body.title,
        user_id: req.body.email-login,
        comment: req.body.comment,
        stars: req.body.stars,
        },
            ).then((newComments) => {
          res.json(newComments);
        })
    .catch((err) => {
     res.json(err);
    });
});

//route to update an existing review
router.put('/:title', (req, res) => {
    Comments.update(
      {
        title: req.body.title,
        user_id: req.body.email-login,
        comment: req.body.comment,
        stars: req.body.stars,
      },
      {
        where: {
          title: req.params.title,
        },
      }
    )
      .then((updateComments) => {
        res.json(updatedComments);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });

module.exports = Router;
