import thumbsList from './thumbs';
import pagesList from './pages';

export const thumbs = thumbsList;
export const pages = pagesList;

const testData = {
  flipbooks: {
    1: {
      id: 1,
      title: 'My Sketchbook',
      thumb: '',
      url: 'real3d-flipbook/pdf/book2.pdf'
    },
    2: {
      id: 2,
      title: 'Some Other Book',
      url: '/sketchbooks/some-other-book.pdf'
    }
  }
};
