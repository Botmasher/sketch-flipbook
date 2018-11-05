import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const thumbSrc = 'real3d-flipbook/images/book2/thumb1.jpg';
    const sentences = ['Real 3D Flipbook has lightbox feature - book can be displayed in the same page with lightbox effect.', 'Click on a book cover to start reading.'];
    return (
      <div className="App">
        <header className="App-header">Sketches Notebook</header>
        <div id="container">
          {sentences.map((sentence, id) => (
            <p key={`sentence-${id}`}>{sentence}</p>
          ))}
          <img src={thumbSrc} />
        </div>
      </div>
    );
  }
}

export default App;
