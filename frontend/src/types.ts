export interface Task {
    _id?: string;
    id?: string;
    name: string;
    description?: string;
    status: TaskStatus;
    icon?: string;
}

export interface Board {
    _id: string;
    name: string;
    description: string;
    tasks: string[];
    createdAt?: string;
    updatedAt?: string;
}

export type TaskStatus = 'todo' | 'inprogress' | 'completed' | 'wontdo';