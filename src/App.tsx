import { useState } from 'react'
import './App.css'
import Container from './components/container/Container'
import Form from './components/form/Form'
import TaskList from './components/task/TaskList'

interface Todo {
    id: number;
    text: string;
}

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

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
