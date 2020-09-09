import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

class Dealer extends Component {
  state  = {
    remaining: "",
    deckId: "",
    cardImg: ""
  }

  async componentDidMount() {
    console.log("inside componentDidMount")
    // when page loads, send a request to https://deckofcardsapi.com/api/deck/new/shuffle
    let response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle");
    // console.log(response)
    // change remaining and deck id state to data i get back from the response
    this.setState({
      remaining: response.data.remaining,
      deckId: response.data.deck_id
    });
  }

  // button function
  dealCard = () => {
    // alert("connected!");
    // make an api request to https://deckofcardsapi.com/api/deck/$%7Bdeck_id%7D/draw/
    axios
      .get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`)
      .then(response =>  {
        // console.log(response.data.cards[0].images.png, "line 32");
        // take the card image, push it into an array (allCards state)
        let newCard = response.data.cards[0].images.png;
        this.setState({cardImg: newCard});
      });
  }


  render() {
    return (
      <div>
        <button onClick={this.dealCard}>Deal a Card</button>
        <Card src={this.state.cardImg}/>
      </div>
    );
  }
}

export default Dealer;


// request will go to componentDidMount();
// store deck info in localStorage?
// button will 
// render card after making the request


// will change remaining card number

