import React from 'react';

const TaskCard = ({ name, description, icon, status }) => {

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
        <div className={`flex items-center justify-between px-4 py-5 rounded-2xl shadow font-outfit ${statusBg[status]} w-full`}>
            <div className='flex flex-col w-full gap-0'>
                <div className='flex items-center gap-[1.3rem]'>
                    <span className='w-10 h-10 flex items-center justify-center text-lg rounded-lg bg-white ml-[0.2rem]'>{icon}</span>
                    <h3 className='text-lg font-bold'>{name}</h3>
                </div>
                {description && (
                    <p className='text-base max-w-[320px] ml-14'>{description}</p>
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