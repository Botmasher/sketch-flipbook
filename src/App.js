import React, { Component } from 'react';
import './App.css';
import { thumbs } from './store/';
import { pages } from './store/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  ComponentDidMount() {
    console.log(this.refs);
    // this.refs.flipbook.flipBook({
    //   pdfUrl: 'real3d-flipbook/pdf/book2.pdf'
    // });
  }

  render() {
    const usePages = false;
    //const usePdf = true;
    return (
      <div className="app">
        <header className="app-header">Sketches Notebook</header>
        <div id="flipbook-container" ref="flipbook">
          <p>`Real 3D Flipbook has lightbox feature - book can be displayed in the same page with lightbox effect.`</p>
          <p>`Click on a book cover to start reading.`</p>
          <img src={thumbs[0]} alt="flipbook thumbnail" />
          {pages && usePages && (<div></div>)}
        </div>
      </div>
    );
  }
}

export default App;
