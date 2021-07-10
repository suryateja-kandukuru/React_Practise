import React, { useContext, useState } from 'react'
import { context } from '../globalState/AppState'
function AddNewTransation () {
    const marStyle = {
        marginTop: '20px'
    }

    const globlState = useContext(context)

    const [name, setName] = useState(null)
    const [amount, setAmount] = useState(null)


    let addTransaction = (e) => {
        e.preventDefault()
        const data = {
            id: Math.floor(Math.random() * 10000000),
            name,
            amount
        }
        console.log(data)
        globlState.addTransactions(data)
    }


    return (
        <div className="Transaction">
            <div style={marStyle} className="history-container">Add new transaction</div>
            <div className="mt10 textInput">
                <form onSubmit={ addTransaction }>
                    <div className="label pb10">Text</div>
                <div className="labelInput pb10">
                    <input type="text" placeholder="Enter text..." onChange={ (e) => setName(e.target.value) } />
                </div>
                <div className="label pb10">Amount<br /><span>
                (negative - expense, positive -income)
                </span></div>
                <div className="labelInput pb10">
                        <input type="text" placeholder="Enter amount..." onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className="" type="submit">Add Transaction</button>
                </form>
            </div>
        </div>
    )
}

export default AddNewTransation
