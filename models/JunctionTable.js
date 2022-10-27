const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class JunctionTable extends Model {
  
}

JunctionTable.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'user_id',
      },
    },
   book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
  },
 {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'junctiontable',
  },
);

 module.exports = JunctionTable;