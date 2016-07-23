import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Canvas.css';
import autobind from 'autobind-decorator';

// file:///Users/kristianmandrup/Downloads/CircularNavigation/index2.html
export default class CoolMenu extends Component {
  static propTypes = {
  };

  state = {
    open: false,
    buttonLabel: 'Menu'
  };

  componentDidMount() {
    this.button = this.refs.button;
    this.wrapper = this.refs.wrapper;
  }

  closeWrapper() {
    this.wrapper.classList.remove('opened-nav');
  }

  @autobind
  btnClick() {
    if(!this.state.open){
      this.setState({buttonLabel: "Close"});
      wrapper.classList.add('opened-nav');
    }
    else{
      this.setState({buttonLabel: "Close"});
      wrapper.classList.remove('opened-nav');
    }
    this.setState({open: !this.state.open};
  }

  render() {
    return (
      <div id="circle-menu">
        <button onClick={this.btnClick} className="cn-button" id="cn-button"><span className="fa fa-picture"/>{this.state.buttonLabel}</button>
        <div className="cn-wrapper" id="cn-wrapper" ref="wrapper">
            <ul>
              <li>
                <a href="#"><span className="fa fa-picture"></span></a>
              </li>
              <li>
                <a href="#"><span className="fa fa-headphones"></span></a>
              </li>
              <li>
                <a href="#"><span className="fa fa-home"></span></a>
              </li>
           </ul>
        </span></div>
      </div>
    )
  }
}
