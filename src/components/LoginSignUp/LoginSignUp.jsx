import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';

export function LoginSignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      console.error('Passwords do not match!');
      return;
    }

    try {
      const registrationUrl = 'http://localhost:8086/register';
      const loginUrl = '/api/login';

      // Регистрация или вход пользователя
      const url = isLogin ? loginUrl : registrationUrl;
      await axios.post(url, { email, password });

      console.log(`${isLogin ? 'Login' : 'Registration'} successful!`);

      if (!isLogin) {
        // Переход на страницу выбора уровня только после регистрации
        navigate('/lang-level');

        // Сохранение логина и пароля при регистрации
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        // Переход на страницу профиля
        navigate('/profile');
      }
    } catch (error) {
      console.error(error);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}
        <div className="field btn">
          <div className="btn-layer"></div>
          <input type="submit" value={isLogin ? 'Login' : 'Sign Up'} />
        </div>
        <div className="signup-link">
          {isLogin ? "Don't Have Account? " : "Already have an account? "}
          <span onClick={handleModeSwitch}>{isLogin ? 'Sign Up' : 'Login'}</span>
        </div>
      </form>
    </div>
  );
}
