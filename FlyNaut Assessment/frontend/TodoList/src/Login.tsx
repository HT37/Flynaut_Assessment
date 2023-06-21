import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './api/api';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const[userid, setUserid] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(username, password);
    try {
      // Call the login API
      const response = await login(username, password);
      if (response && response.message === 'Login successful') {
        // Login successful
        console.log('Login successful');
        navigate('/todos');
      } else {
        // No response received
        console.log('Please provide proper credentials');
        // Handle the case when no response is received
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error, show error message, etc.
    }
  };

  const handleSignup = () => {
    navigate('/registration');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="container my-3">
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id='username' />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id='pass' />
          </div>
          <div><button type="submit">Login</button></div>
          <div><button style={{ margin : "0.5rem" }} type="button" onClick={handleSignup}>SignUp</button>
        </div>
        </div>
        
      </form>
    </div>
  );
};

export default Login;
