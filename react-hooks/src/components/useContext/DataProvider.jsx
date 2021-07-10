import React, { createContext } from 'react'
import DataConsumer from './DataConsumer'
export const userData = createContext()
const UserDataProvider = userData.Provider

function DataProvider() {
    return (
        <div>
            <UserDataProvider value={ 'Instead sending data as props im sending data with context api.' }>
                <DataConsumer />
            </UserDataProvider>
        </div>
    )
}

export default DataProvider
