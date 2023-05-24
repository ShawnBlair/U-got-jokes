import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App(){    
    
       
    
    const [jd, setJd] = React.useState(jokesData)
    
    const jdelement = jd.map(jd1 =>    
    {return(        
        <Joke setup={jd1.setup} punchline={jd1.punchline} key={jd1.id}/>
    )})
    return(
        <main><h2 className="h2"><u>Lighten Up!</u></h2><hr />{jdelement}</main>
    )
}