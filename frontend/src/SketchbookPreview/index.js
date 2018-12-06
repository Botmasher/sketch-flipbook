import React from 'react';

const SketchbookPreview = ({ sketchbook }) => (
  <div>
    <p>{sketchbook.title} (preview)</p>
    <ul key={sketchbook.id} className="sketchbook-list">
      {sketchbook.thumbs && sketchbook.thumbs.map((thumbUrl, i) => (
        <li className="sketchbook-item" key={`${thumbUrl}`}>
          <a href={`http://localhost:5000${sketchbook.images[i]}`}>
            <img
              src={`http://localhost:5000${thumbUrl}`}
              alt={`${sketchbook.title} thumb`}
            />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SketchbookPreview;
