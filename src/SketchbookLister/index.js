import React from 'react';
import { Link } from 'react-router-dom';

const SketchbookLister = ({ sketchbooksList, focusSketchbook, focusedSketchbookId }) => (
  <ul className="sketchbook-list">
    {sketchbooksList.map(sketchbook => (
      <li
        key={`sketchbook-${sketchbook.id}`}
        className={`sketchbook-item
          ${sketchbook.id === focusedSketchbookId ? ' active' : ''}
        `}
        onMouseEnter={() => focusSketchbook(sketchbook)}
      >
        <Link to={`sketchbooks/${sketchbook.id}`}>
          <img
            src={`${sketchbook.coverThumb}`}
            alt={`${sketchbook.title} thumbnail`}
          />
          <p>{sketchbook.title}</p>
        </Link>
      </li>
    ))}
  </ul>
);

export default SketchbookLister;
