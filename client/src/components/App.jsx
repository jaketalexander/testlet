/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Header from './Header.jsx';
import Create from './Create.jsx';
import Home from './Home.jsx';
import Study from './Study.jsx';
import '../styles/App.css';

export default function App() {
  const [tab, setTab] = useState(1);
  const [currentDeck, setCurrentDeck] = useState([]);
  return (
    <div>
      <Header setTab={setTab} />
      {tab === 1 && <Home setTab={setTab} setCurrentDeck={setCurrentDeck} />}
      {tab === 2 && <Create setTab={setTab} />}
      {tab === 3 && <Study setTab={setTab} currentDeck={currentDeck} />}
    </div>
  );
}
