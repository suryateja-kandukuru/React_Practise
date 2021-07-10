import React, { useState, useCallback } from 'react'
import Title from './Title'
import Button from './Button'
import Header from './Header'
function CallbackParent() {

    // The combination of React.memo() with useCallback() hook will prevent unneccessary rendering of the child component
    // When event a parent component have any changes/events the methods are re created automatically so that child component gets re rendered.
    // To prevent that behaviour we go with the useCallback hook to watch only for particular changes.
    // Also we need to add React.memo() to child component to make pure component. so that i will only re render when change in shallow props.

    const initialState = 0

    const [age, setAge] = useState(initialState)
    const  [salary, setSalary] = useState(initialState)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age])
    
    const incrementSal = useCallback(() => {
        setSalary(salary + 1000)
    },[salary])

    return (
        <div>
            <Title />
            <Header name='age' value = { age } />
            <Button name= 'age' handler={ incrementAge }> Increment Age </Button>
            <Header name='salary' value = { salary } />
            <Button name='salary' handler={ incrementSal }> Incremnet salary </Button>

        </div>
    )
}

export default CallbackParent
