import React from "react"

function ToDoItem(props){
    return(
        <div className = "toDoItem">
            <input type="checkbox" checked={props.item.completed}/>
            <span style ={{textDecoration : props.item.completed ? "line-through" :"none"}}>{props.item.text}</span>
            <br/>
        </div>
    )
}

export default ToDoItem