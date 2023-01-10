import styled from "styled-components";

export const ReviewTile = styled.div`
  grid-column: 3;
  font-size: 12px;
  border: 1px solid;
  border-color: ${(props) => props.theme.inputBorderColor};
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;

  h3 {
    margin: 0 20px 5px 0;
    display: inline-block
  }

  .top {
    display: grid;
    grid-template-columns: 35% 25% 25% 15%;
  }

  img {
    width: 100px;
  }

  .pointer {
    margin: 0;
  }

`