import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { sketchbooksSrcData } from '../store/';
import { SketchbookLister, SketchbookReader } from '../Sketchbook/';
import Header from './Header';
import Footer from './Footer';
import './styles.css';

// TODO data server - book ids rewrite every load, etc.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSketchbookId: '',
      sketchbooks: {}
    };
  }

  // async call to jquery method in public index
  loadSketchbookPdf = url => {
    !window.flipbookSetPdf
      // wait for window to attach method before loading first sketchbook
      ? window.addEventListener('load', () => (
          window.flipbookSetPdf.then(loadFlipbook => loadFlipbook(url))
        ))
      : window.flipbookSetPdf.then(loadFlipbook => loadFlipbook(url))
    ;
  };

  componentDidMount() {
    this.state.sketchbooks !== sketchbooksSrcData && this.setState({
      sketchbooks: { ...sketchbooksSrcData }
    });
  }

  render() {
    const { sketchbooks } = this.state;
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" render={props => (
            <SketchbookLister
              {...props}
              sketchbooks={Object.values(sketchbooks)}
            />
          )} />
          <Redirect exact from="/sketchbooks/" to="/" />
          <Route path="/sketchbooks/:sketchbookId" render={props => (
            <SketchbookReader
              {...props}
              sketchbook={sketchbooks[props.match.params.sketchbookId]}
              loadSketchbookPdf={this.loadSketchbookPdf}
            />
          )} />
          <Route render={props => (
            <div>Page not found.</div>
          )} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
