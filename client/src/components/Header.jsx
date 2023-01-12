import React, { useState } from 'react';
import '../styles/Header.css';

function Header({ setTab }) {
  const [search, setSearch] = useState('');

  function handleTabChange(event, num) {
    event.preventDefault();
    setTab(num);
  }

  return (
    <header>
      <div className="left-header">
        <h1>Quizlet</h1>
        <h4 onClick={(e) => handleTabChange(e, 1)}>Home</h4>
        <h4 onClick={(e) => handleTabChange(e, 2)}>Create</h4>
      </div>
      <div className="right-header">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <img className="icon" src="https://images.macrumors.com/t/XjzsIpBxeGphVqiWDqCzjDgY4Ck=/800x0/article-new/2019/04/guest-user-250x250.jpg?lossy" />
      </div>
    </header>
  );
}

export default Header;
