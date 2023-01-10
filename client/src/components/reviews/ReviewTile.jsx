/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { parseISO, format } from 'date-fns';
import axios from 'axios';
import { ReviewTile } from './styles/ReviewTile.styled.js';

export default function ({ review, getReviews }) {
  const markHelpful = () => {
    const data = localStorage.getItem(`reviewHelpful: ${review.review_id}`);
    if (data === null) {
      axios.put(`api/reviews/${review.review_id}/helpful`)
        .then(() => {
          getReviews();
        })
        .catch((err) => {
          console.log(err);
        });
      localStorage.setItem(`reviewHelpful: ${review.review_id}`, true);
    }
  };

  return (
    <ReviewTile>
      <div className="top">
        <h3>{review.summary}</h3>
        <span>{`by: ${review.reviewer_name}`}</span>
        <span>{format(parseISO(review.date), 'MMM d, yyyy')}</span>
        <div>
          {
            review.rating > 0
              ? <span>★</span>
              : <span>☆</span>
          }
          {
            review.rating > 1
              ? <span>★</span>
              : <span>☆</span>
          }
          {
            review.rating > 2
              ? <span>★</span>
              : <span>☆</span>
          }
          {
            review.rating > 3
              ? <span>★</span>
              : <span>☆</span>
          }
          {
            review.rating > 4
              ? <span>★</span>
              : <span>☆</span>
          }
        </div>
      </div>
      <p>{review.body}</p>
      {
        review.response !== null
          ? <p>{`response from seller: ${review.response}`}</p>
          : null
      }
      {
        review.recommend
          ? <p>✓ I recommend this product</p>
          : null
      }
      <p>{review.response ? (`Response from seller: ${review.response}`) : null }</p>
      <p>{`${review.helpfulness} helpful`}</p>
      {
        !localStorage.getItem(`reviewHelpful: ${review.review_id}`)
          ? <p className="pointer" onClick={() => markHelpful()}>Mark Helpful</p>
          : null
      }
      {
        review.photos.map((photo, index) => <img key={index} src={photo.url} alt="" />)
      }
    </ReviewTile>
  );
}
