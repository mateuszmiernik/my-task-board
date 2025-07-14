import { create } from 'zustand';

export const useTaskStore = create((set) => ({
    tasks: [],
    isModalOpen: false,
    editingTask: null,

    setTasks: (tasks) => set({ tasks }),

    openModal: (task = null) => set({ isModalOpen: true, editingTask: task }),
    closeModal: () => set({ isModalOpen: false, editingTask: null }),

}));