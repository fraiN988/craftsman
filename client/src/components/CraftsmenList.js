import React, { useState, useEffect } from 'react';
import api from '../services/api';
import CraftsmenCard from './CraftsmenCard';
import '../assets/CraftsmenList.css'; 

const CraftsmenList = () => {
  const [craftsmen, setCraftsmen] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCraftsmen = async () => {
      const response = await api.get('/craftsmen');
      setCraftsmen(response.data);
    };
    fetchCraftsmen();
  }, []);

  const filteredCraftsmen = craftsmen.filter(craftsman =>
    craftsman.name.toLowerCase().includes(search.toLowerCase()) ||
    craftsman.specialization.toLowerCase().includes(search.toLowerCase()) ||
    craftsman.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="craftsmen-list-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search by name, specialization, or city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="craftsmen-grid">
        {filteredCraftsmen.map(craftsman => (
          <CraftsmenCard key={craftsman._id} craftsman={craftsman} />
        ))}
      </div>
    </div>
  );
};

export default CraftsmenList;
