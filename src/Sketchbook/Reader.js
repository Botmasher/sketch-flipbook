import React from 'react';

const Reader = ({ sketchbook, match }) => (
  <div id="flipbook-container">
    <p>{match.params}</p>
    <p>The selected sketchbook should render here. If you do not see any content, please verify that JavaScript is enabled in your browser or <a href={sketchbook.url}>access the pdf directly</a>.</p>
  </div>
);

export default Reader;
