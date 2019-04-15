import React from "react"

function Header(){
    const firstname = "Shivangi"
    const lastname = "Agarwal"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const timeOfDayStyle = {
            backgroundColor : "brown"
        }
    if(hours<12){
        timeOfDay = "Good Morning!!"
        timeOfDayStyle.color = "white"
    }
    else if(hours >=12 && hours <16 ){
        timeOfDay = "Good Afternoon!!"
        timeOfDayStyle.color = "yellow"
    }
    else{
        timeOfDay = "Good Night!!"
        timeOfDayStyle.color = "green"
    }

    return(
        /*<h1 className="navbar">ToDo App - by {'${firstname} ${lastname}'}</h1>*/
        <div>
            <h1 className="navbar">ToDo App - by {firstname +" "+lastname}</h1>
            <p style = {timeOfDayStyle}> {timeOfDay}</p>
        </div>
    )
}

export default Header