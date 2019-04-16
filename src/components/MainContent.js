import React from "react"
import ToDoItem from "./ToDoItem"
import todosData from "./todosData"

function MainContent(){
    const todoItems = todosData.map(item => <ToDoItem key={item.id} item={item} />)
    return(
        <div className = "toDoList">
            {todoItems}
        </div>
    )
}

export default MainContent