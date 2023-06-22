import React, { useState } from 'react';    
import { createtodo } from './api/api';
import { useNavigate } from 'react-router-dom';


export const AddTodo: React.FC = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const navigate = useNavigate();

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !desc) {
          alert("Title or Description cannot be blank");
        } else {
          try {
            // Call the API to create the todo
            const response = await createtodo(title, desc);
            
            if (response) {
              // Todo created successfully
              alert("Todo created successfully");
              
              setTitle("");
              setDesc("");
            } 
          } catch (error) {
            console.error('Error creating todo:', error);
            // Handle error case, show error message
            alert('Failed to create todo');
          }
        }
      };

    const exit = () => {
        navigate('/');
      };
      

    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <div><button type="submit" className="btn btn-sm btn-success">Add Todo</button></div>
                <div><button type="button" style={{padding:"0.25rem", marginTop:"5px"}} onClick={exit}>Exit</button></div>
            </form>
        </div>
    );
};
