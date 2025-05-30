export interface Task {
    id: string;
    content: string;
    category: string;
    isCompleted: boolean;
    isDeleted: boolean;
}

export interface Category {
    id: string;
    name: string;
    icon: string;
}