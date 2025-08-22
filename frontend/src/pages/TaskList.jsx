import React, { useState } from 'react';
import TaskCard from './TaskCard';
import { useTaskStore } from '../store/taskStore';

const TaskList = () => {
    const { tasks, openModal } = useTaskStore();
    // console.log(tasks);
    return (
        <div className='flex flex-col gap-4'>
            {tasks.map(task => (
                <TaskCard
                    key={task._id || task.id}
                    name={task.name}
                    description={task.description}
                    status={task.status}
                    icon={task.icon}
                    onClick={() => openModal(task)}
                />
            ))}

            <button
                className='flex items-center gap-5 px-5 py-5 rounded-xl bg-button-add-default font-outfit text-base font-bold'
                onClick={() => openModal(null)}
            >
                <span className='w-10 h-10 flex items-center justify-center text-lg rounded-lg bg-status-inprogress-accent ml-[0.2rem]'>
                    <img src='../public/images/Add_round_duotone.svg' />
                </span>
                Add new task
            </button>
        </div>
    )
};

export default TaskList;