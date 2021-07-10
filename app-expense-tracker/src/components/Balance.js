import React, { useContext } from 'react'
import { context } from '../globalState/AppState'
function Balance () {
    const data = useContext(context)
    const amount = data.transactions.map((x) => Number(x.amount))
    const total = amount.reduce((prev, curr) => (prev + curr))
     function formatAmount(amount) {
        return  Number(amount) > 0 ?  `$${Math.abs(amount)}` : `-$${Math.abs(amount)}`
    }
    return (
        <div className="Balance">
           <div className="tb">YOUR BALANCE</div>
            <div className="tb Lfont">{ formatAmount(total) }</div>
        </div>
    )
}

export default Balance
