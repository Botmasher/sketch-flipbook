import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SketchbookLister, SketchbookReader } from '../Sketchbook/';
import Header from './Header';
import Footer from './Footer';
import './styles.css';

// TODO api
//  - [ ] fetch pdfs through backend
//  - [ ] check again for CORS and CSP errors

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sketchbooks: {}
    };
  }

  // async call to jquery method in public index
  loadSketchbookPdf = url => {
    const pdfUrl = `http://localhost:5000${url}`;
    console.log(pdfUrl);
    !window.flipbookSetPdf
      // wait for window to attach method before loading first sketchbook
      ? window.addEventListener('load', () => (
          window.flipbookSetPdf.then(loadFlipbook => loadFlipbook(pdfUrl))
        ))
      : window.flipbookSetPdf.then(loadFlipbook => loadFlipbook(pdfUrl))
    ;
  };

  fetchSketchbooks = () => fetch(`http://localhost:5000/api/sketchbooks/`).then(res => res.json());

  componentDidMount() {
    this.fetchSketchbooks()
      .then(sketchbooks => this.setState({ sketchbooks }), () => console.log(this.state.sketchbooks))
    ;
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
