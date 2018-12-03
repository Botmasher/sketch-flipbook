const { sketchbooks } = require('./sketchbooks');
const { sketchbooksSeedData } = require('./seedData');

// TODO ? .addMany returning all promises
sketchbooksSeedData.map(sketchbook => (
  sketchbooks.add(sketchbook)
));

module.exports = {
  sketchbooks
};
