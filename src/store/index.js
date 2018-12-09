import uuid from 'uuid/v4';

const sketchbooks = [
  {
    title: 'My Sketchbook',
    description: '',
    url: '/books/book2/pdf/book2.pdf',
    coverImage: '',
    coverThumb: '/books/book2/thumbs/thumb1.jpg',
    thumbs: [
      '/books/book2/thumbs/thumb1.jpg',
      '/books/book2/thumbs/thumb2.jpg',
      '/books/book2/thumbs/thumb3.jpg',
      '/books/book2/thumbs/thumb4.jpg',
      '/books/book2/thumbs/thumb5.jpg',
      '/books/book2/thumbs/thumb6.jpg',
      '/books/book2/thumbs/thumb7.jpg',
      '/books/book2/thumbs/thumb8.jpg'
    ],
    images: [
      '/books/book2/images/page1.jpg',
      '/books/book2/images/page2.jpg',
      '/books/book2/images/page3.jpg',
      '/books/book2/images/page4.jpg',
      '/books/book2/images/page5.jpg',
      '/books/book2/images/page6.jpg',
      '/books/book2/images/page7.jpg',
      '/books/book2/images/page8.jpg'
    ]
  },
  {
    title: 'Another Sketchbook',
    description: '',
    url: '/books/example/pdf/example.pdf',
    coverImage: '',
    coverThumb: '/books/example/thumbs/thumb2.jpg',
    thumbs: [
      '/books/example/thumbs/thumb1.jpg',
      '/books/example/thumbs/thumb2.jpg',
      '/books/example/thumbs/thumb3.jpg',
      '/books/example/thumbs/thumb4.jpg',
      '/books/example/thumbs/thumb5.jpg',
      '/books/example/thumbs/thumb6.jpg'
    ],
    images: [
      '/books/example/images/page1.jpg',
      '/books/example/images/page2.jpg',
      '/books/example/images/page3.jpg',
      '/books/example/images/page4.jpg',
      '/books/example/images/page5.jpg',
      '/books/example/images/page6.jpg'
    ]
  },
  {
    title: 'My Sketchbook',
    description: '',
    url: '/books/book2/pdf/book2.pdf',
    coverImage: '',
    coverThumb: '/books/book2/thumbs/thumb1.jpg',
    thumbs: [
      '/books/book2/thumbs/thumb1.jpg',
      '/books/book2/thumbs/thumb2.jpg',
      '/books/book2/thumbs/thumb3.jpg',
      '/books/book2/thumbs/thumb4.jpg',
      '/books/book2/thumbs/thumb5.jpg',
      '/books/book2/thumbs/thumb6.jpg',
      '/books/book2/thumbs/thumb7.jpg',
      '/books/book2/thumbs/thumb8.jpg'
    ],
    images: [
      '/books/book2/images/page1.jpg',
      '/books/book2/images/page2.jpg',
      '/books/book2/images/page3.jpg',
      '/books/book2/images/page4.jpg',
      '/books/book2/images/page5.jpg',
      '/books/book2/images/page6.jpg',
      '/books/book2/images/page7.jpg',
      '/books/book2/images/page8.jpg'
    ]
  },
  {
    title: 'Another Sketchbook',
    description: '',
    url: '/books/example/pdf/example.pdf',
    coverImage: '',
    coverThumb: '/books/example/thumbs/thumb2.jpg',
    thumbs: [
      '/books/example/thumbs/thumb1.jpg',
      '/books/example/thumbs/thumb2.jpg',
      '/books/example/thumbs/thumb3.jpg',
      '/books/example/thumbs/thumb4.jpg'
    ],
    images: [
      '/books/example/images/page1.jpg',
      '/books/example/images/page2.jpg',
      '/books/example/images/page3.jpg',
      '/books/example/images/page4.jpg'
    ]
  }
];

export const sketchbooksSrcData = sketchbooks.reduce((allSketchbooks, currentSketchbook) => {
  const id = uuid();
  return ({
    ...allSketchbooks,
    [id]: {
      id,
      ...currentSketchbook
    }
  });
}, {});
