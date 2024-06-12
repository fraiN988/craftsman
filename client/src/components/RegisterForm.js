import React, { useState } from 'react';
import api from '../services/api';
import '../assets/RegisterForm.css'; 

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { username, password });
      alert('User registered');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="input-field"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="submit-button" type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
