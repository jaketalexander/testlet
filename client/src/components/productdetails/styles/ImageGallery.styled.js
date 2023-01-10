import styled from 'styled-components';

export const StyledImageGallery = styled.div`
  display: relative;
  justify-content: center;
  align-content: center;
`;

export const StyledMainImage = styled.img`
  cursor: zoom-in;
  height: 100%;
  width: 100%;
  max-width: 500px;
  object-fit: fill;
`;

export const StyledThumbnails = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  left: auto;
  width: 100%;
  cursor: default;
  margin-bottom: 5px;
`;

export const StyleLeftButton = styled.button`
  border: none;
  font-size: 30px;
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 10%;
  padding-top: 8px;
  background-color: white;
  align-content: center;
  background-color: ${(props) => props.theme.body};
  transition: all 0.34s ease;
`;

export const StyleRightButton = styled.button`
  border: none;
  font-size: 30px;
  color: ${(props) => props.theme.fontColor};
  top: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 10%;
  padding-top: 8px;
  background-color: white;
  align-content: center;
  background-color: ${(props) => props.theme.body};
  transition: all 0.34s ease;
`;
