const { sketchbooks } = require('./sketchbooks');
const { sketchbooksSeedData } = require('./seedData');

sketchbooks.addMany(sketchbooksSeedData);

module.exports = {
  sketchbooks
};
