import React, { useState } from 'react';
import "./App.css";
import Increment from './Increment';
import Form from './Formtodo';
import Todid from './Todid';

function App() {
  const [Input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  return(
    <div className="writedown-infor">
      <Increment/>
      <Form Input={Input} todos={todos} setTodos={setTodos} setInput={setInput}/>
      <p>{Input}</p>
      <Todid setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;