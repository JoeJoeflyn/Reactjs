import React, {useState} from "react";

function form ({setInput, todos, setTodos, Input}) {
    const inputTextHandler = (e) => {
      setInput(e.target.value)
    };
    const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
        ...todos,
        {text: Input, completed:false, id:Math.random()*1000},
        // console.log(Input),
      ])
      setInput('')
    };
    return(
        <form>
        <input value={Input} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          add
        </button>
        {/* <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div> */}
      </form>
    );
};
export default form ;