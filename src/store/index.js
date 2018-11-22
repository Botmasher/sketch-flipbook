import uuid from 'uuid/v4';

const sketchbooks = [
  {
    id: uuid(),
    title: 'My Sketchbook',
    thumb: 'real3d-flipbook/images/book2/thumb1.jpg',
    url: 'real3d-flipbook/pdf/book2.pdf'
  },
  {
    id: uuid(),
    title: 'Another Sketchbook',
    thumb: 'real3d-flipbook/images/book2/thumb2.jpg',
    url: 'real3d-flipbook/pdf/example.pdf'
  }
];

export const sketchbooksSrcData = sketchbooks.reduce((allSketchbooks, currentSketchbook) => ({
  ...allSketchbooks,
  [currentSketchbook.id]: {
    ...currentSketchbook
  }
}), {});
