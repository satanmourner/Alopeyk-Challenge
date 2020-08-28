import React, { Component } from 'react';
import './section.css';

var count = [];
var countPrice = [];

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {total: []}
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.countTotal = this.countTotal.bind(this);
  }

  addItem = (index) => {
    cards[index].many += 1;
    count[index] = cards[index].many;
    countPrice[index] = cards[index].many * cards[index].price;
  }

  removeItem = (index) => {
    if(cards[index].many > 0) 
      cards[index].many -= 1;
    count[index] = cards[index].many;
    countPrice[index] = cards[index].many * cards[index].price;
  }

  countTotal = () =>  {
    var total = count.reduce((total, value, index) => total + value, 0); 
    var totalPrice = countPrice.reduce((total, value, index) => total + value, 0);
    this.props.total(total, totalPrice);
  }

  render() {
    return (
      <div className="section" onClick={this.countTotal}>
      {cards.map((card, index) => (
        <div className="cards" key={card.id}>
          <div className="image-cards">
            <img src={process.env.PUBLIC_URL + card.image} />
          </div>
          <div className="cards-content">
            <h3>{card.name}</h3>
            <div className="price">
              <span>{card.price}</span>
              <span>تومان</span>
              <img src={process.env.PUBLIC_URL + '/Images/icon1.png'}  />
            </div>
            <div className="buttons">
              <button className="add-remove" onClick={() => this.addItem(index)}>+</button>
              <div>{card.many}</div>
              <button className="add-remove" onClick={() => this.removeItem(index)}>-</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    );
  }
}

const cards = [
  {
    id: 1,
    image: '/Images/item1.png',
    name: 'پفک چی توز',
    price: '4500',
    many: 0,
  },
  {
    id: 2,
    image: '/Images/item2.png',
    name: 'چیپس چی توز',
    price: '2500',
    many: 0,
  },
  {
    id: 3,
    image: '/Images/item3.png',
    name: 'ترتیلا',
    price: '3500',
    many: 0,
  },
  {
    id: 4,
    image: '/Images/item4.png',
    name: 'چیپس چی توز',
    price: '2500',
    many: 0,
  },
  {
    id: 5,
    image: '/Images/item5.png',
    name: 'چیپس چی توز',
    price: '3500',
    many: 0,
  },
  {
    id: 6,
    image: '/Images/item6.png',
    name: 'چیپس چی توز',
    price: '2500',
    many: 0,
  },
  {
    id: 7,
    image: '/Images/item7.png',
    name: 'چیپس چی توز',
    price: '3500',
    many: 0,
  },
  {
    id: 8,
    image: '/Images/item8.png',
    name: 'مزپف مزمز',
    price: '5500',
    many: 0,
  },
  {
    id: 9,
    image: '/Images/item1.png',
    name: 'ترتیلا',
    price: '3500',
    many: 0,
  },
  {
    id: 10,
    image: '/Images/item2.png',
    name: 'چیپس چی توز',
    price: '2500',
    many: 0,
  },
  {
    id: 11,
    image: '/Images/item3.png',
    name: 'چیپس چی توز',
    price: '2500',
    many: 0,
  },
  {
    id: 12,
    image: '/Images/item4.png',
    name: 'پفک چی توز',
    price: '4500',
    many: 0,
  },
]