import React, { useEffect, useState } from 'react';
import { statusOptions } from '../config/statusConfig';

const TaskForm = ({ initialTask, onSave, onDelete, onClose, mode }) => {
    const [name, setName] = useState(initialTask?.name || '');
    const [description, setDescription] = useState(initialTask?.description || '');
    const [icon, setIcon] = useState(initialTask?.icon || '');
    const [status, setStatus] = useState(initialTask?.status || '');

    const statusOrder = ['inprogress', 'completed', 'wontdo'];

    return (
        <div className="fixed top-0 right-0 h-full w-full bg-black/20 flex items-start justify-end pr-3 pt-3 z-50">
            <div className='bg-white rounded-xl px-5 py-4 w-full max-w-[39.1rem]'>
                <div className='flex items-center justify-between mb-4'>
                    <h2 className='font-outfit text-lg'>Task details</h2>
                    <button
                        type='button'
                        className='text-xl'>
                        <span className='w-8 h-8 flex items-center justify-center rounded-lg border border-button-add bg-white hover:shadow transition'>
                            <img src='/images/close_ring_duotone-1.svg' />
                        </span>
                    </button>
                </div>

                {/* TASK NAME */}
                <label className='block text-xs text-default mb-1'>Task name</label>
                <input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className='w-full mb-4 text-base border-2 border-default rounded-md px-3.5 py-2 focus:border-focus focus:outline-none'
                />
                {/* DESCRIPTION */}
                <label className='block text-xs text-default mb-1'>Description</label>
                <textarea
                    type='text'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    className='w-full mb-4 min-h-[10rem] text-base border-2 border-default rounded-md px-3.5 py-2 focus:border-focus focus:outline-none'
                    placeholder='Enter a short description'
                />

                {/* ICONS */}
                <label className='block text-xs text-default mb-2'>Icon</label>
                <div className='flex gap-2 mb-4'>
                    {['👨‍💻', '💬', '☕', '🏋️', '📚', '⏰'].map(ic => (
                        <button
                            key={ic}
                            className={`w-10 h-10 flex items-center justify-center text-lg rounded-lg bg-icon-background ml-[0.2rem] border-2 ${icon === ic ? 'border-focus' : 'border-transparent'} focus:outline-none`}
                            onClick={() => setIcon(ic)}
                        >
                            {ic}
                        </button>
                    ))}
                </div>

                {/* STATUS */}
                <label className='block text-xs text-default mb-2'>Status</label>
                <div className='grid grid-cols-2 gap-4 mb-[5rem]'>

                    {statusOrder.map(key => {
                        const option = statusOptions[key];
                        return (
                            <button
                                key={key}
                                type='button'
                                onClick={() => setStatus(key)}
                                className={`w-full flex items-center justify-between gap-3 pl-0.5 pr-3 py-0.5 border-2 rounded-xl ${status === key ? 'border-focus' : 'border-default'}`}
                            >
                                <span className='flex items-center gap-3'>
                                    <span className={`w-10 h-10 flex items-center justify-center rounded-lg ${option.accent}`}>
                                        <img src={`${option.icon}`} alt='icon' />
                                    </span>
                                    {option.label}
                                </span>
                                {status === key ? (
                                    <span className='flex items-center justify-center h-6 w-6 bg-focus rounded-full'>
                                        <img className='h-5 w-5' src='/images/Done_round.svg' alt='selected' />
                                    </span>
                                ) : (
                                    <span className='flex items-center justify-center h-6 w-6'></span>
                                )}
                            </button>
                        )
                    })}
                </div>

                {/* BUTTONS */}
                <div className='flex justify-end gap-3'>
                    <button
                        className='flex items-center gap-2 px-7 py-2 bg-button-delete-default text-sm text-button-text-white border-2 rounded-[1.2rem]'
                    >
                        Delete
                        <span>
                            <img src='/images/Trash.svg' alt='icon' />
                        </span>
                    </button>
                    <button
                        className='flex items-center gap-2 px-7 py-2 bg-button-save-default text-sm text-button-text-white border-2 rounded-[1.2rem]'
                    >
                        Save
                        <span>
                            <img src='/images/Done_round.svg' alt='icon' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default TaskForm;