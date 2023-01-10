import styled from 'styled-components';

const Button = styled.button`
  // @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
  font-family: 'Courier Prime', monospace;
  transition: all 0.34s ease;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  margin-right: 7.5px;
  background-color: ${(props) => props.theme.buttonBG};
  color: ${(props) => props.theme.buttonColor};
  width: fit-content;

  &: hover {
    opacity: 0.9;
    transform: scale(0.98);
    background-color: ${(props) => props.theme.buttonColor};
    color: ${(props) => props.theme.buttonBG};
  }
`;

const AppDiv = styled.div`

  // @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
  font-family: 'Courier Prime', monospace;

  .page {
    display: grid;
    grid-template-columns: 140px 1fr;
  }

  .side-bar {
    grid-column: 1;
    overflow-y: auto;
    max-height: 80vh;
  }

  .main {
    grid-column: 2;
  }

  h1 {
    text-align: center;
    margin-bottom: 5px;
    color: red;
  }

  .center-bar {
    text-align: center;
    margin-bottom: 3px;
  }

  center-bar span {
    display: inline-block;
  }

  .pointer {
    cursor: pointer;
    padding: 2px 2px 2px 0;
    display: inline-block;
    font-size: 12px;
    margin: 0;
    line-height: 1.1;
    &:hover {
      background-color: red;
      color: ${(props) => props.theme.buttonBG};
    }
  }

  .pointer-on {
    background-color: ${(props) => props.theme.buttonColor};
    color: ${(props) => props.theme.buttonBG};
  }
`;

export {
  Button,
  AppDiv,
};
