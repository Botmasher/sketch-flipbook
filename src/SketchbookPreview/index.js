import React from 'react';

const SketchbookPreview = ({ sketchbook }) => (
  <div className="sketchbook-preview">
    <p><em>previewing</em> &nbsp; {`"${sketchbook.title}"`}</p>
    <ul key={sketchbook.id} className="sketchbook-list">
      {sketchbook.thumbs && sketchbook.thumbs.map((thumbUrl, i) => (
        <li className="sketchbook-item" key={`${thumbUrl}`}>
          <a href={`${sketchbook.images[i]}`}>
            <img
              src={`${thumbUrl}`}
              alt={`${sketchbook.title} thumb`}
            />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SketchbookPreview;
