import React from 'react';
import { TaskStatus } from '../types';

interface TaskCardProps {
    name: string;
    description?: string;
    icon?: string;
    status: TaskStatus;
    onClick: () => void;
}

const TaskCard = ({ name, description, icon, status, onClick }: TaskCardProps) => {

    const statusBg: Record<TaskStatus, string> = {
        'inprogress': 'bg-status-inprogress-default',
        'completed': 'bg-status-completed-default',
        'wontdo': 'bg-status-wontdo-default',
        'todo': 'bg-status-todo'
    };

    const statusAccent: Partial<Record<TaskStatus, string>> = {
        'inprogress': 'bg-status-inprogress-accent',
        'completed':  'bg-status-completed-accent',
        'wontdo':  'bg-status-wontdo-accent',
    };

    const rightIconMap: Partial<Record<TaskStatus, string>> = {
        'inprogress': '/images/Time_atack_duotone.svg',
        'completed':  '/images/Done_round_duotone.svg',
        'wontdo': '/images/close_ring_duotone.svg',
    };

    return (
        <div 
            className={`flex items-center justify-between px-4 py-[1.3rem] rounded-2xl shadow font-outfit ${statusBg[status]} w-full`}
            onClick={onClick}
        >
            <div className='flex flex-col w-full gap-0'>
                <div className='flex items-center gap-[1.3rem]'>
                    <span className='w-10 h-10 flex items-center justify-center text-lg rounded-lg bg-white ml-[0.2rem]'>{icon}</span>
                    <h2 className='text-lg font-bold'>{name}</h2>
                </div>
                {description && (
                    <p className='text-base max-w-[320px] ml-[4rem]'>{description}</p>
                )}
            </div>
            {rightIconMap[status] && (
                <span className={`w-10 h-10 flex items-center justify-center rounded-lg ${statusAccent[status]}`}>
                    <img src={rightIconMap[status]} alt={`${status} icon`} />
                </span>
            )}
        </div>
    )
};

export default TaskCard;