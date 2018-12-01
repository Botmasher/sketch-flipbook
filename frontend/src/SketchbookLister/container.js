import React, { Component } from 'react';
import SketchbookLister from './';

class SketchbookListerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sketchbookId: ''
    };
  }

  selectSketchbook = sketchbook => this.setState({
    sketchbookId: sketchbook.id
  });

  componentDidMount() {
    const { sketchbooks } = this.props;
    sketchbooks.length === 1 && this.selectSketchbook(sketchbooks[0]);
  }

  render() {
    const { sketchbooks } = this.props;
    const sketchbooksList = Object.values(sketchbooks);
    const { sketchbookId } = this.state;
    const sketchbook = sketchbookId ? sketchbooks[sketchbookId] : null;
    return(
      <div className="sketchbook-selector">
        <SketchbookLister
          sketchbooksList={sketchbooksList}
          selectSketchbook={this.selectSketchbook}
          selectedSketchbookId={sketchbookId}
        />
        {sketchbook && (
          <div>
            <p>{sketchbook.title} (preview)</p>
            <ul className="sketchbook-list">
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
        )}
      </div>
    );
  }
}

export default SketchbookListerContainer;
