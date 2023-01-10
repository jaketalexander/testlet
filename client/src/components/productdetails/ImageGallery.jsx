/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import Image from './Image.jsx';
import {
  StyledImageGallery, StyledThumbnails, StyleLeftButton, StyleRightButton, StyledMainImage,
} from './styles/ImageGallery.styled.js';

function ImageGallery({
  currentProduct, currentStyle, mainImage, setMainImage,
  setCurrentIndex, currentIndex, goToExtendedView, firstIndex, setFirstIndex,
  shortenedThumbnails, setThumbnails, reset,
}) {
  const leftButton = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
      if (currentIndex < 9) {
        setFirstIndex(0);
        setThumbnails();
        reset();
      }
    }
  };

  const rightButton = () => {
    if (currentIndex !== currentStyle.photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex > 4) {
        setFirstIndex(7);
        setThumbnails();
        reset();
      }
    }
  };

  useEffect(() => {
    reset();
  }, [shortenedThumbnails]);

  return (
    <StyledImageGallery>

      <StyledThumbnails>
        {!currentStyle
          ? <StyleLeftButton id="LeftArrow" aria-label="Left Arrow Thumbnail Navigator" onClick={leftButton}> </StyleLeftButton>
          : currentIndex === 0 && firstIndex !== 7
            ? <StyleLeftButton id="LeftArrow" aria-label="Left Arrow Thumbnail Navigator" onClick={leftButton}> </StyleLeftButton>
            : <StyleLeftButton id="LeftArrow" aria-label="Left Arrow Thumbnail Navigator" onClick={leftButton}>←</StyleLeftButton>}
        {shortenedThumbnails
          // eslint-disable-next-line max-len
          ? shortenedThumbnails.map((photo, index) => <Image key={index} index={index + firstIndex} photo={photo} setMainImage={setMainImage} setCurrentIndex={setCurrentIndex} currentStyle={currentStyle} currentIndex={currentIndex} />)
          : currentStyle
            // eslint-disable-next-line max-len
            ? currentStyle.photos.map((photo, index) => {
              if (index < 7) {
                // eslint-disable-next-line max-len
                return <Image key={index} index={index} photo={photo} setMainImage={setMainImage} setCurrentIndex={setCurrentIndex} currentStyle={currentStyle} currentIndex={currentIndex} />;
              }
            })
            : null}
        {!currentStyle
          ? <StyleRightButton id="RightArrow" aria-label="Right Arrow Thumbnail Navigator" onClick={rightButton}> </StyleRightButton>
          : currentIndex === currentStyle.photos.length - 1
            ? <StyleRightButton id="RightArrow" aria-label="Right Arrow Thumbnail Navigator" onClick={rightButton}> </StyleRightButton>
            : <StyleRightButton id="RightArrow" aria-label="Right Arrow Thumbnail Navigator" onClick={rightButton}>→</StyleRightButton>}
      </StyledThumbnails>

      {!currentStyle
        ? null
        : currentStyle.photos[currentIndex]
          ? <StyledMainImage onClick={goToExtendedView} src={currentStyle.photos[currentIndex].thumbnail_url} alt="Main Product" />
          : null}
    </StyledImageGallery>
  );
}

export default ImageGallery;
