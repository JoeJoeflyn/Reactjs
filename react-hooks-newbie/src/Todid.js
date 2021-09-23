import React from "react";
import Todo from './Paste';
function Todid({todos, setTodos}) {
    return(
        <div className='to-do'>
            <ul className='mym'>
               {todos.map(todo => (
                   <Todo 
                   todo={todo} 
                   todos={todos} 
                   setTodos={setTodos} 
                   text={todo.text} 
                   key={todo.id}/>
                   ))}
            </ul>
        </div>
    )
}
export default Todid