import React, { Component } from 'react';
import Header from '../Header/';
import Footer from '../Footer/';
import Routes from './Routes';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sketchbooks: {}
    };
  }

  // async call to jquery method in public index
  loadSketchbookPdf = url => {
    const pdfUrl = `${url}`;
    !window.flipbookSetPdf
      // wait for window to attach method before loading first sketchbook
      ? window.addEventListener('load', () => (
          window.flipbookSetPdf.then(loadFlipbook => loadFlipbook(pdfUrl))
        ))
      : window.flipbookSetPdf.then(loadFlipbook => loadFlipbook(pdfUrl))
    ;
  };

  fetchSketchbooks = () => fetch(`/api/sketchbooks/`).then(res => res.json());

  componentDidMount() {
    this.fetchSketchbooks()
      .then(sketchbooks => this.setState({ sketchbooks }))
    ;
  }

  render() {
    const { sketchbooks } = this.state;
    return (
      <div className="app">
        <Header />
        <Routes
          sketchbooks={sketchbooks}
          loadSketchbookPdf={this.loadSketchbookPdf}
        />
        <Footer />
      </div>
    );
  }
}

export default App;