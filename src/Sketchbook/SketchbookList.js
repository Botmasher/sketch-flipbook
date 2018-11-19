import React from 'react';

const Lister = ({ sketchbooks, handleThumbClick }) => {
  return(
    <div className="flipbook-selector">
      <p>Click on a book cover to start reading.</p>
      {Object.values(sketchbooks).map(sketchbook => (
        <a
          key={`sketchbook-${sketchbook.id}`}
          className="sketchbook-link"
          onClick={e => handleThumbClick(e)}
          href={`sketchbook-${sketchbook.id}`}
          ref={`sketchbook${sketchbook.id}`}
        >
          <img src={sketchbook.thumb} alt={`${sketchbook.title} thumbnail`} />
        </a>
      ))}
    </div>
  );
};

export default Lister;
