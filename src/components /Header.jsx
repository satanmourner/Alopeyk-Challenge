import React, { Component } from 'react';
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="image-header">
          <img src={process.env.PUBLIC_URL + '/Images/logo-1.png'} />
        </div>
        <div className="header-container">
          <h2>الوپیک مارکت</h2>
          <div className="star-content">
            <span>۴</span>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star" style={{color: "#c7c7c7"}}></i>
            <span>۱۶۰</span>
          </div>
          <div className="location-content">
            <span>location</span>
            <img src={process.env.PUBLIC_URL + '/Images/location.png'} />
          </div>
        </div>
      </div>
    );
  }
}