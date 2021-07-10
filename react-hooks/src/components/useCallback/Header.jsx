import React from 'react'

function Header(props) {
    console.log(`Header component ${props.name}`)
    return (
        <div>
            comp - { props.name } { props.value }
        </div>
    )
}

export default React.memo(Header)
