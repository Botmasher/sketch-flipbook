import React, { Component } from 'react';
import './App.css';
import { sketchbooksSrcData } from '../store/';
import { SketchbookLister, SketchbookReader } from '../Sketchbook/';

// TODO routing (hit back button)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSketchbookId: '',
      sketchbooks: {}
    };
  }

  // TODO better ids and parsing
  parseSketchbookNumber = url => parseInt(/\d+/.exec(url));

  setPdf = url => {
    !window.flipbookSetPdf
      // wait for window to attach method before loading first sketchbook
      ? window.addEventListener('load', () => {
          window.flipbookSetPdf.then(loadFlipbook => loadFlipbook(url));
          console.log('setPdf');
        })
      : window.flipbookSetPdf.then(loadFlipbook => loadFlipbook(url))
    ;
  };

  loadSketchbook = sketchbookId => {
    if (!sketchbookId) return;
    const { url } = this.state.sketchbooks[sketchbookId];
    this.setPdf(url);
  };

  handleThumbClick = e => {
    e.preventDefault();
    const bookId = this.parseSketchbookNumber(e.target.parentNode.pathname);
    this.setState({ selectedSketchbookId: bookId }, () => (
      this.loadSketchbook(bookId)
    ));
  };

  componentDidMount() {
    const { sketchbooks, selectedSketchbookId } = this.state;
    const sketchbookIds = Object.keys(sketchbooksSrcData);
    sketchbooks !== sketchbooksSrcData && this.setState({
      sketchbooks: sketchbooksSrcData,
      selectedSketchbookId: sketchbookIds.length === 1 ? sketchbookIds[0] : ''
    }, () => this.loadSketchbook(selectedSketchbookId));
  }

  render() {
    const { selectedSketchbookId, sketchbooks } = this.state;
    return (
      <div className="app">
        <div className="app-header">NativLang Sketchbooks</div>
        {!selectedSketchbookId
          ? <SketchbookLister
              sketchbooks={sketchbooks}
              handleThumbClick={this.handleThumbClick}
            />
          : <SketchbookReader
              sketchbook={sketchbooks[selectedSketchbookId]}
            />
        }
      </div>
    );
  }
}

export default App;
