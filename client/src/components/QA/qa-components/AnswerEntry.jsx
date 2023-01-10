import React, { useState } from 'react';
import { format } from 'date-fns';
import axios from 'axios';
import WordIncrement from '../styles/WordIncrement.styled.js';

export default function AnswerEntry({ entry }) {
  const [clickReport, setClickReport] = useState(false);
  const [clickHelpful, setClickHelpful] = useState(false);

  const { date } = entry;
  const formatDate = `${date.slice(5, 7)} ${date.slice(8, 10)} ${date.slice(0, 4)}`;
  const postedDate = format(new Date(formatDate), 'MMMM d, yyyy');

  const handleAnswerHelpful = (e, id) => {
    e.preventDefault();
    const data = localStorage.getItem(`ssu: ${entry.answer_id}`);
    if (data === null) {
      axios.put(`/api/qa/answers/${id}/helpful`)
        .catch((error) => {
          console.log(error);
        });
      setClickHelpful(true);
      localStorage.setItem(`ssu: ${entry.answer_id}`, true);
    }
  };

  const handleAnswerReport = (e, id) => {
    if (!clickReport) {
      e.preventDefault();
      axios.put(`/api/qa/answers/${id}/report`)
        .catch((error) => {
          console.log(error);
        });

      setClickReport(true);
    }
  };

  return (
    <>
      <div style={{ fontSize: '20px', paddingTop: '15px' }}>
        <b>A: </b>
        {entry.body}
      </div>
      <div style={{ fontSize: '14px', color: 'grey', paddingTop: '6px' }}>
        {`by ${entry.answerer_name} | ${postedDate} | Helpful? `}
        <WordIncrement onClick={(e) => handleAnswerHelpful(e, entry.answer_id)}>
          <u>Yes</u>
        </WordIncrement>
        {`(${clickHelpful ? entry.helpfulness + 1 : entry.helpfulness}) | `}
        <WordIncrement onClick={(e) => handleAnswerReport(e, entry.answer_id)}><u>{clickReport ? 'Reported' : 'Report'}</u></WordIncrement>
      </div>
    </>
  );
}
