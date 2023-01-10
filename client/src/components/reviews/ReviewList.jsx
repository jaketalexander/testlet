import React, { useState, Suspense } from "react"

import ReviewTile from "./ReviewTile.jsx";
import { ReviewList } from './styles/ReviewList.styled.js';

const AddReviewModal = React.lazy(() => import("./AddReviewModal.jsx"));

export default function ({ product, reviews, visReviews, numReviews, sortBy, setSortBy, setNumReviews, getReviews, meta }) {

  const [showModal, setShowModal] = useState(false);

  return (
    <ReviewList>
      <h3>Reviews</h3>
      <p className='pointer write-review' onClick={() => {setShowModal(true)}}>Write a review</p>
      <div className='helper'>
        <span>Sort reviews by - </span>
        <span className='pointer' style={ sortBy==='helpful' ? {'fontWeight' : 'bold'} : null } onClick={ () => setSortBy('helpful') }> helpful </span>
        <span> - </span>
        <span className='pointer'  style={ sortBy==='newest' ? {'fontWeight' : 'bold'} : null } onClick={ () => setSortBy('newest') }>newest </span>
        <span> - </span>
        <span className='pointer'  style={ sortBy==='relevance' ? {'fontWeight' : 'bold'} : null } onClick={ () => setSortBy('relevance') }>relevance</span>
      </div>
      {
        visReviews.map((review, index) => {
          return <ReviewTile key={review.review_id} review={review} getReviews={getReviews} />;
        })
      }
      <div className='helper pointer'>
        {
          numReviews < reviews.length ?
          <div onClick={() => { setNumReviews(numReviews + 2); }}>Load more reviews</div> :
          <div onClick={() => { setNumReviews(2); }}>Show fewer reviews</div>
        }
      </div>

      {(showModal && meta.characteristics)
      && (
      <Suspense fallback={<div>Loading</div>}>
        (<AddReviewModal product={product} setShowModal={setShowModal} characteristics={meta.characteristics} />)
      </Suspense>
      )}
    </ReviewList>
  );
}
