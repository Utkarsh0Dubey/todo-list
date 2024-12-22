import { ToDoCard } from "./ToDoCard";

export function ToDoList(props) {
    const {todos, selectedTab} = props;
    const tab = selectedTab
    // const tab = 'All' // hardcoding for now.

    const filterTodoList = 
                            tab  === 'All' ? todos:
                            tab === 'Open'? todos.filter(val => !val.complete):
                            todos.filter(val => val.complete) 
    return (
        <>
            {
                filterTodoList.map((todo, todoIndex) =>{
                    return (
                        // <ToDoCard key={todoIndex} todoIndex={todoIndex} todo ={todos}/> this one works as well
                        // as the one below. the below one's special argument must be written at last.
                        // it means whatver my parent gives me i will give my child.
                        // <ToDoCard key={todoIndex} todoIndex={todoIndex} {...props}/>
                        <ToDoCard 
                        key={todoIndex} 
                        todoIndex={todos.findIndex(val=>val.input === todo.input)}
                        {...props}
                        todo={todo} 
                        />
                    )
                })
            }
        </>
    )
}