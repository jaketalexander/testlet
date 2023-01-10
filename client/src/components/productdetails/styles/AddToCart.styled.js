import styled from 'styled-components';

const StyledAddToCart = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;

  button {
    background-color: ${(props) => props.theme.fontColor};
    color: ${(props) => props.theme.body};
  }
`;

export default StyledAddToCart;
