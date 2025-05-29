import { useEffect, useState } from 'react'
import TaskData from './assets/tasks.json';
import CategoriesData from './assets/categories.json';
import './App.css'
import Container from './components/container/Container'
import Form from './components/form/Form'
import TaskList from './components/task/TaskList'

interface Task {
    id: number;
    text: string;
}

interface Categories {
    id: string;
    name: string;
    icon: string;
}

function App() {
    const [todos, setTodos] = useState<Task[]>([]);

    useEffect(() => {
    const mappedTodos: Task[] = TaskData
        .filter(item => !item.isDeleted)
        .map(item => ({
            id: parseInt(item.id, 10),
            text: item.content
        }));

    setTodos(mappedTodos);
    }, []);

    const addTodo = (text: string) => {
        const newTodo = { id: Date.now(), text };
        setTodos(prev => [...prev, newTodo]);
    };

    const deleteTodo = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    const editTodo = (id: number) => {
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
