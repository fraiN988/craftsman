import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../assets/LoginForm.css'; 

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { username, password });
      const { token, role } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      setUser({ username, role });
      navigate(role === 'admin' ? '/admin' : '/');
    } catch (err) {
      console.error(err);
    
      setError(err.response.data.message || 'An error occurred');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
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
      {error && <div className="error-message">{error}</div>} {}
      <button className="submit-button" type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
