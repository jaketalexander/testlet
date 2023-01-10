import React from 'react';
import axios from 'axios';
import {
  ModalContainer, Modal, ModalHeader, ModalContent, Exit, BiggerInput, SmallerInput,
} from '../styles/Modal.styled.js';
import Button from '../styles/Button.styled.js';

export default function AddQuestionModal({ currentProduct, toggleModal }) {
  const postQuestion = (results) => {
    axios.post('/api/qa/questions', results)
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

    results.product_id = currentProduct.id;
    postQuestion(results);
    toggleModal();
  };

  return (
    <ModalContainer>
      <Modal>
        <ModalHeader>
          <Exit onClick={handleCloseClick}>X</Exit>
          <h3 className="modal-title">Ask Your Question</h3>
          <h5>
            About the&nbsp;
            {currentProduct.name}
          </h5>
        </ModalHeader>
        <ModalContent>
          <form id="add-question" onSubmit={handleFormSubmit}>
            <span>Question*</span>
            <BiggerInput name="body" maxlength="1000" placeholder="Why did you like the product or not?" required />
            <span>Nickname*</span>
            <SmallerInput name="name" maxlength="60" placeholder="jackson11!" required />
            <h6>For privacy reasons, do not use your full name or email address</h6>
            <span>Email*</span>
            <SmallerInput name="email" type="email" maxlength="60" placeholder="jack@email.com" required />
            <h6>For authentication reasons, you will not be emailed</h6>
            <Button type="submit">Submit</Button>
          </form>
        </ModalContent>
      </Modal>
    </ModalContainer>
  );
}
