import React from 'react'

import Card from './Card'

const Deck = ({card, onDraw, suit}) => {
  return (
    <Card card={card} onClick={onDraw} isDeck suit={suit}/>
  )
}

export default Deck
