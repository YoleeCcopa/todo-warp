import { useEffect, useState } from 'react'
import type { Task } from './assets/Interfaces'

import TaskData from './assets/tasks.json';

import './App.css'
import Container from './components/container/Container'
import Form from './components/form/Form'
import TaskList from './components/task/TaskList'
import CategoryCard from './components/categories/CategoryCard';

function App() {
    const [todos, setTodos] = useState<Task[]>([]);

    /**
     * Support function to update task list in local storage.
     * @param updatedList Task list with current modifications.
     */
    const updateTodos = (updatedList: Task[]) => {
        setTodos(updatedList);
        localStorage.setItem('todos', JSON.stringify(updatedList));
    };

    /**
     * Load data from local storage, or JSON if local is empty.
     */
    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        } else {
            // fallback to JSON data if localStorage is empty
            const mappedTodos: Task[] = TaskData
            .filter(item => !item.isDeleted)
            .map(item => ({
                id: item.id,
                content: item.content,
                category: item.category,
                isCompleted: item.isCompleted,
                isDeleted: item.isDeleted
            }));
            updateTodos(mappedTodos);
        }
    }, []);
    
    /**
     * Add a new task to list.
     * @param task Object Task to fill Task content.
     */
    const addTodo = (task: Task) => {
        const newTodo: Task = {
            id: task.id,
            content: task.content,
            category: task.category,
            isCompleted: task.isCompleted,
            isDeleted: task.isDeleted
        };
        updateTodos([...todos, newTodo]);
    };

    /**
     * Delete a task from the list by id. isDeleted: true.
     * @param id String value with the id to search the task.
     */
    const deleteTodo = (id: string) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, isDeleted: true } : todo
        );
        updateTodos(updatedTodos);
    };

    /**
     * Restore a task from the list by id. isDeleted: false.
     * @param id String value with the id to search the task.
     */
    const restoreTodo = (id: string) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, isDeleted: false } : todo
        );
        updateTodos(updatedTodos);
    };

    /**
     * Edit Task content by id.
     * @param id String value with the id to search the task.
     */
    const editTodo = (id: string) => {
        const newText = prompt("Edit todo:");
        if (newText) {
            const updatedTodos = todos.map(todo =>
                todo.id === id ? { ...todo, content: newText } : todo
            );
            updateTodos(updatedTodos);
        }
    };

    return (
        <Container>
            <h1>Simple To-do List</h1>
            <div className='flexcont'>
                <div className='flexCont categories'>
                    <CategoryCard/>
                </div>
                <div className='flexCont tasklist'>
                    <TaskList tasks={todos} onDelete={deleteTodo} onEdit={editTodo} onRestore={restoreTodo}/>
                </div>
                <div className='flexCont form'>
                    <Form onSubmit={addTodo}></Form>
                </div>
            </div>
        </Container>
    )
}

export default App
