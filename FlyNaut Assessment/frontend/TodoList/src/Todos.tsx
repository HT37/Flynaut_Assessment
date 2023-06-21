import React from 'react';
import { TodoItem } from './TodoItem';

interface Todo {
    _id: string;
    title: string;
    description: string;
}

interface TodosProps {
    todos: Todo[];
    onDelete: (todo: Todo) => void;
}

export const Todos: React.FC<TodosProps> = (props) => {
    const myStyle = {
        minHeight: '70vh',
        margin: '40px auto',
    };
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? (
                'No Todos to display'
            ) : (
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo._id} onDelete={props.onDelete} />;
                })
            )}
        </div>
    );
};