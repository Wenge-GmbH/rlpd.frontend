import React, { Component } from 'react';
import JSMpeg from './jsmpeg.min.js';

export default class VideoStream extends Component {
  componentDidMount() {
    const canvas = this.canvas;
    const url = 'ws://159.89.16.123:8082';
    const player = new JSMpeg.Player(url, {canvas: canvas});
  }

  render() {
    return (
      <div className="canvas-container">
        <canvas ref={canvas => {this.canvas = canvas}} id="video-canvas"></canvas>
      </div>
    )
  }
}
