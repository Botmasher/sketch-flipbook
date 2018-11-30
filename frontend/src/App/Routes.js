import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SketchbookListerContainer from '../SketchbookLister/container';
import SketchbookReaderContainer from '../SketchbookLister/container';

const Routes = ({ sketchbooks, loadSketchbookPdf }) => (
  <Switch>
    <Route exact path="/" render={props => (
      <SketchbookListerContainer
        {...props}
        sketchbooks={Object.values(sketchbooks)}
      />
    )} />
    <Redirect exact from="/sketchbooks/" to="/" />
    <Route path="/sketchbooks/:sketchbookId" render={props => (
      <SketchbookReaderContainer
        {...props}
        sketchbook={sketchbooks[props.match.params.sketchbookId]}
        loadSketchbookPdf={loadSketchbookPdf}
      />
    )} />
    <Route render={props => (
      <div>Page not found.</div>
    )} />
  </Switch>
);

export default Routes;
