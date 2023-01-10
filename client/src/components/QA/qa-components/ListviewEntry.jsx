import React, { useState, Suspense } from 'react';
import axios from 'axios';
import WordIncrement from '../styles/WordIncrement.styled.js';
import Bucket from '../styles/Bucket.styled.js';
import AnswersList from './AnswersList.jsx';

const AddAnswerModal = React.lazy(() => import('./AddAnswerModal.jsx'));

export default function ListviewEntry({ currentProduct, entry }) {
  const [showAModal, setShowAModal] = useState(false);
  const [clickHelpful, setClickHelpful] = useState(false);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    setShowAModal(!showAModal);
  };

  const handleQuestionHelful = (e) => {
    e.preventDefault();
    const data = localStorage.getItem(`ssuq: ${entry.question_id}`);
    if (data === null) {
      axios.put(`/api/qa/questions/${entry.question_id}/helpful`)
        .catch((error) => {
          console.log(error);
        });

      setClickHelpful(true);
      localStorage.setItem(`ssuq: ${entry.question_id}`, true);
    }
  };

  const toggleModal = () => {
    setShowAModal(!showAModal);
  };

  return (
    <Bucket>
      <div style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '20px' }}>
        <b>Q: </b>
        {entry.question_body}
        <span style={{ fontSize: '14px', color: 'grey' }}>
          {' Helpful? '}
          <WordIncrement onClick={handleQuestionHelful}><u>Yes</u></WordIncrement>
          {`(${clickHelpful ? entry.question_helpfulness + 1 : entry.question_helpfulness})`}
          |&nbsp;
          <WordIncrement>
            <u role="presentation" onClick={handleAnswerSubmit} onKeyDown={handleAnswerSubmit}>
              Add Answer
            </u>
          </WordIncrement>
        </span>
      </div>
      <AnswersList entry={entry} />
      {showAModal && (
        <Suspense fallback={<div>Loading</div>}>
          <AddAnswerModal currentProduct={currentProduct} curQ={entry} toggleModal={toggleModal} />
        </Suspense>
      )}
    </Bucket>
  );
}
