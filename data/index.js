const { sketchbooks } = require('./sketchbooks');
const { links } = require('./links');
const { sketchbooksSeedData } = require('./seedData');

sketchbooks.addMany(sketchbooksSeedData);

module.exports = {
  sketchbooks
};
