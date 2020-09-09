import React from 'react';

function Card(props) {
  return (
    <div>
      <img src={props.src} alt={props.alt}/>
    </div>
  );
}

export default Card;
