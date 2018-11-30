import React from 'react';
import { Link } from 'react-router-dom';

const SketchbookLister = ({ sketchbooksList, selectSketchbook }) => (
  <ul className="sketchbook-list">
    {sketchbooksList.map(sketchbook => (
      <li key={`sketchbook-${sketchbook.id}`} className="sketchbook-item">
        <Link
          className="sketchbook-link"
          to={`sketchbooks/${sketchbook.id}`}
          onMouseEnter={() => selectSketchbook(sketchbook)}
        >
          <img
            src={`http://localhost:5000${sketchbook.thumb}`}
            alt={`${sketchbook.title} thumbnail`}
          />
          <p>{sketchbook.title}</p>
        </Link>
      </li>
    ))}
  </ul>
);

export default SketchbookLister;
