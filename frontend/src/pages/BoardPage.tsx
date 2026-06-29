import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBoardById } from '../api/BoardApi';
import { updateBoard } from '../api/BoardApi';
import TaskCard from './TaskCard';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
// import defaultTasks from '../data/defaultTasks';
import { useTaskStore } from '../store/taskStore';
import { getTaskByBoardId } from '../api/TaskApi';

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
        if (!id) return;
        const fetchBoard = async () => {
            try {
                const board = await getBoardById(id);
                setTitle(board?.name || 'My Task Board');
                setDescription(board?.description || 'Tasks to keep organised');
            } catch {
                setTitle('My Task Board');
                setDescription('Tasks to keep organised');
            }
        };
        fetchBoard();
    }, [id]);

    useEffect(() => {
        if (!id) return;
        const fetchTasks = async () => {
            try {
                const tasks = await getTaskByBoardId(id);
                setTasks(tasks || []);
            } catch (err) {
                console.error('Error while fetching tasks', err);
                setTasks([]);
            }
        };
        fetchTasks();
    }, [id, setTasks]);

    return (
        <div className='w-full grid grid-cols-12 gap-[2.3rem]'>
            <div className='col-start-4 col-end-10 flex justify-center'>
                <div className='w-[549.2px] shrink-0 flex items-start gap-x-3'>
                    {/* LOGO */}
                    <img src='../images/Logo.svg' alt='logo' className='mt-[4px]' height='40' width='40' />
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
                                className='font-outfit text-base mt-[0.7rem] w-full outline-none'
                                type='text'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                onBlur={handleDescriptionBlur}
                                autoFocus
                            />
                        ) : (
                            <p
                                className='font-outfit text-base mt-[0.7rem] cursor-pointer'
                                onClick={handleDescriptionClick}
                            >
                                {description}
                            </p>
                        )}

                    </div>
                </div>
            </div>
            <div className='col-start-4 col-end-10 flex justify-center'>
                <div className='w-[549.2px] shrink-0'>
                    <TaskList />
                </div>
            </div>
        </div>
    )
}

export default BoardPage;