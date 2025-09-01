import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home';
import BoardPage from './pages/BoardPage';
import GridOverlay from './pages/GridOverlay';
import TaskForm from './pages/TaskForm';
import { useTaskStore } from './store/taskStore';

function AppContent() {
  const { isModalOpen, editingTask, closeModal, addTask } = useTaskStore();

  const location = useLocation();
  let boardId = null;
  console.log(location);
  
  if (location.pathname.startsWith('/board/')) {
    boardId = location.pathname.split('/')[2];
  }

  return (
    <div className='min-h-screen w-full bg-background py-8'>
      <div className='max-w-[1280px] mx-auto px-4 sm:px-6 md:px-[72px]'>
        {/* <GridOverlay /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/board/:id' element={<BoardPage />} />
        </Routes>
        {isModalOpen && (
          <TaskForm
            initialTask={editingTask}
            onClose={closeModal}
            onSave={addTask}
            boardId={boardId}
          />
        )}
      </div>
    </div>
  )
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};