const sequelize = require('../config/connection');
const seedBook = require('./bookData.json');
const seedComments = require('./commentData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBook();

  await seedComments();

  process.exit(0);
};

seedAll();