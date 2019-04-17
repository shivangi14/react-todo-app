import React from "react"
import ToDoItem from "./ToDoItem"
import todosData from "./todosData"

class MainContent extends React.Component{
    constructor(){
        super()
        this.state = {data : todosData}
    }
    render(){
        let todoItems = this.state.data.map(item => <ToDoItem key={item.id} item={item} />)
        return(
                <div className = "toDoList">
                    {todoItems}
                </div>
            )
    }
}

export default MainContent