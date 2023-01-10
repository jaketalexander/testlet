/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import RatingSummary from './RatingSummary.jsx';
import { RatingBreakdown } from './styles/RatingBreakdown.styled.js';
import ProductBreakdown from './ProductBreakdown.jsx';

export default function ({ reviews, filterRating, ratingFilter, meta }) {
  return (
    <RatingBreakdown>
      <RatingSummary reviews={reviews} />
      <a className={'pointer' + (ratingFilter === 5 ? ' pointer-on' : '')} onClick={() => filterRating(5)}>{ '★★★★★ : ' + reviews.filter((review) => review.rating === 5).length }</a>
      <br />
      <a className={'pointer' + (ratingFilter === 4 ? ' pointer-on' : '')} onClick={() => filterRating(4)}>{ '★★★★☆ : ' + reviews.filter((review) => review.rating === 4).length }</a>
      <br />
      <a className={'pointer' + (ratingFilter === 3 ? ' pointer-on' : '')} onClick={() => filterRating(3)}>{ '★★★☆☆ : ' + reviews.filter((review) => review.rating === 3).length }</a>
      <br />
      <a className={'pointer' + (ratingFilter === 2 ? ' pointer-on' : '')} onClick={() => filterRating(2)}>{ '★★☆☆☆ : ' + reviews.filter((review) => review.rating === 2).length }</a>
      <br />
      <a className={'pointer' + (ratingFilter === 1 ? ' pointer-on' : '')} onClick={() => filterRating(1)}>{ '★☆☆☆☆ : ' + reviews.filter((review) => review.rating === 1).length }</a>
      <br />
      <br />
      {
        meta.characteristics
          ? <ProductBreakdown characteristics={meta.characteristics} />
          : null
      }
    </RatingBreakdown>
  );
}
