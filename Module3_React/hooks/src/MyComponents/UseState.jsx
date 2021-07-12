import React, { useState } from 'react';

const UseState = () => {
    const [count, setCount] = useState(1);
    const [color,setColor] = useState("blue");

    const incrementValue = () => {
        //setCount((prevCount) => prevCount + 1)
    };

    const decrementValue = () => {
        //setCount((prevCount) => prevCount + 1)
    };

    return (
        <div> 
            <p>{count}</p>
            <button onClick ={() => setCount(count +1)}>+</button>
            <button onClick ={() => setCount(count -1)}>-</button>
        </div>
    )


}
 
export default UseState;