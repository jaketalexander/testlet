import React, { useState } from 'react';
import Header from './Header.jsx';
import Create from './Create.jsx';
import Home from './Home.jsx';
import Study from './Study.jsx';
import SignIn from './SignIn.jsx';
import '../styles/App.css';

export default function App() {
  const [tab, setTab] = useState(0);
  const [currentDeck, setCurrentDeck] = useState([]);
  const [search, setSearch] = useState('');
  const [deckName, setDeckName] = useState('');

  return (
    <div>
      <Header setTab={setTab} tab={tab} search={search} setSearch={setSearch} />
      {tab === 0 && <SignIn />}
      {tab === 1 && (
        <Home
          setTab={setTab}
          setCurrentDeck={setCurrentDeck}
          search={search}
          setSearch={setSearch}
          setDeckName={setDeckName}
        />
      )}
      {tab === 2 && <Create setTab={setTab} />}
      {tab === 3 && (
        <Study setTab={setTab} currentDeck={currentDeck} deckName={deckName} />
      )}
      {tab === 3 && (
        <Study
          setCurrentDeck={setCurrentDeck}
          currentDeck={currentDeck}
          deckName={deckName}
        />
      )}
    </div>
  );
}
