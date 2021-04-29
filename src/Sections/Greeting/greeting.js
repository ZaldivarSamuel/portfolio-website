import React, { Component } from 'react';
import './greeting.css';
import nycImage from '../../images/nyc.jpg';

export default class Greeting extends Component{
  render(){
    return(
      <div id='greeting-container'>
        <img id='greeting-image' src={nycImage} />
        <div id='greeting-section' className='greeting-column'>
          <h1 id='greeting'>Hi,<br /> I'm Samuel.</h1>
        </div>

      </div>
    )
  }
}
