import React from 'react';

// TODO sync up the pdf loading (handled on Link click) with routing

const Reader = ({ match, sketchbooks }) => (
  <div id="flipbook-container">
    <p>{sketchbooks[match.params.sketchbookId]}</p>
    <p>The selected sketchbook should render here. If you do not see any content, please verify that JavaScript is enabled in your browser or <a href={match.params.sketchbookId}>access the pdf directly</a>.</p>
  </div>
);

export default Reader;
