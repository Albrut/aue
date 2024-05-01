import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function FetchDataOnPageLoad() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api.example.com/data');
        setEmail(response.data.email);
        localStorage.getItem('jwt-token')
      } catch (error) {
        console.error('Ошибка получения данных:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <p>Email: {email}</p>
    </div>
  );
}
