import React, { createContext, useReducer } from 'react'

const intialState = {
    transactions: [
        { id: 1, name: 'Cash', amount: 500 },
        { id: 2, name: 'Book', amount: -40 },
        { id: 3, name: 'Camera', amount: 200 }
    ]
}

export const context = createContext(intialState)


function Context ({ children }) {

    const reducer = (state, action) => {
        console.log(state, action)
        switch (action.type) {
            case 'ADD': return {
                ...state,
                transactions: [ ...state.transactions, action.payload ]
            }
            case 'DEL': return {
                ...state,
                transactions: state.transactions.filter(t => t.id !== action.payload)
            }

            default: return null
        }
    }

    function add (transaction) {
        console.log(transaction)
        dispatch({
            type: 'ADD',
            payload: transaction
        })
    }
    
    function del (id) {
        dispatch({
            type: 'DEL',
            payload: id
        })
    }

    const [ state, dispatch ] = useReducer(reducer, intialState)

    return (
        <context.Provider value={{
            transactions: state.transactions,
            addTransactions: add,
            deleteTransaction: del
        }}>
            { children }
        </context.Provider>
    )
}

export default Context
