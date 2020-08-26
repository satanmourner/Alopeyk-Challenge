import React, { Component } from 'react';
import './footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="total-price">
        <span>تومان</span>
          {this.props.totalPrice}
        </div>
        <div className="content">
          سبد خرید
        </div> 
        <div className="logo-cart">
          <div className="circle">
            {this.props.total}
          </div>
          <img src={process.env.PUBLIC_URL + '/Images/logo-cart.png'}  />
        </div>
      </div>
    );
  }
}