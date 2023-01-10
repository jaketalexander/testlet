/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { differenceInDays, parseISO } from 'date-fns';
import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import { Container } from './styles/Container.styled.js';

export default function ({ currentProduct }) {
  // get reviews
  const [reviews, setReviews] = useState([]);
  const [visReviews, setVisReviews] = useState([]);
  const [meta, setMeta] = useState({});
  const [numReviews, setNumReviews] = useState(2);
  const [sortBy, setSortBy] = useState('relevance');
  const [ratingFilter, setRatingFilter] = useState(6);

  const getReviews = () => {
    axios.get(`/api/reviews?product_id=${currentProduct.id}&count=1000`)
      .then((response) => {
        setReviews(response.data.results);
      }).catch((error) => {
        console.log(error);
      });
  };

  const getMeta = () => {
    axios.get(`/api/reviews/meta/?product_id=${currentProduct.id}`)
      .then((response) => {
        setMeta(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getReviews();
    getMeta();
  }, []);

  const updateVisReviews = () => {
    let out = reviews.slice();
    let metric;
    out = out.sort((a, b) => {
      if (sortBy === 'relevance') {
        metric = (differenceInDays(parseISO(b.date), parseISO(a.date)) + b.helpfulness - a.helpfulness);
      } else if (sortBy === 'newest') {
        metric = differenceInDays(parseISO(b.date), parseISO(a.date));
      } else { // sortBy = 'helpful'
        metric = b.helpfulness - a.helpfulness;
      }

      if (metric < 0) return -1;
      if (metric > 0) return 1;
      return 0;
    });

    out = out.filter((review) => review.rating <= ratingFilter);

    setVisReviews(out.slice(0, numReviews));
  };

  useEffect(() => {
    updateVisReviews();
  }, [reviews, numReviews, sortBy, ratingFilter]);

  const filterRating = (num) => {
    if (ratingFilter === num) setRatingFilter(6);
    else setRatingFilter(num);
  };

  return (
    <Container>
      <div className="main">
        <RatingBreakdown reviews={reviews} meta={meta} filterRating={filterRating} ratingFilter={ratingFilter} />
        <ReviewList product={currentProduct} reviews={reviews} meta={meta} visReviews={visReviews} numReviews={numReviews} sortBy={sortBy} setSortBy={setSortBy} setNumReviews={setNumReviews} getReviews={getReviews} />
      </div>
    </Container>
  );
}
