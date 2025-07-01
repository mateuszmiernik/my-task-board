import React, { useState } from 'react';
import TaskCard from './TaskCard';
import defaultTasks from '../data/defaultTasks';

const emojiMap = {
    ClockIcon: '⏰',        // U+23F0
    CheckCircleIcon: '🏋️',  // U+1F3CB
    XCircleIcon: '☕',      // U+2615
    ClipboardIcon: '📚'     // U+1F4DA
};

const TaskList = () => {
    const [tasks, setTasks] = useState(defaultTasks);

    return (
        <div className='flex flex-col gap-4'>
            {tasks.map(task => (
                <TaskCard 
                    key={task.id}
                    name={task.name}
                    description={task.description}
                    status={task.status}
                    icon={emojiMap[task.icon]}
                    rightIcon={task.rightIcon}
                />
            ))}
        </div>
    )
};

export default TaskList;