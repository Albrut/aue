import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Profile() {
  let a = localStorage.setItem('sas',"dada");
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api.example.com/data');
        setEmail(response.data.email);
        const jwtToken = localStorage.getItem('jwt-token'); // Сохраняем значение в переменной
        console.log(jwtToken);
      } catch (error) {
        console.error('Ошибка получения данных:', error);
      }
    }

    fetchData();
  }, []);

  const handleLevelChange = (selectedLevel) => {
    setLevel(selectedLevel);
    console.log(level) // Устанавливаем уровень
    localStorage.setItem('level', level);
  };
 

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    margin: '5px'
  };

  return (
    <div>
      <p>Email: {email}</p>
      <div className='levelChooser'>
        <button style={buttonStyle} onClick={() => handleLevelChange(1)}>
          A1
        </button>
        <button style={buttonStyle} onClick={() => handleLevelChange(2)}>
          A2
        </button>
      </div>
    </div>
  );
}
