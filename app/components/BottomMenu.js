// https://css-tricks.com/building-a-circular-navigation-with-css-clip-paths/
// http://www.jqueryscript.net/menu/Path-Style-Flyout-Menu-With-jQuery-CSS3-Flyout-Menu.html


import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Canvas.css';
import autobind from 'autobind-decorator';

export default class CircleMenu extends Component {
  static propTypes = {
  };

  componentDidMount() {
  }

  render() {
    return (
      <div id="circle-menu">
        <button class="cn-button" id="cn-button">
          <span class="hljs-bullet">+</span>
        </button>
        <div class="cn-wrapper" id="cn-wrapper">
            <ul>
              <li>
                <a href="#"><span class="fa fa-picture"></span></a>
              </li>
              <li>
                <a href="#"><span class="fa fa-headphones"></span></a>
              </li>
              <li>
                <a href="#"><span class="fa fa-home"></span></a>
              </li>
           </ul>
        </span></div>
      </div>
    )
  }
}


