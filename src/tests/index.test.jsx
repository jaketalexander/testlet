// this will be our test file
import React from 'react';
import { render, screen } from '@testing-library/react';
import QA from '../../client/src/components/QA/QA.jsx';
import Overview from '../../client/src/components/productdetails/overview.jsx';
import RatingsAndReviews from '../../client/src/components/reviews/RatingsAndReviews.jsx';
import {
  allStyles, currentProduct, allReviews, currentStyle, numReviews, reviews,
} from '../../client/src/testData/testData.js';

// afterEach(cleanup);

describe('Questions and Answers', () => {
  it('renders successfully', () => {
    render(<QA currentProduct={currentProduct} />);
    const testElement = screen.queryByText('Questions & Answers');
    expect(testElement).toBeInTheDocument();
  });
});

describe('App', () => {
  it('Overview renders successfully', async () => {
    render(<Overview
      currentProduct={currentProduct}
      allReviews={allReviews}
      numReviews={numReviews}
      allStyles={allStyles}
      currentStyle={currentStyle}
      reviews={reviews}
    />);
    const testElement = screen.queryByText('Sunny Side Up');
    await (() => expect(testElement).toBeInTheDocument());
  });
});

describe('Ratings and Reviews', () => {
  it('renders successfully', () => {
    render(<RatingsAndReviews currentProduct={currentProduct} />);
    const testElement = screen.queryByText('Reviews');
    expect(testElement).toBeInTheDocument();
  });
});
