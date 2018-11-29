const { sketchbooks } = require('./sketchbooks');

const sketchbooksById = sketchbooks.reduce((allSketchbooks, currentSketchbook) => ({
  ...allSketchbooks,
  [currentSketchbook.id]: {
    ...currentSketchbook
  }
}), {});

module.exports = {
  sketchbooksById
};
