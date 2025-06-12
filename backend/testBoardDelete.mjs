import node from 'node-fetch';

const testDeleteBoard = async (id) => {
    try {
            const response = await fetch(`http://localhost:5000/api/boards/${id}`,{
            method: 'DELETE',
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Board deleted: ', data);
        } else {
            console.error(`Error ${response.status}`, data);
        }
    } catch (error) {
        console.error('Fetch error', error.message);
    }
}

testDeleteBoard('6845d80f347eee2b24a0aba8');