import React, { useEffect, useRef } from 'react'

function UseRef() {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
        inputRef.current.value = 'surya di sun'
    })
    return (
        <div>
            <input ref={ inputRef } type="text" />
        </div>
    )
}

export default UseRef
