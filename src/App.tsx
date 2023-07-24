import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
      
    interface ToDo {
      title: string,
      id: number,
      completed: boolean
    }
      
    const [todos, setTodos] = useState<ToDo[]>([])
    const [completedTodos, setCompletedTodos] = useState<ToDo[]>([])

    const [userInput, setUserInput] = useState<string>("")

    const addToDo = () => {
      
      const newToDo : ToDo = {id: todos.length, title: userInput, completed: false}
       {newToDo.title === "" ? alert("No empty titles!") : setTodos([...todos, newToDo]) }
      setUserInput("")
    }

    const deleteToDo = (x : number) => {
      setTodos(todos.filter((todo) => {
        return todo.id !== x
      }))
    }
    
    const completeToDo = (x : ToDo) => {
      todos.map((todo) => {
        todo.id === x.id ? setCompletedTodos([...completedTodos, x]) : alert("Error!")
      })
      deleteToDo(x.id)
      
    }  


      return <>
      <div className='container'>
        
        <h1>ToDoList</h1>
        
        
          <h3>Add something to do</h3>
          <input type="text" value={userInput} id="userAddToDo" onChange={(e) => setUserInput(e.currentTarget.value)} />
          <button onClick={addToDo}>Add</button>
        

        <div className="todolist-container">
          <h3>To do</h3>
          {todos.map((todo) => (
            <div className="todolist-todo">
              <p  key={todo.id}>{todo.title}</p>
              <button onClick={() => completeToDo(todo)}>Complete</button>
              <button onClick={() => deleteToDo(todo.id)}>Delete</button>
            </div>  
          ))}
        </div>

        <div className="completedtodo-container">
          <h3>Completed todos</h3>
          {completedTodos.map((todo) => (
            <div className="todolist-todo">
              <p key={todo.id}>{todo.title}</p>
            </div>  
          ))}
        </div>
        

        
      </div>
      </>
}

export default App;
