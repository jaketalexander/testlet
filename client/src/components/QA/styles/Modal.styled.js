import styled from 'styled-components';

const ModalContainer = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1000;
background-color: rgba(0,0,0,0.75);
display: flex;
font-size: 20px;
`;

const Modal = styled.section`
margin: auto;
width: 60%;
max-height: 75%;
max-width: 40rem;
min-width: 3 0rem;
background-color: ${(props) => props.theme.body};
color: ${(props) => props.theme.fontColor};
overflow-y: auto;
display: inline-block;
`;

const ModalHeader = styled.header`
border-stlye: solid;
border-size: 1px;
padding: 1rem 1rem 0 1rem;
position: relative;
`;

const ModalContent = styled.header`
padding: 0 1.5rem 1.5rem 1.5rem;
`;

const Exit = styled.p`
padding: 0;
position: absolute;
top: 0;
right: 1rem;
color: ${(props) => props.theme.fontColor};

&: hover {
  cursor: pointer;
}
`;

const BiggerInput = styled.textarea`
width: 70%;
display: block;
margin-left: auto;
margin-right: auto;
margin-bottom: 15px;
background-color: ${(props) => props.theme.body};
color: ${(props) => props.theme.fontColor};
border: 2px solid;
border-color: ${(props) => props.theme.inputBorderColor};

&: focus {
  height: 10em;
}
`;
const SmallerInput = styled.input`
width: 50%;
display: block;
margin-left: auto;
margin-right: auto;
background-color: ${(props) => props.theme.body};
color: ${(props) => props.theme.fontColor};
border-color: ${(props) => props.theme.inputBorderColor};
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
