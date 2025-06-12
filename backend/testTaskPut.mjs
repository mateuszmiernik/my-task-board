import node from 'node-fetch';

const testUpdateTask = async (id) => {
    const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
        })
    })
}