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
      usePdf: true
    };
  }

  componentDidMount() {
    console.log("looking for refs...");
    console.log(this.refs.flipbook);
    // this.refs.flipbook.flipBook({
    //   pdfUrl: 'real3d-flipbook/pdf/book2.pdf'
    // });
  }

  handleClick = e => {
    e.preventDefault();
    console.log("click pdf load callback run in index.html - now set UI here");
  };

  render() {
    const { usePages, usePdf } = this.state;
    console.log("in App component");
    return (
      <div className="app">
        <header className="app-header">Sketches Notebook</header>
        <div id="flipbook-container" ref="flipbook">
          <p>`Real 3D Flipbook has lightbox feature - book can be displayed in the same page with lightbox effect.`</p>
          <p>`Click on a book cover to start reading.`</p>
          <a className="flipbook-pdf" onClick={e => this.handleClick(e)} href="real3d-flipbook/pdf/book2.pdf">
            <img src={thumbs[0]} alt="flipbook thumbnail" />
          </a>
          <Reader />
          {pages && usePages && (<div className="pages-test"></div>)}
          {usePdf && (<div className="pdf-test"></div>)}
        </div>
      </div>
    );
  }
}

export default App;
