import React, { useState } from 'react';

function AddTodo(props) {

    const [input, setInput] = useState('');

    const handleChange = e => {
      setInput(e.target.value);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
      props.onSubmit({
        id: Math.floor(Math.random() * 100000),
        text: input
      });
      setInput('');
    };

    return (
        <form className="addBKMbtn" onSubmit={handleSubmit} action="">
            <input
                placeholder = "website name"
                value = {input}
                onChange = {handleChange}
                className = "AddTodoInput"
            />
            <button onClick={handleSubmit} className='todo-button'>
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo;