import React from 'react';

const SketchbookReaderContainer = ({ sketchbook, loadSketchbook }) => {
  if (sketchbook) {
    console.log(sketchbook.images);
    sketchbook.url
      ? loadSketchbook({url: sketchbook.url})
      : loadSketchbook({images: sketchbook.images})
    ;
  }
  return(
    <div id="flipbook-container">
      <p>{`The selected sketchbook should render here. If it does not load, please verify that JavaScript is enabled in your browser.`}</p>
      {sketchbook && sketchbook.url && (
        <p>You can also <a href={sketchbook.url}>access the file directly</a>.</p>
      )}
    </div>
  );
};

export default SketchbookReaderContainer;
