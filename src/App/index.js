import React, { Component } from 'react';
import './App.css';
import { sketchbooksSrcData } from '../store/';
import { SketchbookLister, SketchbookReader } from '../Sketchbook/';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

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
      selectedSketchbookId: sketchbookIds[0]
    }, () => this.loadSketchbook(Object.values(this.state.sketchbooks)[0]));
  }

  render() {
    const { selectedSketchbookId } = this.state;
    const sketchbooks = Object.values(this.state.sketchbooks);
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={() => (
            <SketchbookLister
              sketchbooks={sketchbooks}
              handleThumbClick={this.handleThumbClick}
            />
          )} />
          <Route path="/:sketchbook" component={() => (
            <SketchbookReader
              sketchbook={sketchbooks[selectedSketchbookId]}
            />
          )} />
          <Route component={() => (
            <div>Page not found.</div>
          )} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
