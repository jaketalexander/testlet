import styled from 'styled-components';

const ModalContainer = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1000;
display: flex;
background-color: rgba(0,0,0,0.75);
margin: 0;

.modal-title {
  margin: 0;
}

.rating span {
  font-size: 24px;
}

`;

const Modal = styled.section`
margin: auto;
width: 90%;
max-width: 40rem;
background-color: ${(props) => props.theme.body};
color: ${(props) => props.theme.fontColor};
`;

const ModalHeader = styled.header`
  position: relative;
  margin: 16px 0 0 16px;
`;

const ModalContent = styled.header`
padding: 1.5rem;
`;

const Exit = styled.p`
padding: 0;
position: absolute;
font-size: 20px;
top: 0;
right: 1rem;

&: hover {
  cursor: pointer;
}
`;

const BiggerInput = styled.textarea`
width: 70%;

&: focus {
  height: 10em;
}
`;
const SmallerInput = styled.input`
width: 50%;
margin: 10px 0;
`;

export {
  ModalContainer,
  Modal,
  ModalHeader,
  ModalContent,
  Exit,
  BiggerInput,
  SmallerInput,
};
