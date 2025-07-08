import React, { useState } from 'react';

const TaskForm = () => {
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
                    className='w-full mb-4 text-base border-2 border-default rounded-md px-3.5 py-2 focus:border-focus focus:outline-none'
                />
                {/* DESCRIPTION */}
                <label className='block text-xs text-default mb-1'>Description</label>
                <textarea 
                    type='text'
                    className='w-full min-h-[10rem] text-base border-2 border-default rounded-md px-3.5 py-2 focus:border-focus focus:outline-none'
                    placeholder='Enter a short description'
                />


            </div>
        </div>
    )
};

export default TaskForm;