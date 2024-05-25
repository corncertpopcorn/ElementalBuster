// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    const fetchGreeting = async () => {
        try {
            const response = await axios.get('http://localhost:8080/greeting');
            console.log(response.data); // 로그로 응답 확인
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    return (
        <div>
            <h1>Greeting from Spring Boot:</h1>
            <p>{message}</p>
            <button onClick={fetchGreeting}>Get Greeting</button>
        </div>
    );
}

export default App;

export default App;
