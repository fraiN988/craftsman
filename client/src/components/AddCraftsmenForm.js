import React, { useState } from 'react';
import api from '../services/api';
import '../assets/AddCraftsmenForm.css'; 

const AddCraftsmanForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [photo, setPhoto] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCraftsman = { name, surname, specialization, photo, serviceName, city };
    try {
      await api.post('/craftsmen/add', newCraftsman);
      alert('Craftsman added');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="add-craftsman-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Specialization"
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
      />
      <input
        type="text"
        placeholder="Photo URL"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <input
        type="text"
        placeholder="Service Name"
        value={serviceName}
        onChange={(e) => setServiceName(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Add Craftsman</button>
    </form>
  );
};

export default AddCraftsmanForm;
