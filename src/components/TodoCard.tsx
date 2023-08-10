import { ToDo } from "../interfaces.tsx/ITodo";

interface TodoCardProps {
    completeToDo(): void
    deleteToDo(): void
    todo: ToDo
}

const ToDoCard = ({todo, completeToDo, deleteToDo} : TodoCardProps) => {
    return <>
    <div className="todo-card"
        style={{textDecoration: todo.completed ? "line-through" : "none"}}>
            <h3>{todo.title}</h3>
            <button onClick={completeToDo}>Complete</button>
            <button onClick={deleteToDo}>Delete</button>
    </div>
    </>
}

export default ToDoCard;