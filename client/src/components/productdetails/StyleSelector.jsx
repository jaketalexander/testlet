import React from 'react';
import CurrentStyleSelected from './CurrentStyleSelected.jsx';
import { StyledStyleSelector, StyledGrid, StyledStyle } from './styles/StyleSelector.styled.js';

function StyleSelector({
  allStyles, currentStyle, setCurrentStyle, setMainImage, setThumbnails, reset,
}) {
  return (
    <StyledStyleSelector>
      <StyledStyle>{!currentStyle ? null : currentStyle.name}</StyledStyle>
      <StyledGrid>
        {allStyles.map((product, index) => <CurrentStyleSelected className="item" key={product.style_id} index={index} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} product={product} setMainImage={setMainImage} setThumbnails={setThumbnails} reset={reset} />)}
      </StyledGrid>
    </StyledStyleSelector>
  );
}

export default StyleSelector;
