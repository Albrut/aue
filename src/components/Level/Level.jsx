import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export function LevelComponent() {
    console.log(localStorage.getItem('sas'));
    const [title, setTitle] = React.useState([]);
    const [description, setDescription] = React.useState([]);
    const [id, setId] = React.useState([]);
    const [data, setData] = React.useState(null); // Добавляем состояние для данных

    let levelId = localStorage.getItem('lesson');
    let Navigate = useNavigate();
    React.useEffect(() => {
        try {
            axios.get(`http://localhost:8086/lesson/getAllByLesson/${levelId}`)
                .then(response => {
                    console.log(response);
                    setData(response.data); // Сохраняем данные в состояние
                })
                .catch(error => {
                    console.error('Ошибка получения данных:', error);
                });
        } catch (error) {
            console.error(error);
        }
    }, [levelId]); // Добавляем lessonId в зависимости useEffect
    const handleDayClick = (index) => {
       let idDay = index;
       localStorage.setItem('idDay', idDay);
        Navigate('https://localhost:8086/lesson')
        

    };
    if(data){
        setTitle(data.title);
        setDescription(data.description);
        setId(data.id)
    }

    return (
        <div>
            {title.map((title, index) => (
                <button key={id[index]} className="day" onClick={() => handleDayClick(index)}>
                    <p>{id[index]} Типа какой день</p>
                    <p>{title}</p>
                    <p>{description[index]}</p>
                </button>
            ))}
        </div>
    );
}