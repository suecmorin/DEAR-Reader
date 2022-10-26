const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {
  
}

Comments.init(
  {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'book',
        key: 'title',
    },
    },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
          model: 'user',
          key: 'user_id',
      },
    },
    comment: {
      type: DataTypes.STRING,
      primaryKey: true,
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
