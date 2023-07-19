

const ToDo = (todo : ToDo) => {
    <div className="todo-container">
        <h1>{todo.title}</h1>
        <button>Edit</button>
        <button>Remove</button>
    </div>
}

export default ToDo