import React, { useEffect, useState } from 'react';
import { statusOptions } from '../config/statusConfig';
import { createTask, updateTask as updateTaskApi, deleteTask as deleteTaskApi } from '../api/TaskApi';
import { useTaskStore } from '../store/taskStore';

const TaskForm = ({ initialTask, onClose, onSave, boardId }) => {
    const [name, setName] = useState(initialTask?.name || '');
    const [description, setDescription] = useState(initialTask?.description || '');
    const [icon, setIcon] = useState(initialTask?.icon || '');
    const [status, setStatus] = useState(initialTask?.status || '');

    const [nameError, setNameError] = useState('');
    const [iconError, setIconError] = useState('');
    const [statusError, setStatusError] = useState('');

    const statusOrder = ['inprogress', 'completed', 'wontdo'];

    const { updateTaskInStore, removeTask } = useTaskStore();

    console.log(initialTask);

    useEffect(() => {
        if (!initialTask) return;
        setName(initialTask.name || '');
        setDescription(initialTask.description || '');
        setIcon(initialTask.icon || '');
        setStatus(initialTask.status || '');
    }, [initialTask]);

    const handleSave = async () => {
        let valid = true;

        // Debug
        // console.log('icon:', icon);

        // Reset errors
        setNameError('');
        setIconError('');
        setStatusError('');

        // Checking each field
        if (!name.trim()) {
            setNameError('required');
            valid = false;
        }

        if (!icon) {
            setIconError('required');
            valid = false;
        }

        if (!status) {
            setStatusError('required');
            valid = false;
        }

        if (!valid) return;

        // [EDYCJA] mamy istniejący task → PUT i lokalna podmiana
        if (initialTask?._id) {
            try {
                const updated = await updateTaskApi(initialTask._id, {
                    name: name.trim(),
                    description: description.trim(),
                    icon,
                    status
                });
                updateTaskInStore(updated);
                onClose();
            } catch (error) {
                console.error(error);
            }
            return; // ważne: nie przechodzimy do gałęzi tworzenia
        }

        // [TWORZENIE] brak _id → POST
        const payload = {
            boardId,
            name: name.trim(),
            description: description.trim(),
            icon,
            status
        };

        try {
            const newTask = await createTask(payload);
            onSave(newTask); // dodajesz task do Zustand/globalnego stanu
            onClose(); // zamyka modal po zapisaniu

        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async () => {
        if (!initialTask?._id) {
            // brak id → nic do kasowania w DB; po prostu zamknij modal
            onClose();
            return;
        }

        const confirm = window.confirm('Are you sure you want to delete this task?');
        if (!confirm) return;

        try {
            console.log('DELETE /tasks/:id', initialTask._id); // debug
            await deleteTaskApi(initialTask._id);
            removeTask(initialTask._id); // usuń ze Zustand
            onClose(); // zamknij modal
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="fixed top-0 right-0 h-full w-full bg-black/20 flex items-start justify-end pr-3 pt-3 z-50">
            <div className='bg-white rounded-xl px-5 py-4 w-full max-w-[39.1rem]'>
                <div className='flex items-center justify-between mb-4'>
                    <h2 className='font-outfit text-lg'>Task details</h2>
                    <button
                        type='button'
                        className='text-xl'
                        onClick={onClose}
                    >
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
                    className={`w-full ${nameError ? 'mb-1' : 'mb-4'} text-base border-2 ${nameError ? 'border-error focus:border-error' : 'border-default focus:border-focus' } rounded-md px-3.5 py-2 focus:outline-none`}
                />
                {nameError && <p className='text-error text-xs mb-4'>{nameError}</p>}

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
                <div className={`flex gap-2 ${statusError ? 'mb-1' : 'mb-4'}`}>
                    {['👨‍💻', '💬', '☕', '🏋️', '📚', '⏰'].map(ic => (
                        <button
                            key={ic}
                            className={`w-10 h-10 flex items-center justify-center text-lg rounded-lg bg-icon-background ml-[0.2rem] border-2 ${icon === ic ? 'border-focus' : iconError ? 'border-error' : 'border-transparent'} focus:outline-none`}
                            onClick={() => setIcon(ic)}
                        >
                            {ic}
                        </button>
                    ))}
                </div>
                { iconError && <p className='text-error text-xs mb-4'>{iconError}</p>}

                {/* STATUS */}
                <label className='block text-xs text-default mb-2'>Status</label>
                <div className={`grid grid-cols-2 gap-4 ${statusError ? 'mb-1' : 'mb-[5rem]'}`}>
                    {statusOrder.map(key => {
                        const option = statusOptions[key];
                        return (
                            <button
                                key={key}
                                type='button'
                                onClick={() => setStatus(key)}
                                className={`w-full flex items-center justify-between gap-3 pl-0.5 pr-3 py-0.5 border-2 rounded-xl ${status === key ? 'border-focus' : statusError ? 'border-error' : 'border-default'}`}
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
                {statusError && <p className='text-error text-xs mb-4'>{statusError}</p>}

                {/* BUTTONS */}
                <div className='flex justify-end gap-3'>
                    <button
                        className='flex items-center gap-2 px-7 py-2 bg-button-delete-default text-sm text-button-text-white border-2 rounded-[1.2rem]'
                        onClick={handleDelete}
                    >
                        Delete
                        <span>
                            <img src='/images/Trash.svg' alt='icon' />
                        </span>
                    </button>
                    <button
                        className='flex items-center gap-2 px-7 py-2 bg-button-save-default text-sm text-button-text-white border-2 rounded-[1.2rem]'
                        onClick={handleSave}
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