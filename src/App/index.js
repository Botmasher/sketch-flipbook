import React, { Component } from 'react';
import './App.css';
import { sketchbooks } from '../store/';
import { SketchbookLister } from '../Sketchbook/';
import { SketchbookReader } from '../Sketchbook/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSketchbookId: {},
      sketchbooks: {}
    };
  }

  componentDidMount() {
    this.state.sketchbooks !== sketchbooks && this.setState(
      { sketchbooks },
      () => Object.keys(sketchbooks).length === 1 && this.selectSketchbook(Object.keys(sketchbooks)[0])
    );
  }

  // TODO better ids and parsing
  parseSketchbookNumber = url => parseInt(/\d+/.exec(url));

  selectSketchbook = sketchbookId => {
    const { sketchbooks } = this.state;
    this.setState({ selectedSketchbookId: sketchbookId }, () => {
      this.refs[`sketchbook${sketchbookId}`].flipbookSetPdf.then(loadFlipbook => (
        loadFlipbook(sketchbooks[sketchbookId].url)
      ));
    });
  };

  handleThumbClick = e => {
    e.preventDefault();
    const bookId = this.parseSketchbookNumber(e.target.parentNode.pathname);
    this.selectSketchbook(bookId);
  };

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
