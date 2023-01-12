/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Create from './Create.jsx';
import Home from './Home.jsx';
import '../styles/App.css';

export default function App() {
  const [tab, setTab] = useState(1);
  return (
    <div>
      <Header setTab={setTab} />
      {tab === 1 && <Home />}
      {tab === 2 && <Create />}
    </div>
  );
}
