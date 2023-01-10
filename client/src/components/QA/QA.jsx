import React from 'react';
import Listview from './qa-components/Listview.jsx';
import Container from './styles/Container.styled.js';

export default function QA({ currentProduct }) {
  return (
    <Container>
      <span>{currentProduct.name}</span>
      <span style={{ display: 'flex', justifyContent: 'center' }}>Questions & Answers</span>
      <Listview currentProduct={currentProduct} />
    </Container>
  );
}
