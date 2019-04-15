import React from "react"

function Header(){
    const firstname = "Shivangi"
    const lastname = "Agarwal"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if(hours<12)
        timeOfDay = "Good Morning!!"
    else if(hours >=12 && hours <16 )
        timeOfDay = "Good Afternoon!!"
    else
        timeOfDay = "Good Night!!"
    return(
        /*<h1 className="navbar">ToDo App - by {'${firstname} ${lastname}'}</h1>*/
        <div>
            <h1 className="navbar">ToDo App - by {firstname +" "+lastname}</h1>
            <p style = {{color : "orange"}}> {timeOfDay}</p>
        </div>
    )
}

export default Header