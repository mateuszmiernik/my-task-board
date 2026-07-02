export interface Task {
    _id: string;
    id?: string;
    name: string;
    description?: string;
    status: TaskStatus;
    icon?: string;
}

export type TaskStatus = 'todo' | 'inprogress' | 'completed' | 'wontdo';
