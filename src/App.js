import React, { Component } from 'react';
import './App.css';
import { sketchbooks } from './store';
import { SketchbookReader } from './SketchbookReader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySelectedSketchbook: false,
      sketchbooks: {}
    };
  }

  componentDidMount() {
    this.state.sketchbooks !== sketchbooks && this.setState({ sketchbooks });
  }

  // TODO better ids and parsing
  parseSketchbookNumber = url => parseInt(/\d+/.exec(url));

  handleClick = e => {
    e.preventDefault();
    const { sketchbooks } = this.state;
    const bookId = this.parseSketchbookNumber(e.target.parentNode.pathname);
    this.setState({ displaySelectedSketchbook: true }, () => {
      this.refs[`sketchbook${bookId}`].flipbookSetPdf.then(loadFlipbook => (
        loadFlipbook(sketchbooks[bookId].url)
      ));
    });
  };

  render() {
    const { displaySelectedSketchbook, sketchbooks } = this.state;
    return (
      <div className="app">
        <header className="app-header">Sketches Notebook</header>
        {displaySelectedSketchbook
          ? <SketchbookReader />
          : <div className="flipbook-selector">
              <p>Real 3D Flipbook has lightbox feature - book can be displayed in the same page with lightbox effect.</p>
              <p>Click on a book cover to start reading.</p>
              {Object.values(sketchbooks).map(sketchbook => (
                <a
                  key={`sketchbook-${sketchbook.id}`}
                  className="sketchbook-link"
                  onClick={e => this.handleClick(e)}
                  href={`sketchbook-${sketchbook.id}`}
                  ref={`sketchbook${sketchbook.id}`}
                >
                  <img src={sketchbook.thumb} alt={`${sketchbook.title} thumbnail`} />
                </a>
              ))}
            </div>
        }
      </div>
    );
  }
}

export default App;
