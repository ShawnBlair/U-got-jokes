import React from "react"

export default function Joke(props){
    const [isSeen, setisSeen] = React.useState(false)
    
    function toggle(){
        setisSeen(!isSeen)
    }
    const r= (
        <div>      
        <h4>{props.setup}</h4>
         <p>{isSeen&&props.punchline}</p>
        <button onClick={toggle}>{isSeen?"Hide Punchline" : "Show Punchline"}</button> 
        <hr />
        </div>
    )
    return (
        <main>{props.punchline ? r : <div><hr /><h2 className="h2"><u>How about a One-liner!</u></h2><hr /><h4>{props.setup}</h4><hr /><hr /><hr /></div>}</main>
    )
}