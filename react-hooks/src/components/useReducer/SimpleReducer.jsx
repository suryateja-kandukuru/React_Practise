import React, { useReducer } from 'react'

function SimpleReducer() {

    // useReducer accepts two parameters they are reducer function and initial state
    // reducer takes two parameters they are state and action
    // useReducer returns the current state and dispatch method.
    // dispatch method to update the data.
    // action can be a string, number, object or array. based on the action we will update the state
    // We can also use multiple useReducer's  with different stateName and dispatchName
    // useReducer + useContext will give's us a localstate management for the components

    const reducer = (state, action) => {
        switch(action) {
            case 'increment': return state + 1
            case 'decrement': return state - 1
            default : return state
        }
    }

    const [ counterOne, dispatchOne ] = useReducer(reducer, null)
    const [ counterTwo, dispatchTwo ] = useReducer(reducer, null)

    return (
        <div>
            <div>The current counter one value is { counterOne }</div>
            <button onClick={ () => ( dispatchOne('increment') ) }>Increment</button>
            <button onClick={ () => ( dispatchOne('decrement') ) }>Increment</button>

            <div>The current counter one value is { counterTwo }</div>
            <button onClick={ () => ( dispatchTwo('increment') ) }>Increment</button>
            <button onClick={ () => ( dispatchTwo('decrement') ) }>Increment</button>
        </div>
    )
}

export default SimpleReducer
