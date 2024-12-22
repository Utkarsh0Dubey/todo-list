import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { ToDoInput } from "./components/ToDoInput"
import { ToDoList } from "./components/ToDoList"
import { useState,useEffect } from "react"

function App() {
    {/*
      <div>
        
        Component Tree is quite clean and gives good idea of the application.
        Any part within curly braces is js.

        Instead of div we have used <> which is called a react fragment
        which is an empty div. It means that we don't have an extra unnecceasry
        div after the root div.

        Also a function can return only one component so we must wrap them into a div or a react fragment.
        
        <Header />
        <Tabs />
        <ToDoList />
        <ToDoInput />
      </div>
      
      The todos array we use is an array of objects with each object having 2 (key, value pairs)
      Why we define todos array here in App.jsx and not in ToDoList.jsx ? This is because array is going to be used in 
      many children of App so communication is going to be easier unlike when we define todos in ToDoList.jsx
      
      Communication of parent component and child component: Done through use of props(properties). It is similar to tag and attribute
      relationship.
    
    
    
    */}   
    /* Normal and old way of using a todos list in js
    const todos = [
        {input: 'Learn React', complete: true}, 
        {input: 'Advent of Cyber', complete: false}, 
        {input: 'DSA', complete: false}, 
        {input: 'Advent of Code', complete: false}, 
        {input: 'AI-ML', complete: false},
    ]
    */

    /*We will instead use a use state in React for our variables, which is used in same way but init is different(dynamic)
     We are using a react stateful variable.
     setTodos is the name of a function which is defined for all other things like display in the screen after we change the todos list.
     React works directly with the useState var and not so compatible for dynamicity with react.
    */
    
     // to changes todos variable, we shall use the setTodos function. These stateful variables are immutable.(new ones created with each call to setTodos)
    const [todos, setTodos] = useState([{input: 'Hey there, Add your first todo to this list!', complete: true},])

    // setSelectedTab(tab) would change selectedTab to tab
    const [selectedTab, setSelectedTab] = useState('Open')
     

    // This function is to be used as a property of the ToDoInput to be able to take input.
    // Can't we directly define it in ToDoInput? We want to modify the states in App only meaning we have access thorough whole app through App.
    function handleAddTodo(newTodo) {
      // ...todos creates a duplicate of the original
      const newTodoList = [...todos, {input: newTodo, complete: false}]
      setTodos(newTodoList)
      handleSaveData(newTodoList)
    }

    function handleCompleteTodo(index) {
      let newTodoList = [...todos] // copies by value and not referencee
      let completedTodo = todos[index]
      completedTodo['complete'] = true
      newTodoList[index] = completedTodo
      setTodos(newTodoList)
      handleSaveData(newTodoList)
    }
    
    function handleDeleteTodo(index) {
      let newTodoList = todos.filter((val, valIndex) => {
        return valIndex !== index
      })
      setTodos(newTodoList) 
      handleSaveData(newTodoList)
    }

    function handleSaveData(currTodos) {
      localStorage.setItem('todo-app', JSON.stringify({todos:currTodos})) 
    }

    useEffect(() => {
      if (!localStorage) return;
    
      let db = { todos: [] }; // ✅ Always has "todos"
      
      const savedData = localStorage.getItem('todo-app');
      if (savedData) {
        // Merge to ensure "todos" property always exists
        db = { todos: [], ...JSON.parse(savedData) };
      }
    
      setTodos(db.todos); // Now db.todos is never undefined
    }, []);
    
    

    /* Doing <Header todos={todos}/> is like assigning a attribute called todos. Name used here = property where props label and input both are todos */
    return (
        <> 
        <Header todos={todos} />
        <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} / >
        <ToDoList todos={todos} selectedTab={selectedTab} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo}/>
        <ToDoInput handleAddTodo={handleAddTodo} />
      </>
    )
  }
  
  export default App
  