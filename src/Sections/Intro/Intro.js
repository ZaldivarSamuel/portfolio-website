import React, { Component } from 'react';
import './intro.css';

export default class Intro extends Component{
  render(){
    return(
      <div id='greeting-container'>
        <div id='greeting-section' class='column'>
          <h1 id='greeting'>Hi,<br /> I'm Sam.</h1>
        </div>
        <div id="greeting-menu" class='column'>
          <ul>
            <li>Projects</li>
            <li>About Me</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    )
  }
}
