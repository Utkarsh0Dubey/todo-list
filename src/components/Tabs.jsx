export function Tabs(props) {
    const { todos, selectedTab, setSelectedTab } = props;
    const tabs = ["All", "Open", "Completed"];
    {/* We want to have 3 buttons here. Should I make 3 buttons here by copy pasting
        <button> </button> 3 times? No. This is because react is about modularization.
        What we do is that we write code for an array for all buttons and map it to each button
        according to our need.  
        In vanilla HTML, we write things like <button class="class-name"> but class is a reserved keyword in react so
        we use className but purpose is same.
        Here, span is used to group element under it so we will be to give separate style to the quantity.
    */} 
    /* This gives the same output as using map method
    const tabButtons = []

    for (let i = 0; i < tabs.length; i++) {
        tabButtons.push(
            <button key={i} className="tabs">
                <h4>
                    {tabs[i]} <span> </span>
                </h4>
            </button>
        )
    }
    return <div className="tabs">{tabButtons}</div>;
    map is not exclusive to react but goes on very well with react's philosophy.
    the following could be directly written in return to get a button.
    <button>I am just a simple button</button>
    */return (
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                // we must fill const in the same line we declare it (must be declared) as it cannot be changed later.
                const numTasks = // number of tasks to be displayed in each tab like Open, All, Completed
                           tab == 'All' ? todos.length:
                           tab == 'Open' ? todos.filter(val => !val.complete).length:
                           todos.filter(val => val.complete).length
                return (
                    <button onClick={() => {
                        setSelectedTab(tab)
                    }} 
                    key={tabIndex} className={"tab-button" 
                        + (tab ===  selectedTab ? 'tab-selected': ' ')
                    }>
                        <h4> 
                            {tab} <span>({numTasks})</span>
                        </h4>
                    </button>
                )
            })}    
            <hr />
        </nav>
    )
    
}