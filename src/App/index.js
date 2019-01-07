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

  loadFlipbook = pdfUrl => (
    window.flipbookSetPdf
      .then(loadFlipbookPdf => loadFlipbookPdf(pdfUrl))
  );

  // async call to jquery method in public index
  loadSketchbook = sketchbookId => {
    const { sketchbooks } = this.state;
    if (!(sketchbooks && sketchbooks[sketchbookId])) return;
    const pdfUrl = `${sketchbooks[sketchbookId].url}`;
    console.log(pdfUrl);
    !(window.flipbookSetPdf)
      // wait for window to attach method before loading first sketchbook
      ? window.addEventListener('load', () => this.loadFlipbook(pdfUrl))
      : this.loadFlipbook(pdfUrl)
    ;
  };

  componentDidMount() {
    console.log("Reloading the entire app...");
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
