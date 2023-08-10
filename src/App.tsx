import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDo } from './interfaces.tsx/ITodo';
import ToDoCard from './components/TodoCard';
import { title } from 'process';


function App() {   
      
    const [todos, setTodos] = useState<ToDo[]>([])
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
    
    const completeToDo = (x : number) => {
      setTodos(
      todos.map((todo) => {
        if (todo.id === x) {
          return {...todo, completed: !todo.completed};
        }
        return todo;
      })
      )
    }
    
    const clearToDos = () => {
      setTodos(todos.filter((todo) => {
        return !todo.completed
      }))
    }


      return <>
      <div className='container'>
        
        <h1>ToDoList</h1>
        
         <div className="userinput-container">
          <h3>Add something to do</h3>
          <input type="text" value={userInput} id="userAddToDo" onChange={(e) => setUserInput(e.currentTarget.value)} />
          <button onClick={addToDo}>Add</button>
        </div> 

        
        

        <div className="todolist-container">
          <h3>To do</h3>
          {todos.map((todo) => (
            <div className="todolist-todo">
              <ToDoCard 
              
              todo={todo}
              completeToDo={() =>completeToDo(todo.id)}
              deleteToDo={() =>deleteToDo(todo.id)}
                
              ></ToDoCard>
            </div> 
            
            
          ))}
          
        </div> 
        <button onClick={() => clearToDos()}>Clear completed todos</button>    
      </div>
      </>
}

export default App;
