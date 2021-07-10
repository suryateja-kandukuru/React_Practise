import React, { useContext } from 'react'
import { userData } from './DataProvider'


function DataConsumer() {
    const data = useContext(userData)

    return (
        <div>
            { data } Consuming the data without consumer api. But consuming with context api.
        </div>
    )
}

export default DataConsumer
