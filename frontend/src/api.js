const BASE_URL = '';

export const fetchTestData = async () => {
    const response = await fetch(`${BASE_URL}/api/test`);
    if (!response.ok) {
        throw new Error('Failed to fetch test data');
    }
    return response.json();
};

export const createTestData = async (data) => {
    const response = await fetch(`${BASE_URL}/api/test`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error('Failed to post test data');
    }
    return response.text();
};
