import React, {useState} from "react";

function Count() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };


    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };  

    return (
        <div>
            <h1>Count App</h1>
            <h1>Count: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
           
        </div>
    );
}

export default Count;