import React from "react"
import ToDoItem from "./ToDoItem"
import todosData from "./todosData"

class MainContent extends React.Component{
    constructor(){
        super()
        this.state = {todoItems : []}
    }
    render(){
        this.state.todoItems = todosData.map(item => <ToDoItem key={item.id} item={item} />)
        return(
                <div className = "toDoList">
                    {this.state.todoItems}
                </div>
            )
    }
}

export default MainContent