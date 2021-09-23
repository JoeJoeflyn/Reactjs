import react from "react";
function Todo({text, setTodos, todos, todo}) {
    const deletedHandler= () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completedHandler= () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return{
                    ...item,
                    completed: !item.completed,
             };
            }
            return item;
        }))
    }
    return(
        <div className='hoou-s'>
            <li className={`me ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button onClick={completedHandler} className='btn'>done</button>
            <button onClick={deletedHandler} className='btn'>Delete</button>
        </div>
    )
}
export default Todo