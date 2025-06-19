import React, { useState } from 'react';

const BoardList = () => {
    const [title, setTitle] = useState('My Task Board');
    const [description, setDescription] = useState('Tasks to keep organised');

    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);

    const handleTitleClick = () => setIsEditingTitle(true);
    const handleDescriptionClick = () => setIsEditingDescription(true);

    const handleTitleBlur = () => setIsEditingTitle(false);
    const handleDescriptionBlur = () => setIsEditingDescription(false);

    return (
    <div className='max-w-md mx-auto mt-10'>
        <div className='flex items-start gap-x-3'>
            {/* LOGO */}
            <img src='images/Logo.svg' alt='logo' className='mt-[4px]' />
            {/* TITLE AND DESCRIPTION */}
            <div className='flex flex-col max-w-xs'>
                <div className='flex items-center gap-x-3'>

                    {isEditingTitle ? (
                        <input
                            className='font-outfit text-xl w-full'
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            onBlur={handleTitleBlur}
                            autoFocus
                        />
                    ) : (
                        <h1 
                            className='font-outfit text-xl'
                            onClick={handleTitleClick}
                        >
                            {title}
                        </h1>
                    )}
                    
                    <img src='images/Edit_duotone.svg' alt='edit-icon' />
                </div>
                <p className='font-outfit text-base mt-2'>
                    {description}
                </p>
            </div>
        </div>
    </div>
)
}

export default BoardList;