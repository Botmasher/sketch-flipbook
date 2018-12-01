const uuid = require('uuid/v4');

const Sketchbooks {
  constructor() {
    this.data = {};
  }

  add = sketchbook => (
    new Promise(resolve => {
      const sketchbookId = uuid();
      this.data = {
        ...this.data,
        [sketchbookId]: {
          id: sketchbookId,
          title: sketchbook.title,
          coverThumb: sketchbook.coverThumb,
          url: sketchbook.url,
          thumbs: sketchbook.thumbs,
          images: sketchbook.images
        }
      };
      resolve(this.data);
    })
  );

  remove = sketchbookId => (
    new Promise(resolve => {
      ...
    })
  );

  update = (sketchbookId, sketchbookData) => (
    new Promise(resolve => {
      this.data = {
        ...this.data,
        [sketchbookId]: {
          ...sketchbooks[sketchbookId],
          ...sketchbookData
        }
      };
      resolve(this.data[sketchbookId]);
    })
  );

  getOne = sketchbookId => (
    new Promise(resolve => resolve(this.data[sketchbookId]))
  );

  getAll = () => (
    new Promise(resolve => resolve(this.data))
  );
}

const sketchbooks = new Sketchbooks();

module.exports = {
  sketchbooks
};
