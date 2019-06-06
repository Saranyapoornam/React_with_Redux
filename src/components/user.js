import React from 'react'
const User = ({match})=>{
    console.log(match.params)
    console.log(match.params.username)
    if(match.params.username === ":username"){
        return(
       
            <div>
                <h1>
                    
                Hello User
                </h1>
            </div>
        )
    }else{
        return(
       
            <div>
                <h1>
                    
                Hello User {match.params.username}
                </h1>
            </div>
        )
    }
    
}
export default User