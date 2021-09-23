import React, { useState } from 'react';

function Increment() {
    const [number, setNumber] = useState(0)
    function incre() {
        const inner = number + 1; 
         setNumber(inner)
    }
    function decre() {
        const decrem = number - 1;
        setNumber(decrem)
    }
    function reset() {
        const res = 0 ;
        setNumber(res)
    }
    return (
        <div>
            <p>{number}</p>
            <button onClick={incre}>Incre</button>
            <button onClick={decre}>Decre</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default Increment;