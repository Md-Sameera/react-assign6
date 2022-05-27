import React, { createContext, useState } from 'react';
export const store=createContext()

const Details = (props) => {

const [students,setStudents]=useState([
    {
        "First-Name":"Mark",
        "Last-Name":" Otto",
        "User-Name":"   @mdo",
        "Batch":"August",
        "id":"1"

    },
    {   

        "First-Name":"  Jacobn",
        "Last-Name":" Thornton",
        "User-Name":"   @fat",
        "Batch":"August",
        "id":"2"
    
    },
    {

        "First-Name":"Larry",
        "Last-Name":"the Bird",
        "User-Name":"@bird",
        "Batch":"August",
        "id":"3"
        
    },
        
    {
    
        "First-Name":"Jack",
        "Last-Name":" neau",
        "User-Name":"@jacky",
        "Batch":"August",
        "id":"4"
        
    },
    {

        "First-Name":"Martin",
        "Last-Name":"27",
        "User-Name":"React",
        "Batch":"August",
        "id":"5"
        
        },
        {


        },
])
return (

<div>

<store.Provider  value={[students,setStudents]}>
    {props.children}
</store.Provider>      
    </div>

)
}

export default Details