import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SketchbookListerContainer from '../SketchbookLister/container';
import SketchbookReaderContainer from '../SketchbookReader/container';
import PageNotFound from '../PageNotFound';

const Routes = ({ sketchbooks, loadSketchbookPdf }) => (
  <Switch>
    <Route exact path="/" render={props => (
      <SketchbookListerContainer
        {...props}
        sketchbooks={sketchbooks}
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
        <PageNotFound />
    )} />
  </Switch>
);

export default Routes;
