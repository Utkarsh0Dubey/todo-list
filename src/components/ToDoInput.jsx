import { useState } from "react"

export function ToDoInput(props) {
    const { handleAddTodo } = props
    const [ inputValue, setInputValue ] = useState('')
     console.log(inputValue)

    // <i class="fa-light fa-plus"></i> is html code for '+' obtained on fontawesome.com
    return (
        <div className="input-container">
            <input value={inputValue} onChange={(event) => 
                {setInputValue(event.target.value)}} 
                placeholder="Add Task"/>
            <button onClick={() => {
                if (!inputValue) { return }
                handleAddTodo(inputValue)
                // below line to clear input after one input
                setInputValue('')
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}