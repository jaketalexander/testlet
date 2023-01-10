import React from 'react';
import { StyledImage, StyledSelectedImage } from './styles/Image.styled.js';

function Image({
  photo, setMainImage, index, setCurrentIndex, currentStyle, currentIndex,
}) {
  const setIndexAndMain = () => {
    setMainImage(currentStyle);
    if (index < currentStyle.photos.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <StyledImage>
      <div>
        {!currentStyle.photos[currentIndex]
          ? null
          : currentStyle.photos[currentIndex].thumbnail_url === photo.thumbnail_url
            ? <StyledSelectedImage onClick={() => setIndexAndMain(photo, index)} src={photo.thumbnail_url} alt="style" />
            : <img onClick={() => setIndexAndMain(photo, index)} src={photo.thumbnail_url} alt="style" />}
      </div>
    </StyledImage>
  );
}

export default Image;
