import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import Spinner from './Spinner.jsx';
import '../styles/Home.css';

function Home({ setTab, setCurrentDeck, search, setSearch, setDeckName }) {
  const [flashcardSets, setFlashcardSets] = useState([]);
  const [filteredSet, setFilteredSet] = useState([]);
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
        setFilteredSet(response.data.rows);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < flashcardSets.length; i++) {
      if (flashcardSets[i].title.toLowerCase().includes(search)) {
        arr.push(flashcardSets[i]);
      }
    }
    arr.length > 0 ? setFilteredSet(arr) : setFilteredSet([]);
  }, [search]);

  function displayFlashcards(e, currentID) {
    e.preventDefault();
    const id = currentID.deck_id;
    axios.get('/flashcards', {
      params: {
        id,
      },
    })
      .then((response) => {
        setCurrentDeck(response.data.rows);
        setDeckName(currentID.title);
        setSearch('');
        setTab(3);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function deleteDeck(e, id) {
    e.preventDefault();
    e.stopPropagation();
    axios.delete('/flashcards', {
      data: { id },
    })
      .then(() => {
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
        {filteredSet.map((flashcardSet) => (
          <div className="cards" onClick={(e) => displayFlashcards(e, flashcardSet)} key={Math.random()}>
            <div className="delete-icon">
              <FaTrash onClick={(e) => deleteDeck(e, flashcardSet.deck_id)} />
            </div>
            <h3>{flashcardSet.title}</h3>
            <p>{flashcardSet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
