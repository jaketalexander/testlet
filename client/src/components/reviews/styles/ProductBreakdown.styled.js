/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ProductBreakdown = styled.div`
  grid-column: 2;


  .line-box {
    position: relative;
    display: inline-block;
    width: 100px;
    margin: 0 10px;
    border: 1px solid black;
  }

  .line-icon {
    position: absolute;
    bottom: -7px;
  }
  
  p {
    margin: 0;
    line-height: 1;
  }

  .char-box {
    margin-bottom: 20px;
    width: 150px;
  }
`;
