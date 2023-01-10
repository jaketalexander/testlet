import styled from 'styled-components';

export const StyledCurrentStyleSelected = styled.div`
  img {
    position: relative;
    padding: 5px;
    width:100%;
    height:100%;
    object-fit:cover;
  }
`;

export const StyledImgContainer = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  padding-right: 100px;
  overflow: hidden;
`;

export const CheckMarkOverlay = styled.div`
  position: absolute;
  left: 3.5%;
  z-index: 1;
  color: red;
`;
