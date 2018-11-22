import React, { Component } from 'react';
import './App.css';
import { sketchbooksSrcData } from '../store/';
import { SketchbookLister, SketchbookReader } from '../Sketchbook/';

// TODO router/history (back button from pdf)

class App extends Component {
  constructor(props) {
    super(props);
    this.linkPrefix = 'sketchbook-';
    this.state = {
      selectedSketchbookId: '',
      sketchbooks: {}
    };
  }

  parseSketchbookId = url => url.split('-').slice(1).join('-');

  // async call to jquery method in public index
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
    const sketchbookId = this.parseSketchbookId(e.target.parentNode.pathname);
    this.setState({ selectedSketchbookId: sketchbookId }, () => (
      this.loadSketchbook(sketchbookId)
    ));
  };

  componentDidMount() {
    const { sketchbooks, selectedSketchbookId } = this.state;
    const sketchbookIds = Object.keys(sketchbooksSrcData);
    sketchbooks !== sketchbooksSrcData && this.setState({
      sketchbooks: { ...sketchbooksSrcData },
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
              linkPrefix={this.linkPrefix}
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
