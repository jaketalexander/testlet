import React, { useState } from 'react';
import ExtendedViewDots from './ExtendedViewDots.jsx';
import {
  ModalContainer, ExtendedViewContainer, StyledLeftArrow, StyledRightArrow, StyledDots,
  StyledExit, StyledImgContainer, StyledExtendedImg, StyledMagnifier, StyledExpandedZoom,
} from './styles/ViewModal.styled.js';

export default function ViewModal({
  mainImage, currentIndex, currentStyle, goToExtendedView,
  setCurrentIndex, setMainImage, magnifierHeight = 300,
  magnifieWidth = 300,
  zoomLevel = 2.5,
}) {
  const [showMagnify, setShowMagnify] = useState(false);
  const [clickMagnify, setClickMagnify] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [[width, height], setSize] = useState([0, 0]);

  const onRightClick = () => {
    if (currentIndex !== currentStyle.photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const onLeftClick = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onImageClick = (e) => {
    setClickMagnify(!clickMagnify);
  };

  const mouseMove = (e) => {
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();
    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;
    setXY([x, y]);
  };

  return (
    <div>
      <ModalContainer>
        <StyledLeftArrow onClick={onLeftClick}>←</StyledLeftArrow>
        <ExtendedViewContainer onClick={onImageClick} clickMagnify={clickMagnify}>
          <div
            style={{
              position: "relative",
              height: `100%`,
              width: `100%`
            }}
          >
            <img
              style={{
                height: "100%",
                width: "auto",
              }}
                onMouseMove={(e) => mouseMove(e)}
                onMouseEnter={(e) => {
                  // update image size and turn-on magnifier
                  const elem = e.currentTarget;
                  const { width, height } = elem.getBoundingClientRect();
                  setSize([width, height]);
                  setShowMagnify(true);
                }}
                onMouseLeave={() => {
                  // close magnifier
                  setShowMagnify(false);
                }}
                className="test"
                onClick={(e) => onImageClick(e)}
                src={currentStyle.photos[currentIndex].thumbnail_url}
                alt="Main Product"
              />
            {clickMagnify ? <div
              style={{
                display: showMagnify ? "" : "none",
                position: "absolute",

                // prevent magnifier blocks the mousemove event of img
                pointerEvents: "none",
                // set size of magnifier
                height: `${magnifierHeight}px`,
                width: `${magnifieWidth}px`,
                // move element center to cursor pos
                top: `${y - magnifierHeight / 2}px`,
                left: `${x - magnifieWidth / 2}px`,
                opacity: "1", // reduce opacity so you can verify position
                border: "1px solid lightgray",
                backgroundImage: `url('${currentStyle.photos[currentIndex].thumbnail_url}')`,
                backgroundRepeat: "no-repeat",

                //calculate zoomed image size
                backgroundSize: `${width * zoomLevel}px ${
                  height * zoomLevel
                }px`,

                //calculate position of zoomed image.
                backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
              }}
            ></div>
            : null }
          </div>
          <StyledExit onClick={goToExtendedView}>❌</StyledExit>
          <StyledDots>
            {currentStyle ? currentStyle.photos.map((photo, index) => {
              return <ExtendedViewDots key={index} index={index} setCurrentIndex={setCurrentIndex} setMainImage={setMainImage} currentStyle={currentStyle} currentIndex={currentIndex} />
            }) : null}
          </StyledDots>
        </ExtendedViewContainer>
        <StyledRightArrow onClick={onRightClick}>→</StyledRightArrow>
      </ModalContainer>
    </div>
  );
}
