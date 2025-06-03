import fetch from 'node-fetch';

const testGetBoardById = async (id) => {
    const response = await fetch(`http://localhost:5000/api/boards/${id}`);

   if (!response.ok) {
        const text = await response.text();
        console.error(`HTTP error: ${response.status}\n${text}`);
        return;
    }

    const data = await response.json();

    console.log('data: ', data)
}

testGetBoardById('683f2c98f90fc736fca7f8fe');