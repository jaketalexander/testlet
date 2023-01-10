import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../styles/Button.styled.js';
import AnswerEntry from './AnswerEntry.jsx';
import AnswerOverflow from '../styles/AnswerOverflow.styled.js';

export default function AnswersList({ entry }) {
  const [allAnswers, setAllAnswers] = useState([]);
  const [numOfAnswers, setNumOfAnswers] = useState(true);

  useEffect(() => {
    axios.get(`/api/qa/questions/${entry.question_id}/answers?count=1000`)
      .then((response) => {
        setAllAnswers(response.data.results);
      }).catch((error) => {
        console.log(error);
      });
  }, [entry]);

  const handleMoreClick = (e) => {
    e.preventDefault();
    setNumOfAnswers(!numOfAnswers);
  };

  return (
    <>
      <div>
        <AnswerOverflow>
          {numOfAnswers === true
            && allAnswers.slice(0, 2).map((answer, i) => (
              <AnswerEntry key={`${entry.question_id + i}`} entry={answer} />
            ))}

          {numOfAnswers === false
            && allAnswers.map((answer, i) => (
              <AnswerEntry key={`${entry.question_id + i}`} entry={answer} />
            ))}
          <br />
        </AnswerOverflow>
      </div>
      {Object.keys(entry.answers).length > 2 && numOfAnswers === false
        ? <Button onClick={handleMoreClick}>COLLAPSE ANSWERS</Button> : null}
      {Object.keys(entry.answers).length > 2 && numOfAnswers === true
        ? <Button onClick={handleMoreClick}>SEE MORE ANSWERS</Button> : null}
    </>
  );
}
