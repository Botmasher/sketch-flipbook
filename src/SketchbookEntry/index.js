import React from 'react';
import { Link } from 'react-router-dom';

const SketchbookEntry = ({ sketchbook }) => (
  <div className="sketchbook-entry">
    <div>
      <Link to={`./${sketchbook.id}/`}>
        <img
          src={`${sketchbook.coverThumb}`}
          alt={`${sketchbook.title} thumbnail`}
        />
        <p>{sketchbook.title}</p>
      </Link>
    </div>
    <div className="sketchbook-entry-details">
      <p>→ <Link to={`./${sketchbook.id}/`}>flip through</Link></p>
      <p>→ <a href={`${sketchbook.about}`}>about this project</a></p>
    </div>
  </div>
);

export default SketchbookEntry;
