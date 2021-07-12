ques 1.

import React, { useState, useEffect } from 'react';

const Profile = () => {

    const [name,setName] = useState("Backbencher");
    const [age,setAge] = useState(23);

    return(
        <div>
            <form >
                <input value = {name} onChange= {(e) => {setName(e.target.value)}}type="text" />
                <input value = {age} onChange={(e)=>{setAge(e.target.value)}}type="text" />
                <h2>
                    Name:{name},Age:{age}
                </h2>
            </form>
        </div>
    )
}


ques 2.

import React, { useState, useEffect } from 'react';

const Banner = () => {
    const[count,setCount] = useState(0);

    useEffect(()=>
    {
        
    })
    return(
        <div>
            <button onClick={setCount}></button>
        </div>
    )
}