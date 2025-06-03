import fetch from 'node-fetch';

const testCreateBoard = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/boards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'board_test_1',
                description: 'test description',
                tasks: []
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP status: ${response.status}`) 
        }

        const data = await response.json();

        console.log('Data: ', data);
    } catch (error) {
        console.error('Error: ', error);
    }
};

testCreateBoard();