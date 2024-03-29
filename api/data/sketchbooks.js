const uuid = require('uuid/v4');

class Sketchbooks {
  constructor() {
    this.data = {};
  }

  add(sketchbook) {
    return new Promise(resolve => {
      const sketchbookId = uuid();
      this.data = {
        ...this.data,
        [sketchbookId]: {
          id: sketchbookId,
          title: sketchbook.title,
          description: sketchbook.description ? sketchbook.description : '',
          coverThumb: linkSet.coverThumb,
          url: linkSet.url,
          thumbs: linkSet.thumbs,
          images: linkSet.images
        }
      };
      resolve(this.data);
    });
  }

  addMany(sketchbooks) {
    return new Promise(resolve => {
      const addedSketchbooks = sketchbooks.reduce((allNewSketchbooks, sketchbook) => {
        const id = uuid();
        return({
          ...allNewSketchbooks,
          [id]: {
            id,
            ...sketchbook
          }
        });
      }, {});
      this.data = {
        ...this.data,
        ...addedSketchbooks
      };
      resolve(this.data);
    });
  }

  remove(sketchbookId) {
    return new Promise(resolve => {
      this.data = Object.keys(this.data).reduce((retainedEntries, entryId) => (
        entryId === sketchbookId
          ? { ...retainedEntries }
          : { ...retainedEntries, [entryId]: { ...this.data[entryId] } }
      ), {});
      resolve(this.data);
    });
  }

  update(sketchbookId, sketchbookData) {
    return new Promise(resolve => {
      this.data = {
        ...this.data,
        [sketchbookId]: {
          ...sketchbooks[sketchbookId],
          ...sketchbookData
        }
      };
      resolve(this.data[sketchbookId]);
    });
  }

  get(sketchbookId) {
    return new Promise(resolve => resolve(this.data[sketchbookId]))
  }

  getAll() {
    return new Promise(resolve => resolve(this.data))
  }
}

const sketchbooks = new Sketchbooks();

module.exports = {
  sketchbooks
};
