import React, { Component } from 'react';
import axios from 'axios';

class Dealer extends Component {

  componentDidMount() {
    console.log("Inside componentDidMount");
  }

  render() {
    return (
      <div>
        <button>Deal a Card</button>
      </div>
    );
  }
}

export default Dealer;

// when page loads, send a request to https://deckofcardsapi.com/api/deck/new/shuffle
// request will go to componentDidMount();
// store deck info in localStorage?
// button will make an api request to https://deckofcardsapi.com/api/deck/$%7Bdeck_id%7D/draw/
// render card after making the request

// next commit:  add componentDidMount