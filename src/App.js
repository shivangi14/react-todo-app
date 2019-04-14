import React from "react"

import Header from "./components/Header"

function App(){
    return(
        <div>
            <Header />
            <input type="checkbox" /><span>market</span><br/>
            <input type="checkbox" /><span>slippers</span><br/>
            <input type="checkbox" /><span>watch</span>
        </div>
    )
}

export default App