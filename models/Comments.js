 const { Model, DataTypes } = require('sequelize');
 const sequelize = require('../config/connection');

 class Comments extends Model {
  
  }

Comments.init(
  {
  //  comment_id: {
  //   type: DataTypes.INTEGER,
  //    allowNull: false,
  //    primaryKey: true,
  //    autoIncrement: true,
  //  },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
     references: {
       model: 'comment',
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
