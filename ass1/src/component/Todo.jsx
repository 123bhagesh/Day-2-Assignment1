import React, {useState} from 'react'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'

// const 
// const todo =()=>
const Todo = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (xyz) =>{
    setTodos([...todos, xyz])
  }
  return (
    <div>Todo
     <TodoInput addTodo={addTodo} />
      <TodoList todos ={todos} />
        {/* {todos.map((todo) =>{
          return <li>{todo}</li>
        })}
      </TodoList> */}

</div>
  )
}

export {Todo}