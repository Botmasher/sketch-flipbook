import React, { Component } from 'react';
import SketchbookLister from './';
import SketchbookPreview from '../SketchbookPreview/';

class SketchbookListerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sketchbookId: ''
    };
  }

  focusSketchbook = sketchbook => this.setState({
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
      <div className="sketchbook-list-container">
        <SketchbookLister
          sketchbooksList={sketchbooksList}
          focusSketchbook={this.focusSketchbook}
          focusedSketchbookId={sketchbookId}
        />
        {sketchbook && <SketchbookPreview sketchbook={sketchbook} />}
      </div>
    );
  }
}

export default SketchbookListerContainer;
