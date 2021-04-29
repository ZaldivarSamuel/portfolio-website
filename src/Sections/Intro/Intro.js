import React, { Component } from 'react';
import './intro.css';

export default class Intro extends Component{
  render(){
    return(
      <div id='greeting-container'>
        <div id='greeting-section' class='greeting-column'>
          <h1 id='greeting'>Hi,<br /> I'm Sam.</h1>
        </div>
        <div id="greeting-menu-container" class='greeting-column'>
          <div id="greeting-menu-inner-container">
            <ul id='greeting-menu'>
              <li class='greeting-menu-option'>Projects</li>
              <li class='greeting-menu-option'>About Me</li>
              <li class='greeting-menu-option'>Resume</li>
              <li class='greeting-menu-option'>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
