import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import ListviewEntry from './ListviewEntry.jsx';
import Button from '../styles/Button.styled.js';
import Input from '../styles/Input.styled.js';
import Overflow from '../styles/Overflow.styled.js';

const AddQuestionModal = React.lazy(() => import('./AddQuestionModal.jsx'));

export default function Listview({ currentProduct }) {
  const [QA, setQA] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [handleQuestionNum, setHandleQuestionNum] = useState([]);
  const [numOfQuestions, setNumOfQuestion] = useState(2);
  const [showQModal, setShowQModal] = useState(false);

  useEffect(() => {
    axios.get(`/api/qa/questions?product_id=${currentProduct.id}&count=100`)
      .then((response) => {
        setQA(response.data.results);
      }).catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let copy = [...QA];
    setFilteredQuestions(copy);
    copy = copy.slice(0, numOfQuestions);
    setHandleQuestionNum(copy);
  }, [QA]);

  useEffect(() => {
    let copy = [...filteredQuestions];
    copy = copy.slice(0, numOfQuestions);
    setHandleQuestionNum(copy);
  }, [filteredQuestions, numOfQuestions]);

  const handleSearchChange = (e) => {
    if (e.target.value.length >= 3) {
      const arr = [];
      for (let i = 0; i < QA.length; i += 1) {
        if (QA[i].question_body.toLowerCase().includes(e.target.value)) {
          arr.push(QA[i]);
        }
      }
      if (arr.length > 0) {
        setFilteredQuestions(arr);
      } else if (arr.length === 0) {
        setFilteredQuestions([]);
      }
    }
    if (e.target.value.length === 0) {
      setFilteredQuestions(QA);
      setNumOfQuestion(2);
    }
  };

  const handleMoreClick = (e) => {
    e.preventDefault();
    const newCount = numOfQuestions + 2;
    setNumOfQuestion(newCount);
  };

  const addQuestions = (e) => {
    e.preventDefault();
    setShowQModal(!showQModal);
  };

  const toggleModal = () => {
    setShowQModal(!showQModal);
  };

  return (
    <>
      <Input onChange={handleSearchChange} placeholder="Have a question? Search for answers…" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Overflow>
          {handleQuestionNum.length > 0 && (
            handleQuestionNum.map((entry, i) => (
              <ListviewEntry currentProduct={currentProduct} key={`${entry.question_body + i}`} entry={entry} />)))}
        </Overflow>
      </div>
      <div className="bottom-buttons">
        {numOfQuestions < filteredQuestions.length && (
          <Button onClick={handleMoreClick}>SEE MORE QUESTIONS</Button>
        )}
        <Button onClick={addQuestions}>ADD QUESTION</Button>
      </div>
      {showQModal && (
        <Suspense fallback={<div>Loading</div>}>
          <AddQuestionModal currentProduct={currentProduct} toggleModal={toggleModal} />
        </Suspense>
      )}
    </>
  );
}
