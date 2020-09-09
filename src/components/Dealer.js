import React, { Component } from 'react';
import axios from 'axios';

class Dealer extends Component {
  state  = {
    remaining: "",
    deckId: ""
  }

  async componentDidMount() {
    console.log("inside componentDidMount")
    // when page loads, send a request to https://deckofcardsapi.com/api/deck/new/shuffle
    let response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle");
    
    // change remaining and deck id state to data i get back from the response
    this.setState({
      remaining: response.data.remaining,
      deckId: response.data.deck_id
    });
    
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


// request will go to componentDidMount();
// store deck info in localStorage?
// button will make an api request to https://deckofcardsapi.com/api/deck/$%7Bdeck_id%7D/draw/
// render card after making the request

// next commit:  add componentDidMount