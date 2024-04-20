import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function LoginSignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const url = isLogin ? '/api/login' : '/api/register';
      const response = await axios.post(url, {
        username,
        password,
      });

      const { token } = response.data;

      localStorage.setItem('jwtToken', token);

      alert(`${isLogin ? 'Login' : 'Registration'} successful!`);
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.'); // User-friendly error message
    }
  };

  const handleModeSwitch = () => {
    setIsLogin(!isLogin);
    setConfirmPassword('');
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} className={isLogin ? 'login' : 'signup'}>
        <div className="field">
          <input
            type="text"
            placeholder="Email Address"
            required
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {!isLogin && (
          <div className="field">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}
        <div className="field btn">
          <div className="btn-layer"></div>
          <input type="submit" value={isLogin ? 'Login' : 'SignUp'} />
        </div>
        <div className="signup-link">
          {isLogin ? "Don't Have Account? " : "Already have an account? "}
          <span onClick={handleModeSwitch}>{isLogin ? 'Sign Up' : 'Login'}</span>
        </div>
      </form>
    </div>
  );
}

export default LoginSignUp;
