import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

class Dealer extends Component {
  state  = {
    remaining: "",
    deckId: "",
    cardImg: "",
    alt: ""
  }

  // when page loads, send a request to https://deckofcardsapi.com/api/deck/new/shuffle
  async componentDidMount() {
    let response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle");
    // change remaining and deck id state to data i get back from the response
    this.setState({
      remaining: response.data.remaining,
      deckId: response.data.deck_id
    });
  }

  // button function
  dealCard = () => {
    // if this.state.remaining doesn't equal 0, deal a card; else alert no more cards
    if(this.state.remaining !== 0) {
      // make an api request to https://deckofcardsapi.com/api/deck/$%7Bdeck_id%7D/draw/
      axios
        .get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`)
        .then(response =>  {
          // take the card image and change cardImg state
          // store card image, remaining cards, value, and suit to variables
          let newCard = response.data.cards[0].images.png;
          let newRemaining = response.data.remaining;
          let alt = response.data.cards[0].value + " of " + response.data.cards[0].suit

          // change state to new value
          this.setState({
            cardImg: newCard, 
            remaining: newRemaining, 
            alt: alt
          });
        });
    } else {
      alert("There are no more cards in the deck!");
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.dealCard}>Deal a Card</button>
        <Card 
          src={this.state.cardImg}
          alt={this.state.alt}
        />     
      </div>
    );
  }
}

export default Dealer;

