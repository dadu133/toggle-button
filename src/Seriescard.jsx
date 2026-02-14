import React from 'react'

export default function Seriescard({cont,greetings,children}) {
  return (
    
      <div>
                 <h1 style={{"margin":"0.4rem"}}>{cont.name}</h1>
                 <p style={{"margin":"0.4rem"}}>{cont.description}</p>
                 <p style={{"margin":"0.4rem"}}>Rating: <span className={cont.rating>=5?"super-awesome":"average"}>{cont.rating}</span></p>
                 <div style={{"margin":"0.4rem"}}><img src={cont.image} alt="a college photo" width="100%"></img></div>
                 <button>Liked it</button>
                </div>
  )
}
