import React, { useState } from 'react';

const BoardList = () => {
    const [title, setTitle] = useState('My Task Board');
    const [description, setDescription] = useState('Tasks to keep organised');

    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);

    const handleTitleClick = () => setIsEditingTitle(true);
    const handleDescriptionClick = () => setIsEditingDescription(true);

    const handleTitleBlur = () => {
        if (!title) setTitle('My Task Board');
        setIsEditingTitle(false);
    };
    const handleDescriptionBlur = () => {
        if (!description) setDescription('Tasks to keep organised');
        setIsEditingDescription(false);
    }
        
    return (
    <div className='max-w-md mx-auto mt-10'>
        <div className='flex items-start gap-x-3'>
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
)
}

export default BoardList;