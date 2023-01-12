import React, { useState } from 'react';
import '../styles/Flashcard.css';

function Flashcard({ term, definition }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard">
      <div className={`flashcard-inner ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
        {flipped ? (
          <div className="flashcard-back">
            <p>{definition}</p>
          </div>
        ) : (
          <div className="flashcard-front">
            <p>{term}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Flashcard;
