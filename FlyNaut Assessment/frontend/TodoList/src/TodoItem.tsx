import React from 'react';

interface Todo {
  _id: string;
  title: string;
  description: string;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (todo: Todo) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.description}</p>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(todo)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
