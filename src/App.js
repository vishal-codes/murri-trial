import React, { useState, useEffect } from 'react';
/* Muuri react */
import { MuuriComponent } from "muuri-react";

import Todo from "./components/Todo";
import AddTodo from './components/AddTodo';

const App = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('todos')) {
            var localTodos = JSON.parse(localStorage.getItem('todos'));
            setTodos(localTodos);
        }
    },[]);

    const addTodo = todo => {
      const newTodos = [...todos, todo];
  
      setTodos(newTodos);
      window.localStorage.setItem('todos', JSON.stringify(newTodos));
    };
  
    const children = todos.map((todo, index) => (
      <Todo key={todo.id} {...todo} />
    ));
  
    return (
        <div className="mainContainer">
            <AddTodo onSubmit={addTodo} />
            <div className="todoContainer">
                <MuuriComponent dragEnabled>{children}</MuuriComponent>
            </div>
        </div>
    );
};

export default App;