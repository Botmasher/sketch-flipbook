import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div>
    <p>Sketchbook not found. View <Link to="/sketchbooks/">all sketchbooks</Link>.</p>
  </div>
);

export default PageNotFound;
