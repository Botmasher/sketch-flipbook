import React from 'react';
import { Link } from 'react-router-dom';

const Lister = ({ linkPrefix, sketchbooks }) => (
  <div className="sketchbook-selector">
    <ul className="sketchbook-list">
      {sketchbooks.map(sketchbook => (
        <li key={`sketchbook-${sketchbook.id}`} className="sketchbook-item">
          <Link
            className="sketchbook-link"
            to={`sketchbooks/${sketchbook.id}`}
          >
            <img src={sketchbook.thumb} alt={`${sketchbook.title} thumbnail`} />
            <p>{sketchbook.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Lister;
