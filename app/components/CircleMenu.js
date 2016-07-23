// https://css-tricks.com/building-a-circular-navigation-with-css-clip-paths/
// http://www.jqueryscript.net/menu/Path-Style-Flyout-Menu-With-jQuery-CSS3-Flyout-Menu.html
// https://github.com/callmenick/CSS-Circle-Menu

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
    <div class="menu">
      <div class="btn trigger">
        <span class="line"></span>
      </div>
      <div class="icons">
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fa fa-codepen"></i>
          </div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fa fa-facebook"></i>
          </div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fa fa-google-plus"></i>
          </div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fa fa-twitter"></i>
          </div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fa fa-dribbble"></i>
          </div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fa fa-linkedin"></i>
          </div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fa fa-github"></i>
          </div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fa fa-behance"></i>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
