import React from 'react';
import "./Search.css"

export default function Search ({ query, setQuery, search }) {
  return (
    <div className='search-box'>
      <input
        type="text"
        className="search-bar"
        placeholder='Search...'
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
    </div>
  );
}