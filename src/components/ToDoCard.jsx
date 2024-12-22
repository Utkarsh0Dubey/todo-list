export function ToDoCard(props) {
    // const {todoIndex, todos} = props;
    // while destructuring, what we need to do is write the correct names of variables to be taken out of props
    const { todo, handleDeleteTodo, todoIndex , handleCompleteTodo} = props
    // console.log(todo)
    return (
        <>
            <div className="card todo-item">
                 <p>{todo.input}</p>
                 <div className="todo-buttons">
                    <button onClick={() => {
                        handleCompleteTodo(todoIndex)
                    }}
                    disabled={todo.complete}>
                        <h6>Done</h6>
                    </button>
                    <button onClick={() => {
                        handleDeleteTodo(todoIndex)
                    }}>
                        <h6>Delete</h6>
                    </button>
                 </div>
            </div>
        </>
    )
}