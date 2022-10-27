const sequelize = require('../config/connection');
const seedBook = require('./bookData.json');
const seedComments = require('./commentData.json');

const seedAll = async () => {
  // Should we change this to force: false as well?
  await sequelize.sync({ force: true });

  await seedBook();

  await seedComments();

  process.exit(0);
};

seedAll();