import React from 'react';

const Lister = ({ linkPrefix, sketchbooks, handleThumbClick }) => (
  <div className="sketchbook-selector">
    <ul className="sketchbook-list">
      {sketchbooks.map(sketchbook => (
        <li key={`sketchbook-${sketchbook.id}`} className="sketchbook-item">
          <a
            className="sketchbook-link"
            onClick={e => handleThumbClick(e, sketchbook)}
            href={sketchbook.url}
          >
            <img src={sketchbook.thumb} alt={`${sketchbook.title} thumbnail`} />
            <p>{sketchbook.title}</p>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Lister;
