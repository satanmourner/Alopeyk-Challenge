import React, { Component } from 'react';
import './App.css';
import Header from './components /Header';
import Section from './components /Section';
import Footer from './components /Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {total: 0, totalPrice: 0}
    this.countTotal = this.countTotal.bind(this);
  }

  countTotal = (total, totalPrice) => {
    var newTotal = total;
    var newTotalPrice = totalPrice;
    this.setState({total: newTotal, totalPrice: newTotalPrice});
  }

  render() {
    return (
      <div>
        <div className="container">
        <Header />
        <Section total={this.countTotal} />
        </div>
        <Footer total={this.state.total} totalPrice={this.state.totalPrice} />
      </div>
    );
  }
}

export default App;
