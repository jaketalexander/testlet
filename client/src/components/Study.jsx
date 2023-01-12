import React, { useState } from 'react';
import Flashcard from './Flashcard.jsx';
import '../styles/Study.css';

function Study({ setTab, currentDeck }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const prevCard = () => setCurrentIndex((currentIndex - 1 + currentDeck.length) % currentDeck.length);
  const nextCard = () => setCurrentIndex((currentIndex + 1) % currentDeck.length);
  const flipCard = () => setFlipped(!flipped);

  return (
    <div className="flashcard-container">
      <h4>{`${currentIndex + 1} / ${currentDeck.length}`}</h4>
      <Flashcard term={currentDeck[currentIndex].term} definition={currentDeck[currentIndex].definition} flipCard={flipCard} />
      <div className="arrows">
        <button className="left-arrow" onClick={prevCard}>&lt;</button>
        <button className="right-arrow" onClick={nextCard}>&gt;</button>
      </div>
    </div>
  );
}

export default Study;
