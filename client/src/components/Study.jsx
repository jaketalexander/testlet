import React, { useState } from 'react';
import _ from 'lodash';
import { BiShuffle } from 'react-icons/bi';
import Flashcard from './Flashcard.jsx';
import '../styles/Study.css';

function Study({ setCurrentDeck, currentDeck, deckName }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const prevCard = () => setCurrentIndex((currentIndex - 1 + currentDeck.length) % currentDeck.length);
  const nextCard = () => setCurrentIndex((currentIndex + 1) % currentDeck.length);
  const flipCard = () => setFlipped(!flipped);

  function randomizeCards() {
    setCurrentIndex(0);
    setCurrentDeck(_.shuffle(currentDeck));
  }

  function unRandomizeCards() {
    setCurrentIndex(0);
    setCurrentDeck(currentDeck.sort((a, b) => a.id - b.id));
  }

  return (
    <div className="flashcard-container">
      <h4>{`${deckName}  | Card: ${currentIndex + 1} / ${currentDeck.length}`}</h4>
      <Flashcard id={currentDeck[currentIndex].id} term={currentDeck[currentIndex].term} definition={currentDeck[currentIndex].definition} flipCard={flipCard} />
      <div className="arrows">
        <div className="randomize-button" onClick={randomizeCards}>
          <BiShuffle />
        </div>
        <button className="left-arrow" onClick={prevCard}>&lt;</button>
        <button className="right-arrow" onClick={nextCard}>&gt;</button>
      </div>
    </div>
  );
}

export default Study;
