import React, { Component } from 'react';
import './App.css';
import { thumbs } from './store/';
import { pages } from './store/';
import { Reader } from './Reader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usePages: false,
      usePdf: true,
      displayFlipbook: false,
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
  }

  componentDidMount() {
  }

  // TODO better ids and parsing
  parseSketchbookNumber = url => {
    console.log(url);
    const sketchbookIndex = /\d+/.exec(url);
    const sketchbookNumber = parseInt(sketchbookIndex);
    console.log(sketchbookNumber);
    return sketchbookNumber;
  };

  // TODO move pdf links into store
  handleClick = e => {
    e.preventDefault();
    const { flipbooks } = this.state;
    const flipbookId = this.parseSketchbookNumber(e.target.parentNode.pathname);
    const pdfLink = 'real3d-flipbook/pdf/book2.pdf';
    this.setState({ displayFlipbook: true }, () => {
      this.refs.sketchbook1.flipbookSetPdf.then(loadFlipbook => (
        loadFlipbook(flipbooks[flipbookId].url)
      ));
    });
  };

  render() {
    const { usePages, usePdf, displayFlipbook } = this.state;
    console.log(displayFlipbook);
    return (
      <div className="app">
        <header className="app-header">Sketches Notebook</header>
        <div className="flipbook-selector">
          <p>`Real 3D Flipbook has lightbox feature - book can be displayed in the same page with lightbox effect.`</p>
          <p>`Click on a book cover to start reading.`</p>
          <a className="flipbook-link" onClick={e => this.handleClick(e)} href="sketchbook-1" ref="sketchbook1">
            <img src={thumbs[0]} alt="flipbook thumbnail" />
          </a>
        </div>
        {displayFlipbook && (
          <div id="flipbook-container">
            <Reader />
            {pages && usePages && (<div className="pages-test">using pages</div>)}
            {usePdf && (<div className="pdf-test">using pdf</div>)}
          </div>
        )}
      </div>
    );
  }
}

export default App;
