import styled from 'styled-components';

const StyledImage = styled.div`
  img {
    width:100%;
    height:100%;
    object-fit:cover;
  }

  button {
    all: revert;
  }

  div {
    padding: 3px;
    height: 50px;
    width: 50px;
  }
`;

const StyledSelectedImage = styled.img`
  border: 1px;
  border-color: ${(props) => props.theme.fontColor};
  border-style: ridge;
`;

export {
  StyledImage,
  StyledSelectedImage,
};
