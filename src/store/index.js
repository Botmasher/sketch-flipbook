const sketchbooks = [
  {
    id: 'nativlang-sketchbook',
    title: 'NativLang Sketchbook',
    description: '',
    about: 'http://www.patreon.com/NativLang',
    url: '/books/sketchbook/pdf/sketchbook.pdf',
    coverThumb: '/books/sketchbook/thumbs/000-front-recto.jpg',
    coverImage: '/books/sketchbook/images/000-front-recto.jpg',
    thumbs: [
      '/books/sketchbook/thumbs/000-front-recto.jpg',
      '/books/sketchbook/thumbs/000-front-verso.jpg',
      '/books/sketchbook/thumbs/001-early.jpg',
      '/books/sketchbook/thumbs/002-early.jpg',
      '/books/sketchbook/thumbs/003-early.jpg',
      '/books/sketchbook/thumbs/004-early.jpg',
      '/books/sketchbook/thumbs/005-etruscan.jpg',
      '/books/sketchbook/thumbs/006-bts-tattered-folder.jpg',
      '/books/sketchbook/thumbs/007-middle-chinese.jpg',
      '/books/sketchbook/thumbs/008-kinship.jpg',
      '/books/sketchbook/thumbs/009-asymmetric-intelligibility.jpg',
      '/books/sketchbook/thumbs/010-bts-scars.jpg',
      '/books/sketchbook/thumbs/011-danish.jpg',
      '/books/sketchbook/thumbs/012-middle-mongol.jpg',
      '/books/sketchbook/thumbs/013-blank.jpg',
      '/books/sketchbook/thumbs/014-blank.jpg',
      '/books/sketchbook/thumbs/998-patron-names.jpg',
      '/books/sketchbook/thumbs/999-back-recto.jpg',
      '/books/sketchbook/thumbs/999-back-verso.jpg',
    ],
    images: [
      '/books/sketchbook/images/000-front-recto.jpg',
      '/books/sketchbook/images/000-front-verso.jpg',
      '/books/sketchbook/images/001-early.png',
      '/books/sketchbook/images/002-early.png',
      '/books/sketchbook/images/003-early.png',
      '/books/sketchbook/images/004-early.png',
      '/books/sketchbook/images/005-etruscan.png',
      '/books/sketchbook/images/006-bts-tattered-folder.png',
      '/books/sketchbook/images/007-middle-chinese.png',
      '/books/sketchbook/images/008-kinship.png',
      '/books/sketchbook/images/009-asymmetric-intelligibility.png',
      '/books/sketchbook/images/010-bts-scars.png',
      '/books/sketchbook/images/011-danish.png',
      '/books/sketchbook/images/012-middle-mongol.png',
      '/books/sketchbook/images/013-blank.png',
      '/books/sketchbook/images/014-blank.png',
      '/books/sketchbook/images/998-patron-names.png',
      '/books/sketchbook/images/999-back-recto.jpg',
      '/books/sketchbook/images/999-back-verso.png',
    ]
  },
  /*
   *  Demo/test flipbooks data below
   */
  // {
  //   id: 'test-flipbook-1',
  //   title: 'My Sketchbook',
  //   description: '',
  //   url: '/books/book2/pdf/book2.pdf',
  //   coverThumb: '/books/book2/thumbs/thumb1.jpg',
  //   coverImage: '',
  //   thumbs: [
  //     '/books/book2/thumbs/thumb1.jpg',
  //     '/books/book2/thumbs/thumb2.jpg',
  //     '/books/book2/thumbs/thumb3.jpg',
  //     '/books/book2/thumbs/thumb4.jpg',
  //     '/books/book2/thumbs/thumb5.jpg',
  //     '/books/book2/thumbs/thumb6.jpg',
  //     '/books/book2/thumbs/thumb7.jpg',
  //     '/books/book2/thumbs/thumb8.jpg'
  //   ],
  //   images: [
  //     '/books/book2/images/page1.jpg',
  //     '/books/book2/images/page2.jpg',
  //     '/books/book2/images/page3.jpg',
  //     '/books/book2/images/page4.jpg',
  //     '/books/book2/images/page5.jpg',
  //     '/books/book2/images/page6.jpg',
  //     '/books/book2/images/page7.jpg',
  //     '/books/book2/images/page8.jpg'
  //   ]
  // },
  // {
  //   id: 'test-flipbook-2',
  //   title: 'Another Sketchbook',
  //   description: '',
  //   url: '/books/example/pdf/example.pdf',
  //   coverThumb: '/books/example/thumbs/thumb2.jpg',
  //   coverImage: '',
  //   thumbs: [
  //     '/books/example/thumbs/thumb1.jpg',
  //     '/books/example/thumbs/thumb2.jpg',
  //     '/books/example/thumbs/thumb3.jpg',
  //     '/books/example/thumbs/thumb4.jpg',
  //     '/books/example/thumbs/thumb5.jpg',
  //     '/books/example/thumbs/thumb6.jpg'
  //   ],
  //   images: [
  //     '/books/example/images/page1.jpg',
  //     '/books/example/images/page2.jpg',
  //     '/books/example/images/page3.jpg',
  //     '/books/example/images/page4.jpg',
  //     '/books/example/images/page5.jpg',
  //     '/books/example/images/page6.jpg'
  //   ]
  // }
];

export const sketchbooksSrcData = sketchbooks.reduce((allSketchbooks, currentSketchbook) => {
  return ({
    ...allSketchbooks,
    [currentSketchbook.id]: {
      ...currentSketchbook
    }
  });
}, {});
