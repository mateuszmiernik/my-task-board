export interface Task {
    _id: string;
    id?: string;
    name: string;
    description?: string;
    status: string;
    icon?: string;
}

export type TaskStatus = 'todo' | 'inprogress' | 'completed' | 'wontdo';
