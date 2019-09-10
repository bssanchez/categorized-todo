import { Task } from './task.interface';

export interface Project {
    id: string;
    name: string;
    avatar: string;
    description: string;
    tasks: Task[] | null;
    active: boolean;
}
