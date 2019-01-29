import React from 'react';
import SketchbookEntry from '../SketchbookEntry';

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
        <SketchbookEntry sketchbook={sketchbook} />
      </li>
    ))}
  </ul>
);

export default SketchbookLister;
