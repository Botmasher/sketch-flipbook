import React from 'react';
import { Link } from 'react-router-dom';

const SketchbookListerContainer = ({ linkPrefix, sketchbooks }) => (
  <div className="sketchbook-selector">
    <ul className="sketchbook-list">
      {sketchbooks.map(sketchbook => (
        <li key={`sketchbook-${sketchbook.id}`} className="sketchbook-item">
          <Link
            className="sketchbook-link"
            to={`sketchbooks/${sketchbook.id}`}
          >
            <img src={`http://localhost:5000${sketchbook.thumb}`} alt={`${sketchbook.title} thumbnail`} />
            <p>{sketchbook.title}</p>
          </Link>
        </li>
      ))}
    </ul>
    <p></p>
  </div>
);

export default SketchbookListerContainer;
