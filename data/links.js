const uuid = require('uuid/v4');

class Links {
  constructor() {
    this.data = {};
  }

  add(sketchbookId, linkSet) {
    return new Promise(resolve => {
      const id = uuid();
      this.data = {
        ...this.data,
        [id]: {
          id,
          sketchbookId,
          coverThumb: linkSet.coverThumb,
          url: linkSet.url,
          thumbs: linkSet.thumbs,
          images: linkSet.images
        }
      };
      resolve(this.data);
    });
  }

  addMany(linkSets) {
    return new Promise(resolve => {
      const addedLinks = linkSets.reduce((allNewLinkSets, currentLinkSet) => {
        const id = uuid();
        return({
          ...allNewLinkSets,
          [id]: {
            id,
            ...currentLinkSet
          }
        });
      }, {});
      this.data = {
        ...this.data,
        ...addedLinks
      };
      resolve(this.data);
    });
  }

  remove(linkSetId) {
    return new Promise(resolve => {
      this.data = Object.keys(this.data).reduce((retainedEntries, entryId) => (
        entryId === linkSetId
          ? { ...retainedEntries }
          : { ...retainedEntries, [entryId]: { ...this.data[entryId] } }
      ), {});
      resolve(this.data);
    });
  }

  update(linkSetId, linkSetData) {
    return new Promise(resolve => {
      this.data = {
        ...this.data,
        [linkSetId]: {
          ...this.data[linkSetId],
          ...linkSetData
        }
      };
      resolve(this.data[linkSetId]);
    });
  }

  get(linkSetId) {
    return new Promise(resolve => resolve(this.data[linkSetId]))
  }

  getAll() {
    return new Promise(resolve => resolve(this.data))
  }
}

const links = new Links();

module.exports = {
  links
};
