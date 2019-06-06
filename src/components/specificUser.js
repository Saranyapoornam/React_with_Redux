import React from 'react'
const SpecificUser = ({match})=>{
    console.log(match.params)
    console.log(match.params.username)
    return(
       
        <div>
            <h1>
                
            Hello User {match.params.username}
            </h1>
        </div>
    )
  
    
}
export default SpecificUser