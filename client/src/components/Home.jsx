import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner.jsx';
import '../styles/Home.css';

function Home({ setTab, setCurrentDeck }) {
  const [flashcardSets, setFlashcardSets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = 'Jake';
    axios.get('/cards', {
      params: {
        username,
      },
    })
      .then((response) => {
        setFlashcardSets(response.data.rows);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function displayFlashcards(e, id) {
    e.preventDefault();
    axios.get('/flashcards', {
      params: {
        id,
      },
    })
      .then((response) => {
        setCurrentDeck(response.data.rows);
        setTab(3);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <h2>My Flashcard Sets</h2>
      <div className="cards-container">
        {flashcardSets.map((flashcardSet) => (
          <div className="cards" onClick={(e) => displayFlashcards(e, flashcardSet.deck_id)} key={flashcardSet.deck_id}>
            <h3>{flashcardSet.title}</h3>
            <p>{flashcardSet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
