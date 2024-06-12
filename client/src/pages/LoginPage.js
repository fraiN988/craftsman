import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ setUser }) => {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm setUser={setUser} />
    </div>
  );
};

export default LoginPage;
