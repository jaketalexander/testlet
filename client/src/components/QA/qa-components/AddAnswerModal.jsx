import React, { useState } from 'react';
import axios from 'axios';
import {
  ModalContainer, Modal, ModalHeader, ModalContent, Exit, BiggerInput, SmallerInput,
} from '../styles/Modal.styled.js';
import Button from '../styles/Button.styled.js';

export default function AddAnswerModal({ currentProduct, curQ, toggleModal }) {
  const [photos, setPhotos] = useState([]);
  const [warning, setWarning] = useState(false);

  const postAnswer = (results) => {
    axios.post(`/api/qa/questions/${curQ.question_id}/answers`, results)
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    toggleModal();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = document.getElementById('add-question');
    const formData = new FormData(form);

    const results = {};
    [...formData.entries()].forEach((row) => {
      const [key, value] = row;
      results[key] = value;
    });

    results.photos = photos;
    postAnswer(results);
    toggleModal();
  };

  const onChangeFiles = (e) => {
    if (e.target.files.length > 5) {
      setWarning(true);
      document.getElementById('photos').value = null;
      setPhotos([]);
      e.preventDefault();
    } else {
      const res = [];
      for (let i = 0; i < e.target.files.length; i += 1) {
        const createdURL = URL.createObjectURL(e.target.files[i]);
        res.push(createdURL);
      }
      setPhotos(res);
    }
  };

  return (
    <ModalContainer>
      <Modal>
        <ModalHeader>
          <Exit onClick={handleCloseClick}>X</Exit>
          <h3 className="modal-title">Submit Your Answer</h3>
          <h5>
            {currentProduct.name}
            &nbsp;:&nbsp;
            {curQ.question_body}
          </h5>
        </ModalHeader>
        <ModalContent>
          <form id="add-question" onSubmit={handleFormSubmit}>
            <span>Your Answer*</span>
            <BiggerInput name="body" maxlength="1000" placeholder="Why did you like the product or not?" required />
            <span>Nickname*</span>
            <SmallerInput name="name" maxlength="60" placeholder="jack543!" required />
            <h6>For privacy reasons, do not use your full name or email address</h6>
            <span>Email*</span>
            <SmallerInput name="email" type="email" maxlength="60" placeholder="jack@email.com" required />
            <h6>For authentication reasons, you will not be emailed</h6>
            <span>Photos</span>
            <div>
              <SmallerInput type="file" id="photos" accept="image/*" onChange={onChangeFiles} multiple />
            </div>
            {warning ? <small style={{ fontSize: '20px', color: 'red' }}>Select up to 5 photos</small> : <small>Select up to 5 photos</small>}
            <div>
              {photos.map((photo, i) => (
                <img
                  key={`${photo + i}`}
                  style={{
                    height: '125px', width: '125px', margin: '10px', border: '1px solid',
                  }}
                  src={photo}
                  alt="thumbnail"
                />
              ))}
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </ModalContent>
      </Modal>
    </ModalContainer>
  );
}
