import React from 'react';
import RatingSummary from '../reviews/RatingSummary.jsx';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton, FacebookIcon, PinterestIcon, TwitterIcon } from 'react-share';

import {
  StyledSalePrice, StyledOriginalPrice, StyledName, StyleShare,
} from './styles/ProductInfo.styled.js';

function ProductInfo({
  currentProduct, allReviews, numReviews, currentStyle, reviews, setTab,
}) {
  const goToReviews = () => {
    setTab('reviews');
  };
  return (
    <div>
      {numReviews !== 0
        ? (
          <div>
            <RatingSummary reviews={reviews} />
            <a href="#" onClick={goToReviews}>
              {' '}
              Read all [
              {numReviews}
              ] reviews
            </a>
          </div>
        )
        : null}
      <div>
        {currentProduct.category}
      </div>
      <StyledName>
        {currentProduct.name}
      </StyledName>
      <div>
        {!currentStyle
          ? null
          : currentStyle.sale_price
          ? <div>
           <StyledSalePrice>${currentStyle.sale_price.slice(0, -3)}</StyledSalePrice>
           <StyledOriginalPrice>${currentStyle.original_price.slice(0, -3)}</StyledOriginalPrice>
          </div>
          : currentStyle
          ? <div>${currentStyle.original_price.slice(0, -3)}</div> : null}
      </div>
      <div>
        <b>Description </b>
        <br />
        {currentProduct.description}
      </div>
      <div>
        <StyleShare>
          <FacebookShareButton url="https://www.supremenewyork.com/">
            <FacebookIcon size={20} />
          </FacebookShareButton>
        </StyleShare>
        <StyleShare>
          <PinterestShareButton url="https://www.supremenewyork.com/" media="https://en.wikipedia.org/wiki/Instagram_egg#/media/File:Instagram_egg.jpg">
            <PinterestIcon size={20} />
          </PinterestShareButton>
        </StyleShare>
        <StyleShare>
          <TwitterShareButton url="https://www.supremenewyork.com/">
            <TwitterIcon size={20} />
          </TwitterShareButton>
        </StyleShare>
      </div>
    </div>
  );
}

export default ProductInfo;
