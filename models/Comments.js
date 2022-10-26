const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {
  
 }

Comments.init(
  {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    book_title: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'book',
        key: 'id',
    },
    },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
          model: 'user',
          key: 'id',
      },
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

 {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  },
);

module.exports = Comments;
