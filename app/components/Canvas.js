import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Canvas.css';
import autobind from 'autobind-decorator';

export default class Canvas extends Component {
  static propTypes = {
  };

  componentDidMount() {
    zebra.ready(() => {
      // create canvas 400x700 pixels
      var canvas = new zebra.ui.zCanvas('screen', 400, 600)
      // canvas.fullScreen();
      var root = canvas.root;

      // fill canvas root panel with UI components
      root.setLayout(new zebra.layout.BorderLayout(8));
      root.add(zebra.layout.CENTER, new zebra.ui.TextArea(""));
      root.add(zebra.layout.BOTTOM, new zebra.ui.Button("Clean"));
    });
  }

  render() {
    return (
      <div id="canvas">
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <canvas id="screen" className={styles.canvas}>
        </canvas>
      </div>
    )
  }
}