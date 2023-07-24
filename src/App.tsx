import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
      
    interface ToDo {
      title: string,
      id: number,
      completed: boolean
    }
      
    const [todos, setTodos] = useState<ToDo[]>([
        {title: "Testing", id: 1, completed: false}
      ])

    const [userInput, setUserInput] = useState<string>("")

    const addToDo = () => {
      const newToDo : ToDo = {id: todos.length, title: userInput, completed: false}
      setTodos([...todos, newToDo])
    }

    const deleteToDo = (x : number) => {
      setTodos(todos.filter((todo) => {
        return todo.id !== x
      }))
    }
      
      return <>
      <div className='container'>
        
        <h1>ToDoList</h1>
        
        
          <h3>Add something to do</h3>
          <input type="text" id="userAddToDo" onChange={(e) => setUserInput(e.currentTarget.value)} />
          <button onClick={addToDo}>Add</button>
        

        <div className="todolist-container">
          <h3>To do</h3>
          {todos.map((todo) => (
            <div className="todolist-todo">
              <p  key={todo.id}>{todo.title}</p>
              <button onClick={() => deleteToDo(todo.id)}>Delete</button>
            </div>
            
          ))}
        </div>
        

        
      </div>
      </>
}

export default App;
