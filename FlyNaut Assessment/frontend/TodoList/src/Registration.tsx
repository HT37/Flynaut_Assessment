import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from './api/api';

const Registration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

      await createUser(email, username, password)
    // Handle registration logic here
    console.log('Registration submitted:', email, username, password);
    navigate('/');
  
  
  };

  const redlogin = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ padding: "0.5rem", margin: "2px" }}>
          <label >Email:</label>
          <input style={{ marginLeft: "30px" }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={{ padding: "0.5rem", margin: "2px" }}>
          <label>Username:</label>
          <input style={{ marginLeft: "2px" }} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div style={{ padding: "0.5rem", margin: "2px" }}>
          <label>Password:</label>
          <input style={{ marginLeft: "5px" }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div style={{ padding: "0.5rem", margin: "2px" }} >
          <button type="submit">Register</button>
        </div>
        <div style={{ padding: "0.5rem", margin: "2px" }} >
          <button type="button" onClick={redlogin}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
