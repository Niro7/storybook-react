import React, { useState } from 'react';
import './App.css';
import TodoContainer from "./TodoContainer"
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = (e) =>{
    e.preventDefault();
    setTodos([...todos,input]);
  };
  return (
<div><h1>HelloWorld</h1>
    <form>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit"onClick={addTodo}>Add TODO</button>
    </form>
    {/* {console.log(input)} */}
{/* <Todo title="Do assignments"/> */}
<TodoContainer todos={todos} />


</div>
  );
}

export default App;
