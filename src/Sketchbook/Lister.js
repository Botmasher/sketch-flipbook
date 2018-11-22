import React from 'react';

const Lister = ({ linkPrefix, sketchbooks, handleThumbClick }) => {
  return(
    <div className="flipbook-selector">
      <p>Click on a book cover to start reading.</p>
      <ul>
        {Object.values(sketchbooks).map(sketchbook => (
          <li key={`sketchbook-${sketchbook.id}`}>
            <a
              className="sketchbook-link"
              onClick={e => handleThumbClick(e)}
              href={`${linkPrefix}${sketchbook.id}`}
            >
              <img src={sketchbook.thumb} alt={`${sketchbook.title} thumbnail`} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lister;
