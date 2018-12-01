const { sketchbooks } = require('./sketchbooks');

const sketchbooksExampleData = [
  {
    title: 'My Sketchbook1234',
    coverImage: '',
    coverThumb: '/images/thumb1.jpg',
    url: '/pdf/book2.pdf',
    thumbs: [
      '/images/thumb1.jpg',
      '/images/thumb2.jpg',
      '/images/thumb3.jpg',
      '/images/thumb4.jpg',
      '/images/thumb5.jpg',
      '/images/thumb6.jpg',
      '/images/thumb7.jpg',
      '/images/thumb8.jpg'
    ],
    images: [
      '/images/page1.jpg',
      '/images/page2.jpg',
      '/images/page3.jpg',
      '/images/page4.jpg',
      '/images/page5.jpg',
      '/images/page6.jpg',
      '/images/page7.jpg',
      '/images/page8.jpg'
    ]
  },
  {
    title: 'Another Sketchbook',
    coverImage: '',
    coverThumb: '/images/thumb2.jpg',
    url: '/pdf/example.pdf',
    thumbs: [
      '/images/thumb1.jpg',
      '/images/thumb2.jpg',
      '/images/thumb3.jpg',
      '/images/thumb4.jpg',
      '/images/thumb5.jpg',
      '/images/thumb6.jpg'
    ],
    images: [
      '/images/page1.jpg',
      '/images/page2.jpg',
      '/images/page3.jpg',
      '/images/page4.jpg',
      '/images/page5.jpg',
      '/images/page6.jpg'
    ]
  },
  {
    title: 'Otro cuaderno mío',
    coverImage: '',
    coverThumb: '/images/thumb1.jpg',
    url: '/pdf/book2.pdf',
    thumbs: [
      '/images/thumb1.jpg',
      '/images/thumb2.jpg',
      '/images/thumb3.jpg',
      '/images/thumb4.jpg',
      '/images/thumb5.jpg',
      '/images/thumb6.jpg',
      '/images/thumb7.jpg',
      '/images/thumb8.jpg'
    ],
    images: [
      '/images/page1.jpg',
      '/images/page2.jpg',
      '/images/page3.jpg',
      '/images/page4.jpg',
      '/images/page5.jpg',
      '/images/page6.jpg',
      '/images/page7.jpg',
      '/images/page8.jpg'
    ]
  },
  {
    title: 'One Last Sketchbook',
    coverImage: '',
    coverThumb: '/images/thumb2.jpg',
    url: '/pdf/example.pdf',
    thumbs: [
      '/images/thumb1.jpg',
      '/images/thumb2.jpg',
      '/images/thumb3.jpg',
      '/images/thumb4.jpg'
    ],
    images: [
      '/images/page1.jpg',
      '/images/page2.jpg',
      '/images/page3.jpg',
      '/images/page4.jpg'
    ]
  }
];

// TODO ? .addMany returning all promises
sketchbooksExampleData.map(sketchbook => (
  sketchbooks.add(sketchbook)
);

// NOTE updated to store obj not array
// const sketchbooksById = sketchbooks.reduce((allSketchbooks, currentSketchbook) => ({
//   ...allSketchbooks,
//   [currentSketchbook.id]: {
//     ...currentSketchbook
//   }
// }), {});

module.exports = {
  sketchbooks
};
