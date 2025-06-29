import React from 'react';

const TaskCard = ({ name, description, icon, status, rightIcon }) => {

    const statusBg = {
        'In Progress': 'bg-status-inprogress-default'
    };

    const statusAccent = {
        'In Progress': 'bg-status-inprogress-accent'
    };

    return (
        <div className={`flex items-center justify-between px-6 py-4 rounded-2xl shadow font-outfit ${statusBg[status]} w-full`}>
            <div className='flex items-center gap-4'>
                <span className='text-lg'>{icon}</span>
                <div>
                    <h3 className='text-lg font-bold'>{name}</h3>
                    {description && (
                        <p className='text-sm'>{description}</p>
                    )}
                </div>
            </div>

            {rightIcon && (
                    <span className={`w-8 h-8 flex items-center justify-center rounded-lg ${statusAccent[status]}`}>{rightIcon}</span>
                )}
        </div>
    )
};

export default TaskCard;