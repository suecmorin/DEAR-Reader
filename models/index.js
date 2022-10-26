const User = require('./User');
const Books = require('./Books');
const Comments = require('./Comments');

User.hasMany(Books, {
    foreignKey: 'user_id'
});

User.hasMany(Comments, {
    foreignKey: 'user_id'
});

Books.belongsTo(User, {
    foreignKey: 'user_id'
});

Books.hasMany(Comments, {
<<<<<<< HEAD
    foreignKey: 'book_id'
=======
    foreignKey: 'user_id'
>>>>>>> d4932933880afc8c0d0d1df5d3a2cfeb37d7549b
});

Comments.belongsTo(User, {
    foreignKey: 'user_id'
});

Comments.belongsTo(Books, {
<<<<<<< HEAD
    foreignKey: 'book_id'
=======
    foreignKey: 'user_id'
>>>>>>> d4932933880afc8c0d0d1df5d3a2cfeb37d7549b
});

module.exports = { User, /*Books,Comments*/ };

