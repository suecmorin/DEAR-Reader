// const sequelize = require('../config/connection');
// const Books = require('../models/Books');
// const bookData = require('./bookData.json');

// const seedDatabase = async () => {
  
//   await sequelize.sync({ force: false });

//   await Books.bulkCreate(bookData, {
//     individualHooks: true,
//     returning: true,
//   });

  
//   process.exit(0);
// };

// seedDatabase();