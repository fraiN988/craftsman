import React, { useState } from 'react';
import api from '../services/api';
import '../assets/CraftsmenCard.css';

const CraftsmanCard = ({ craftsman }) => {
  const [rating, setRating] = useState(craftsman.rating);

  const handleRating = async () => {
    const updatedRating = rating + 1;
    setRating(updatedRating);
    await api.put(`/craftsmen/${craftsman._id}`, { rating: updatedRating });
  };

  return (
    <div className="craftsman-card">
      <img src={craftsman.photo} alt={`${craftsman.name} ${craftsman.surname}`} />
      <h3>{craftsman.name} {craftsman.surname}</h3>
      <p>Specialization: {craftsman.specialization}</p>
      <p>Service: {craftsman.serviceName}</p>
      <p>City: {craftsman.city}</p>
      <p>Rating: {rating}</p>
      <button onClick={handleRating}>❤️</button>
    </div>
  );
};

export default CraftsmanCard;
