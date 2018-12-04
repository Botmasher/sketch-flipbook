const { sketchbooks } = require('./sketchbooks');
const { links } = require('./links');
const { sketchbooksSeedData } = require('./seedData');

sketchbooksSeedData.map(sketchbook => {
  const sketchbookEntry = sketchbooks.add(sketchbook);
  links.add(sketchbookEntry.id, sketchbook);
});

module.exports = {
  sketchbooks
};
