import styled from 'styled-components';

const Bucket = styled.div`
  border: 1px solid;
  border-color: ${(props) => props.theme.borderColor};
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  padding-top: '30px';
  font-size: '30px';
`;

export default Bucket;
