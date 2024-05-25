// src/components/Test.js

import React, { useState } from 'react';
import { fetchTestData, createTestData } from '../api';

const Test = () => {
    const [getData, setGetData] = useState('');
    const [postData, setPostData] = useState('');

    const handleGetRequest = () => {
        fetchTestData()
            .then(data => {
                setGetData(data);
            })
            .catch(error => {
                console.error('Error fetching test data:', error);
            });
    };

    const handlePostRequest = () => {
        createTestData({ key: 'value' })
            .then(data => {
                setPostData(data);
            })
            .catch(error => {
                console.error('Error posting test data:', error);
            });
    };

    return (
        <div>
            <button onClick={handleGetRequest}>Get Test Data</button>
            <p>{getData ? JSON.stringify(getData) : 'No data received'}</p>

            <button onClick={handlePostRequest}>Post Test Data</button>
            <p>{postData ? postData : 'No response received'}</p>
        </div>
    );
};

export default Test;
