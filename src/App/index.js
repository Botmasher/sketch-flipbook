import React, { Component } from 'react';
import './App.css';
import { sketchbooks } from '../store/';
import { SketchbookLister, SketchbookReader } from '../Sketchbook/';

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

  loadSketchbook = sketchbookId => {
    if (!window.flipbookSetPdf) {
      // TODO wait for window to attach methods before loading first sketchbook on app load
      window.setTimeout(() => console.log(window.flipbookSetPdf), 1000);
      return;
    }
    window.flipbookSetPdf.then(loadFlipbook => (
      loadFlipbook(this.state.sketchbooks[sketchbookId].url)
    ));
  };

  selectSketchbook = sketchbookId => (
    sketchbookId && this.loadSketchbook(sketchbookId)
  );

  handleThumbClick = e => {
    e.preventDefault();
    const bookId = this.parseSketchbookNumber(e.target.parentNode.pathname);
    this.selectSketchbook(bookId);
  };

  componentDidMount() {
    this.state.sketchbooks !== sketchbooks && this.setState({
      sketchbooks,
      selectedSketchbookId: Object.keys(sketchbooks).length === 1 ? Object.keys(sketchbooks)[0] : ''
    }, () => this.selectSketchbook(this.state.selectedSketchbookId));
  }

  render() {
    const { selectedSketchbookId } = this.state;
    return (
      <div className="app">
        <div className="app-header">NativLang Sketchbooks</div>
        {!selectedSketchbookId
          ? <SketchbookLister
              sketchbooks={this.state.sketchbooks}
              handleThumbClick={this.handleThumbClick}
            />
          : <SketchbookReader
              sketchbook={this.state.sketchbooks[selectedSketchbookId]}
            />
        }
      </div>
    );
  }
}

export default App;
