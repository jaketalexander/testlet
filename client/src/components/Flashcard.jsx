import React, { useState } from 'react';
import '../styles/Flashcard.css';
import Modal from 'react-modal';
import axios from 'axios';
import { MdEdit, MdClose } from 'react-icons/md';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(15, 14, 50, 0.75)',
    borderRadius: '10px',
    border: 'none',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#303c54',
    padding: '20px',
    width: '50%',
    height: '70%',
  },
};

function Flashcard({ id, term, definition }) {
  const [flipped, setFlipped] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editTerm, setEditTerm] = useState(term);
  const [editDefinition, setEditDefinition] = useState(definition);

  function handleEdit(e) {
    e.preventDefault();
    e.stopPropagation();
    setModalVisible(true);
  }

  function handleSave() {
    console.log('id in component', id);
    axios.patch(`/cards/${id}`, { term: editTerm, definition: editDefinition })
      .then(() => {
        setModalVisible(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flashcard">
      <div className={`flashcard-inner ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
        {flipped ? (
          <div className="flashcard-back">
            <div className="card-header">
              <span>Definition</span>
              <MdEdit style={{ backgroundColor: '#303c54' }} onClick={(e) => handleEdit(e)} />
            </div>
            <p>{definition}</p>
          </div>
        ) : (
          <div className="flashcard-front">
            <div className="card-header">
              <span>Term</span>
              <MdEdit style={{ backgroundColor: '#303c54' }} onClick={(e) => handleEdit(e)} />
            </div>
            <p>{term}</p>
          </div>
        )}
      </div>
      <Modal style={modalStyles} isOpen={modalVisible}>
        <div className="modal-container">
          <div className="modal-header">
            <MdClose style={{ backgroundColor: '#303c54' }} onClick={() => setModalVisible(false)} />
          </div>
          <span className="modal-title">Edit</span>
          <div className="modal-content">
            <div className="input-container">
              <span>Term:</span>
              <input className="term" type="text" value={editTerm} onChange={(e) => setEditTerm(e.target.value)} />
            </div>
            <div className="input-container">
              <span>Definition:</span>
              <input className="definition" type="text" value={editDefinition} onChange={(e) => setEditDefinition(e.target.value)} />
            </div>
          </div>
          <div className="modal-footer">
            <button className="cancel-button" onClick={() => setModalVisible(false)}>Cancel</button>
            <button className="save-button" onClick={handleSave}>Save</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Flashcard;
