import React, { Component } from 'react';
import { connect } from 'react-redux';
import { plateImage } from '../../actions';

class ImageStream extends Component {
  componentDidMount() {
    console.log(this.props);
    console.log('mounted');
    if(!this.ctx) {
      this.ctx = this.canvas.getContext('2d');
    }
    this.props.plateImage();
    this.setImage();
  }
  getDerivedStateFromProps(nextProps, prevProps) {
    console.log('hi');
  }

  setImage() {
    let { imageData } = this.props;
    console.log(imageData);

    if(!imageData) {
      return false;
    }
    imageData = `data:image/jpg;base64,${imageData}`
    let img = new Image();
    img.src = imageData;
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

const mapStateToProps = ({stream}) => ({
  imageData: stream.imageData
})

export default connect(
  mapStateToProps, { plateImage }
)(ImageStream)
