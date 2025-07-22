import fetch from 'node-fetch';

const testGetTaskByBoardId = async (boardId) => {
    const response = await fetch(`http://localhost:5000/api/tasks?boardId=${boardId}`);

    if (!response.ok) {
        console.log(response.status);
        return 
    }

    const data = await response.json();
    console.log(data);
    return data;
};


testGetTaskByBoardId('687e219e865e1557ba7b86f1');