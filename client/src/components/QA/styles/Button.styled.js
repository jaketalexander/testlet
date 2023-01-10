import styled from 'styled-components';

const Button = styled.button`
  transition: all 0.34s ease;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  background-color: ${(props) => props.theme.buttonBG};
  color: ${(props) => props.theme.buttonColor};
  width: fit-content;
  margin-top: 10px;


  &: hover {
    opacity: 0.9;
    transform: scale(0.98);
    background-color: ${(props) => props.theme.buttonColor};
    color: ${(props) => props.theme.buttonBG};
  }
`;

export default Button;
