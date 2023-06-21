// App.tsx
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import { Todos } from './Todos';
import { Footer } from './Footer';
import { AddTodo } from './AddTodo';
import { About } from './About';
import Login  from './Login';
import Registration from './Registration';
import { fetchtodo, deletetodo } from './api/api';

interface Todo {
  _id: string;
  title: string;
  description: string;
}

function App(): JSX.Element {
  let initTodo: Todo[] = [];
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos') || '[]');
  }

  const onDelete = async (todo: Todo): Promise<void> => {
    setTodos((prevTodos) => prevTodos.filter((e) => e !== todo));
    await deletetodo(todo._id);
  };


  // const addTodo = (title: string, description: string): void => {
  //   let sno: number;
  //   if (todos.length === 0) {
  //     sno = 0;
  //   } else {
  //     sno = todos[todos.length - 1]._id + 1;
  //   }
  //   const myTodo: Todo = {
  //     sno: sno,
  //     title: title,
  //     description: description,
  //   };
  //   setTodos((prevTodos) => [...prevTodos, myTodo]);
  // };




  const [todos, setTodos] = useState<Todo[]>(initTodo);
  useEffect(() => {
    async function gettodos(){
      const data = await fetchtodo();
      if(!data){
        setTodos([]);
      }else {
        setTodos(data);
      }
    }
    gettodos();
  }, []);
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/registration" element={<Registration />} /> 
          <Route
            path="/todos"
            element={
              <>
                <AddTodo  />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
