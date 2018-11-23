import React, { Component } from 'react';
import './App.css';
import { sketchbooksSrcData } from '../store/';
import { SketchbookLister, SketchbookReader } from '../Sketchbook/';

// TODO router/history (back button from pdf)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSketchbookId: '',
      sketchbooks: {}
    };
  }

  // async call to jquery method in public index
  setPdf = url => {
    !window.flipbookSetPdf
      // wait for window to attach method before loading first sketchbook
      ? window.addEventListener('load', () => (
          window.flipbookSetPdf.then(loadFlipbook => loadFlipbook(url))
        ))
      : window.flipbookSetPdf.then(loadFlipbook => loadFlipbook(url))
    ;
  };

  loadSketchbook = sketchbook => this.setPdf(sketchbook.url);

  handleThumbClick = (e, sketchbook) => {
    e.preventDefault();
    this.setState({ selectedSketchbookId: sketchbook.id }, () => (
      this.loadSketchbook(sketchbook)
    ));
  };

  componentDidMount() {
    const sketchbookIds = Object.keys(sketchbooksSrcData);
    this.state.sketchbooks !== sketchbooksSrcData && this.setState({
      sketchbooks: { ...sketchbooksSrcData },
      selectedSketchbookId: sketchbookIds.length === 1 ? sketchbookIds[0] : ''
    }, () => this.loadSketchbook(Object.values(this.state.sketchbooks)[0]));
  }

  render() {
    const { selectedSketchbookId, sketchbooks } = this.state;
    return (
      <div className="app">
        <div className="app-header">NativLang Sketchbooks</div>
        {!selectedSketchbookId
          ? <SketchbookLister
              sketchbooks={Object.values(sketchbooks)}
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
