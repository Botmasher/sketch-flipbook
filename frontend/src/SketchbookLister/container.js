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
        />
        {sketchbook && (
          <div>
            <p>{sketchbook.thumb}</p>
            <img src={`http://localhost:5000${sketchbook.thumb}`} alt={`${sketchbook.title} thumb`} />
          </div>
        )}
      </div>
    );
  }
}

export default SketchbookListerContainer;
