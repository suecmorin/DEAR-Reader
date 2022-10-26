const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Books extends Model {
  
}

Books.init(
  {
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    book_title: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    synopsis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pagecount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'user_id',
      },
    },
  },
 {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  },
);

 module.exports = Books;
