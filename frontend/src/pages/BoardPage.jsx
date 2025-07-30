import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBoardById } from '../api/BoardApi';
import { updateBoard } from '../api/BoardApi';
import TaskCard from './TaskCard';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import defaultTasks from '../data/defaultTasks';
import { useTaskStore } from '../store/taskStore';
import { getTaskByBoardId, createTask } from '../api/TaskApi';

import {
    ClockIcon,        // Task in Progress
    CheckCircleIcon,  // Task Completed
    XCircleIcon,      // Task Won't Do
    ClipboardIcon     // Task To Do
} from '@heroicons/react/24/solid';

const iconMap = {
    ClockIcon: <ClockIcon className="w-7 h-7 text-yellow-500" />,
    CheckCircleIcon: <CheckCircleIcon className="w-7 h-7 text-green-500" />,
    XCircleIcon: <XCircleIcon className="w-7 h-7 text-red-400" />,
    ClipboardIcon: <ClipboardIcon className="w-7 h-7 text-blue-400" />,
};

const BoardPage = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);

    const { tasks, setTasks } = useTaskStore();

    const handleTitleClick = () => setIsEditingTitle(true);
    const handleDescriptionClick = () => setIsEditingDescription(true);

    const handleTitleBlur = async () => {
        if (!title) setTitle('My Task Board');
        setIsEditingTitle(false);

        try {
            await updateBoard(id, { name: title });
        } catch (error) {
            console.error('Failed to update the title', error);
        }
    };

    const handleDescriptionBlur = async () => {
        if (!description) setDescription('Tasks to keep organised');
        setIsEditingDescription(false);

        try {
            await updateBoard(id, { description: description });
        } catch (error) {
            console.error('Failed to update the description');
        }
    }

    useEffect(() => {
        const fetchBoard = async () => {
            try {
                const board = await getBoardById(id);
                setTitle(board.name);
                setDescription(board.description);
            } catch (error) {
                console.error('Error while fetching a board', error);
            }
        };
        fetchBoard();
    }, [id]);

    useEffect(() => {
        let isMounted = true; // ochrona przed podwójnym wywołaniem

        const fetchTasks = async () => {
            const tasks = await getTaskByBoardId(id);

            if (isMounted && tasks.length === 0) {
                await Promise.all(
                    defaultTasks.map((task) =>
                        createTask({
                            ...task,
                            boardId: id
                        })
                    )
                );
                const tasksFromDb = await getTaskByBoardId(id);
                if (isMounted) setTasks(tasksFromDb);
            } else if (isMounted) {
                setTasks(tasks)
            }
        };
        fetchTasks();

        return () => { isMounted: false }; // cleanup, efekt nie wykona się po odmontowaniu
    }, [id, setTasks]);

    return (
        <div className='w-full mt-10 grid grid-cols-12 gap-8'>
            <div className='col-start-4 col-end-10 flex justify-center'>
                <div className='w-full max-w-[941px] flex items-start gap-x-3'>
                    {/* LOGO */}
                    <img src='../images/Logo.svg' alt='logo' className='mt-[4px]' />
                    {/* TITLE AND DESCRIPTION */}
                    <div className='flex flex-col max-w-xs w-full'>
                        <div className='flex items-center gap-x-3'>

                            {isEditingTitle ? (
                                <input
                                    className='font-outfit text-xl w-full outline-none'
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    onBlur={handleTitleBlur}
                                    autoFocus
                                />
                            ) : (
                                <h1
                                    className='font-outfit text-xl cursor-pointer'
                                    onClick={handleTitleClick}
                                >
                                    {title}
                                </h1>
                            )}

                            <img src='../images/Edit_duotone.svg' alt='edit-icon' />
                        </div>

                        {isEditingDescription ? (
                            <input
                                className='font-outfit text-base mt-2 w-full outline-none'
                                type='text'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                onBlur={handleDescriptionBlur}
                                autoFocus
                            />
                        ) : (
                            <p
                                className='font-outfit text-base mt-2 cursor-pointer'
                                onClick={handleDescriptionClick}
                            >
                                {description}
                            </p>
                        )}

                    </div>
                </div>
            </div>
            <div className='col-start-4 col-end-10 flex justify-center'>
                <div className='w-full max-w-[941px]'>
                    <TaskList />
                </div>
            </div>
        </div>
    )
}

export default BoardPage;