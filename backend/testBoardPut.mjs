import fetch from 'node-fetch';

const testUpdateBoard = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/api/boards/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            name: 'test_update_name',
            description: 'test_update_description'
        })
    });

        const data = await response.json();

        if (response.ok) {
            console.log('Board updated successfully', data);
        } else {
            console.error(`Error ${response.status}:`, data);
        }
    } catch (error) {
        console.error('Fetch error:', error.message);
    }
}

testUpdateBoard('683f2c98f90fc736fca7f8fe');