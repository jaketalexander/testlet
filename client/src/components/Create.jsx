import React, { useState } from 'react';
import '../styles/Create.css';
import { FaTrash } from 'react-icons/fa';

function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [flashcards, setFlashcards] = useState([
    { id: 1, term: '', definition: '' },
    { id: 2, term: '', definition: '' },
    { id: 3, term: '', definition: '' },
    { id: 4, term: '', definition: '' },
    { id: 5, term: '', definition: '' },
  ]);
  const [lastId, setLastId] = useState(5);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleChange(event, id) {
    const updatedFlashcards = flashcards.map((flashcard) => {
      if (flashcard.id === id) {
        return { ...flashcard, [event.target.name]: event.target.value };
      }
      return flashcard;
    });
    setFlashcards(updatedFlashcards);
  }

  function handleAddCard() {
    const id = lastId + 1;
    setLastId(id);
    setFlashcards([...flashcards, { id, term: '', definition: '' }]);
  }

  function handleDelete(id) {
    const updatedFlashcards = flashcards.filter((flashcard) => flashcard.id !== id);
    setLastId(updatedFlashcards.length);
    const newFlashcards = updatedFlashcards.map((flashcard, index) => {
      flashcard.id = index + 1;
      return flashcard;
    });
    setFlashcards(newFlashcards);
  }

  return (
    <div>
      <div className="create-headers">
        <span>Create a New Study Set</span>
        <button className="top-create">Create</button>
      </div>
      <div className="set-info">
        <input className="title" placeholder="Enter a title" onChange={handleTitleChange} />
        <textarea className="description" placeholder="Add a description..." onChange={handleDescriptionChange} />
      </div>
      <div className="create-cards">
        {flashcards.map((flashcard) => (
          <div className="card" key={flashcard.id}>
            <div className="card-header">
              <div className="left-header">
                <span className="number">{flashcard.id}</span>
              </div>
              <div className="right-header">
                <FaTrash onClick={() => handleDelete(flashcard.id)} />
              </div>
            </div>
            <div className="card-body">
              <div className="left-card-body">
                <input
                  className="term"
                  placeholder="Enter term"
                  value={flashcard.term}
                  onChange={(event) => handleChange(event, flashcard.id)}
                />
                <span className="term-label">TERM</span>
              </div>
              <div className="right-card-body">
                <input
                  className="definition"
                  placeholder="Enter definition"
                  value={flashcard.definition}
                  onChange={(event) => handleChange(event, flashcard.id)}
                />
                <span className="definition-label">DEFINITION</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="add-card">
        <button className="add-card-btn" onClick={handleAddCard}>+ Add Card</button>
      </div>
    </div>
  );
}
export default Create;
