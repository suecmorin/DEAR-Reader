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
    foreignKey: 'user_id'
});

Comments.belongsTo(User, {
    foreignKey: 'user_id'
});

Comments.belongsTo(Books, {
    foreignKey: 'user_id'
});

module.exports = { User, /*Books,Comments*/ };

