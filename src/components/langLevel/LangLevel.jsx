import React, { useState } from "react";
import styles from './LangLevel.module.css'; // Импорт CSS модуля
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function LangLevel() {
  document.body.style.background = 'purple';

  const [selectedLevel, setSelectedLevel] = useState(""); // Состояние для хранения выбранного уровня
  const navigate = useNavigate(); // Хук для перехода на следующий маршрут

  const handleSubmit = async (e) => {
    e.preventDefault(); // Отмена стандартного поведения формы

    // Проверка, что уровень выбран
    if (!selectedLevel) {
      console.error("Выберите уровень!");
      return;
    }

    try {
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');
      // Отправка выбранного уровня на сервер и получение JWT-токена
      const response = await axios.post('http://localhost:8086/register', {email: email, password: password, levelId: selectedLevel});
      const { accessToken } = response.data; // accessToken вместо accesToken
      console.log(email, password, selectedLevel, accessToken);
      // Сохранение JWT-токена в локальном хранилище
      localStorage.setItem('jwtToken', accessToken);

      // Переход на следующий маршрут (например, '/profile')
      navigate('/profile');

      console.log("Уровень успешно выбран и токен получен:", accessToken);
    } catch (error) {
      console.error("Ошибка отправки:", error);
    }
  };

  return (
    <div className={styles.langLevelContainer}> {/* Использование класса из CSS модуля */}
      <div className={styles.container}>
        <h1 className={styles.title}>Выберите уровень владения языком</h1>
        <form className={styles.levelForm} onSubmit={handleSubmit}>
          <div className={styles.radioGroup}>
            <input
              type="radio"
              id="a1"
              name="level"
              value="a1"
              checked={selectedLevel === "a1"}
              onChange={() => setSelectedLevel("a1")}
            />
            <label htmlFor="a1">A1</label>

          
<input
  type="radio"
  id="a2"
  name="level"
  value="a2"
  checked={selectedLevel === "a2"}
  onChange={() => setSelectedLevel("a2")}
/>
<label htmlFor="a2">A2</label>

<input
  type="radio"
  id="b1"
  name="level"
  value="b1"
  checked={selectedLevel === "b1"}
  onChange={() => setSelectedLevel("b1")}
/>
<label htmlFor="b1">B1</label>

<input
  type="radio"
  id="b2"
  name="level"
  value="b2"
  checked={selectedLevel === "b2"}
  onChange={() => setSelectedLevel("b2")}
/>
<label htmlFor="b2">B2</label>

<input
  type="radio"
  id="c1"
  name="level"
  value="c1"
  checked={selectedLevel === "c1"}
  onChange={() => setSelectedLevel("c1")}
/>
<label htmlFor="c1">C1</label>

<input
  type="radio"
  id="c2"
  name="level"
  value="c2"
  checked={selectedLevel === "c2"}
  onChange={() => setSelectedLevel("c2")}
/>
<label htmlFor="c2">C2</label>


          </div>
          <button type="submit" className={styles.submitBtn}>
            Далее
          </button>
        </form>
      </div>
    </div>
  );
}
