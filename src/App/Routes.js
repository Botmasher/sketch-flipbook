import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SketchbookListerContainer from '../SketchbookLister/container';
import SketchbookReaderContainer from '../SketchbookReader/container';
import PageNotFound from '../PageNotFound';

const Routes = ({ sketchbooks, loadSketchbook }) => (
  <Switch>
    <Route exact path="/sketchbooks/" render={props => (
      <SketchbookListerContainer
        {...props}
        sketchbooks={sketchbooks}
      />
    )} />
    <Redirect exact from="/" to="/sketchbooks/" />
    <Route path="/sketchbooks/:sketchbookId" render={props => (
      <SketchbookReaderContainer
        {...props}
        sketchbook={sketchbooks[`${props.match.params.sketchbookId}`]}
        loadSketchbook={loadSketchbook}
      />
    )} />
    <Route render={props => (
        <PageNotFound />
    )} />
  </Switch>
);

export default Routes;
