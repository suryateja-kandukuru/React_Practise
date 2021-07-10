import React from 'react'

function Button(props) {
    console.log(`Button component ${ props.name }`)
    return (
        <div>
            <button onClick={ props.handler }>{ props.children }</button>
        </div>
    )
}

export default React.memo(Button)
