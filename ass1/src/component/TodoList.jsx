import React from 'react'

export const TodoList = ({todos}) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
          {todos.map((todo) =>{
              return <li>{todo}</li>
          })}
      </ul>
    </div>
  )
}
