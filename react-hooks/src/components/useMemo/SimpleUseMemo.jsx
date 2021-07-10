import React, { useState, useMemo } from 'react'

function SimpleUseMemo() {
    // useMemo hook is used for performance optimization.
    // It is used to prevent unnecessary re-rendering of components.
    // When we use useMemo hook, and specify an variable to that to watch only for that varaible

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    let isEven = useMemo(() => {
        let i= 1
        while (i < 2000000000) i++
        return ( counterOne % 2 ===0 ? 'even' : 'odd' )
    },[counterOne])

    return (
        <div>
            <div>{counterOne}</div>
            <div>{ isEven }</div>
            <button onClick={ () => { setCounterOne(counterOne + 1) } }>Increment CounterOne</button>

            <div>{counterTwo}</div>
            <button onClick={ () => { setCounterTwo(counterTwo + 1) } }>Incemenet CounterTwo</button>
        </div>
    )
}

export default SimpleUseMemo
