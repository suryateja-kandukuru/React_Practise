import React from 'react'

function Title() {
    console.log('Use call back hook title component')

    return (
        <div>
            <h1>Use Callback Hook</h1>
        </div>
    )
}

export default React.memo(Title)
