import React, { Component } from 'react';
import './Footer.scss';

export class Footer extends Component {
  render() {
    return (
    <footer id="footer">
    <div className="footer-block" id="footer-left"></div>  
    <div className="footer-block" id="footer-middle"></div>  
    <div className="footer-block" id="footer-right"></div>  
      
    </footer>);
  }
}

export default Footer;
