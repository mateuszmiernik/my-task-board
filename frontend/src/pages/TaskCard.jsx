import React from 'react';

const TaskCard = ({ name, description, icon, status, onClick }) => {

    const statusBg = {
        'inprogress': 'bg-status-inprogress-default',
        'completed': 'bg-status-completed-default',
        'wontdo': 'bg-status-wontdo-default',
        'todo': 'bg-status-todo'
    };

    const statusAccent = {
        'inprogress': 'bg-status-inprogress-accent',
        'completed':  'bg-status-completed-accent',
        'wontdo':  'bg-status-wontdo-accent',
    };

    const rightIconMap = {
        'inprogress': '/images/Time_atack_duotone.svg',
        'completed':  '/images/Done_round_duotone.svg',
        'wontdo': '/images/close_ring_duotone.svg',
    };

    return (
        <div
            className={`flex items-center justify-between gap-3 px-4 py-[1.3rem] rounded-2xl shadow font-outfit ${statusBg[status]} w-full`}
            onClick={onClick}
        >
            <div className='flex flex-col w-full min-w-0 gap-0'>
                <div className='flex items-center gap-[1.3rem] min-w-0'>
                    <span className='w-10 h-10 shrink-0 flex items-center justify-center text-lg rounded-lg bg-white ml-[0.2rem]'>{icon}</span>
                    <h2 className='text-base md:text-lg font-bold break-words'>{name}</h2>
                </div>
                {description && (
                    <p className='text-sm md:text-base pl-[3.9rem] pr-2 break-words'>{description}</p>
                )}
            </div>
            {rightIconMap[status] && (
                <span className={`w-10 h-10 shrink-0 flex items-center justify-center rounded-lg ${statusAccent[status]}`}>
                    <img src={rightIconMap[status]} alt={`${status} icon`} />
                </span>
            )}
        </div>
    )
};

export default TaskCard;