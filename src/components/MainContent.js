import React from "react"

import ToDoItem from "./ToDoItem"

function MainContent(){
    return(
        <div className = "toDoList">
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    )
}

export default MainContent