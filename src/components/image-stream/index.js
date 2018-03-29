import React, { Component } from 'react';
import { connect } from 'react-redux';
import { plateImage } from '../../actions';

class ImageStream extends Component {
  componentDidMount() {
    console.log('mounted');
    if(!this.ctx) {
      this.ctx = this.canvas.getContext('2d');
    }
    this.props.plateImage();
    this.setImage();
  }

  setImage() {
    const { imageData } = this.props.stream;
    console.log(imageData);
    console.log(this.ctx);
    if(!imageData) {
      return false;
    }
    let img = new Image();
    img.src = imageData;
    console.log(img);
    img.onload = () => {
	    this.ctx.drawImage(img, 0, 0);
		};
  }

  render() {
    return (
      <div className="outer-container">
        <canvas
          className="canvas"
          ref={(canvas) => {this.canvas = canvas}}
        ></canvas>
      </div>
    )
  }
}

const mapStateToProps = ({stream}) => ({ stream })

export default connect(
  mapStateToProps, { plateImage }
)(ImageStream)
