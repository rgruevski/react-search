import React, { useState } from 'react';

const data = [
  { id: 1, name: 'Apple', category: 'Fruits' },
  { id: 2, name: 'Banana', category: 'Fruits' },
  { id: 3, name: 'Carrot', category: 'Vegetables' },
  { id: 4, name: 'Eggplant', category: 'Vegetables' },
];

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

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="container">
      <h3>Search</h3>
      <div className="search-form">
        <input type="text" placeholder="Search..." value={search} onChange={handleSearchChange} className="input"/>
        <select value={category} onChange={handleCategoryChange}>
          <option value="">All categories</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
        </select>
      </div>
      <div className="results">
        {filteredData.map((item) => (
          <div key={item.id} className="item">
            <p>Name: {item.name}</p>
            <p>Category: {item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};