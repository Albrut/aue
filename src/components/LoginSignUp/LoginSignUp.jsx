import React, { useState } from 'react';
import axios from 'axios'; // Assuming you use Axios for API calls

function LoginSignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Added for signup
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!isLogin && password !== confirmPassword) {
      console.error('Passwords do not match!');
      return; // Exit function if passwords don't match
    }

    try {
      const url = isLogin ? '/api/login' : '/api/register'; // Dynamic URL based on mode
      const response = await axios.post(url, {
        username,
        password,
      });

      const { token } = response.data; // Assuming response contains a token

      localStorage.setItem('jwtToken', token); // Store token in local storage

      console.log(`${isLogin ? 'Login' : 'Registration'} successful!`); // Message based on mode

      // Redirect or handle successful login/registration here
    } catch (error) {
      console.error(error); // Handle errors
    }
  };

  const handleModeSwitch = () => {
    setIsLogin(!isLogin); // Toggle login/signup mode
    setConfirmPassword(''); // Clear confirm password on mode switch
  };

  return (
    <div className='container'>
      {/* Login/Signup form based on state */}
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type={isLogin ? 'password' : 'text'} // Password for login, text for signup
          placeholder={isLogin ? 'Password' : 'Password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isLogin && ( // Only show confirm password input for signup
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        <span onClick={handleModeSwitch}>
          {isLogin ? 'New User? Sign Up' : 'Existing User? Login'}
        </span>
      </form>
    </div>
  );
}

export default LoginSignUp;
