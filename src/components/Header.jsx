export function Header(props) {// Header, as defined in App.jsx expects to use a todos list which is passed.
    const { todos } = props
    // props is an object that contains data passed from a parent component to a child component.
    // It allows parent component to provide or change values of child.
    // above one line does destructuring of the the object props so we can access todos directly
    // else we would have to do props.todos.length (props is only arg we receive in the function and then access props.var1, props.var2)
    // Also props are immutable from child's perspective in react.
    const todosLength = todos.length; // why const ? it would never change --> React will trigger a re-render and this line will be executed again.
    const isTaskPlural = (todosLength == 1) ? "task" : "tasks";
    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} open {isTaskPlural}.</h1>
        </header>
    )
}