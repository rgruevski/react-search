import React, { useState } from 'react';
import HeaderSelection from './components/HeaderSelection';
import GetXLSX from './components/ImportExcelData';

const xlsxData = GetXLSX();

export default function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filteredData = data.filter((item) => {
    if (search && !item.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    if (category && item.category !== category) {
      return false;
    }
    return true;
  });

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleHeaderSubmit = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="container">
      <h3 className="sTitle">Search</h3>
      <div className="search-form">
        <input
          type="text"
          placeholder="Search with text..."
          value={search}
          onChange={handleSearchChange}
          className="input" />
      </div>
      <div className="headerSelection">
        <HeaderSelection onHeaderSubmit={handleHeaderSubmit} />
      </div>
      <div className="results">
        {filteredData.map((item) => (
          <div key={item.id} className="item">
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};