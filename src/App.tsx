import { useEffect, useState } from 'react'
import { type Task, type Categories } from './assets/Interfaces'

import TaskData from './assets/tasks.json';
import CategoriesData from './assets/categories.json';

import './App.css'
import Container from './components/container/Container'
import Form from './components/form/Form'
import TaskList from './components/task/TaskList'

function App() {
    const [todos, setTodos] = useState<Task[]>([]);

    useEffect(() => {
    const mappedTodos: Task[] = TaskData
        .filter(item => !item.isDeleted)
        .map(item => ({
            id: item.id,
            text: item.content
        }));

    setTodos(mappedTodos);
    }, []);

    const addTodo = (text: string) => {
        const newTodo = { id: Date.now().toString(), text };
        setTodos(prev => [...prev, newTodo]);
    };

    const deleteTodo = (id: string) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    const editTodo = (id: string) => {
        const newText = prompt("Edit todo:");
        if (newText) {
            setTodos(prev =>
                prev.map(todo =>
                    todo.id === id ? { ...todo, text: newText } : todo
                )
            );
        }
    };

    const categories = [{name:"cleaning", icon:"mdiCleaning"}, {name:"work", icon:"mdiComputerClassic"}, {name:"errants", icon:"mdiLocalGroceryStore"}, {name:"learning", icon:"mdiNotebook"}, {name:"health", icon:"mdiMedication"}];

    return (
        <Container>
            <h1>Simple To-do List</h1>
            <div className='flexCont'>
                <TaskList tasks={todos} onDelete={deleteTodo} onEdit={editTodo}/>
            </div>
            <div className='flexCont'>
                <Form onSubmit={addTodo}></Form>
            </div>
        </Container>
    )
}

export default App
