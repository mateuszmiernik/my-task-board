import { create } from 'zustand';
import { Task } from '../types';

interface TaskState {
    tasks: Task[];
    isModalOpen: boolean;
    editingTask: Task | null;

    setTasks: (tasks: Task[]) => void;
    openModal: (task?: Task | null) => void;
    closeModal: () => void;
    addTask: (task: Task) => void;
    updateTaskInStore: (updated: Task) => void;
    removeTask: (id: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
    tasks: [],
    isModalOpen: false,
    editingTask: null,

    setTasks: (tasks) => set({ tasks }),

    openModal: (task = null) => set({ isModalOpen: true, editingTask: task }),
    closeModal: () => set({ isModalOpen: false, editingTask: null }),

    addTask: (task) => set((state) => ({
        tasks: [...state.tasks, task]
    })),

    updateTaskInStore: (updated) => set((state) => ({
        tasks: state.tasks.map((t) => (t._id === updated._id ? updated : t))
    })),

    removeTask: (id) => set((state) => ({
        tasks: state.tasks.filter((t) => t._id !== id)
    }))

}));