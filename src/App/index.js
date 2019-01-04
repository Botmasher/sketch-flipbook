import React, { Component } from 'react';
import Header from '../Header/';
import Footer from '../Footer/';
import Routes from './Routes';
import { sketchbooksSrcData } from '../store/';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sketchbooks: {}
    };
  }

  loadFlipbookPdf = pdfUrl => (
    window.flipbookSetPdf
      .then(loadFlipbookUrl => loadFlipbookUrl(pdfUrl))
  );

  loadFlipbookImages = images => (
    window.flipbookSetPages
      .then(loadFlipbookPages => loadFlipbookPages(images))
  );

  // async call to jquery method in public index
  loadSketchbook = options => {
    if (!options.url && !options.images) return;
    console.log(options);
    const loadFlipbook = options.url ? this.loadFlipbookPdf : this.loadFlipbookImages;
    const flipbookData = options.url ? `${options.url}` : options.images;
    !(window.flipbookSetPdf && window.flipbookSetPages)
      // wait for window to attach method before loading first sketchbook
      ? window.addEventListener('load', () => loadFlipbook(flipbookData))
      : loadFlipbook(flipbookData)
    ;
  };

  componentDidMount() {
    this.setState({
      sketchbooks: sketchbooksSrcData
    });
  }

  render() {
    const { sketchbooks } = this.state;
    return (
      <div className="app">
        <Header />
        <Routes
          sketchbooks={sketchbooks}
          loadSketchbook={this.loadSketchbook}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
