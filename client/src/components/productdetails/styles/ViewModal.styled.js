import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 20px;
  height: 100%;

  button {
    display: flex;
    position: relative;
    margin-bottom: 655px;
  }
`;

const Exit = styled.p`
padding: 0;
position: absolute;
top: 0;
right: 1rem;
&: hover {
  cursor: pointer;
}
`;

const ExtendedViewContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  width: auto;
  cursor: ${(props) => (props.clickMagnify ? 'zoom-out' : 'crosshair')};
`;

const StyledLeftArrow = styled.div`
  position: absolute;
  left: 0;
  margin-top: 320px;
  font-size: 100px;
  cursor: pointer;
  color: white;
`;

const StyledRightArrow = styled.div`
  position: absolute;
  right: 0;
  margin-top: 320px;
  font-size: 100px;
  cursor: pointer;
  color: white;
`;

const StyledDots = styled.div`
  position: absolute;
  bottom: 0;
  left: 42%;
  opacity: 5;
  padding: 0 8px;
  background-color: rgba(255,255,255,.4);
  border-radius: 15px;
  display: flex;
  justify-content: center;
`;

const StyledImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  cursor: crosshair;
`;

const StyledExit = styled.div`
  padding: 0;
  position: absolute;
  top: 0;
  right: .4rem;
  height: 27px;
  background-color: rgba(0,0,0,0);
  &: hover{
    cursor: pointer;
  }
`;

const StyledExtendedImg = styled.img`
  cursor: crosshair;
`;

const StyledMagnifier = styled.div`
  display: ${(props) => (props.showMagnify ? '' : 'none')};
  position: absolute;
  pointerEvents: none;
  height: 300px;
  width: 300px;
  top: ${(props) => props.y - 100 / 2}px;
  left: ${(props) => props.x / 2}px;
  opacity: 1;
  border: 1px solid lightgray;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-size: ${(props) => props.width * 1.5}px ${(props) => props.height * 1.5}px;
  background-position: ${(props) => -props.x * 1.5 + 100 / 2}px ${(props) => -props.y * 1.5 + 100 / 2}px;
  cursor: zoom-out;
`;

export {
  ModalContainer,
  Exit,
  ExtendedViewContainer,
  StyledLeftArrow,
  StyledRightArrow,
  StyledDots,
  StyledExit,
  StyledImgContainer,
  StyledExtendedImg,
  StyledMagnifier,
};
