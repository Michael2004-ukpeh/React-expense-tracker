import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
    const { transactions} = useContext(GlobalContext)
    const balance = transactions.reduce((total, item) =>{
         return total += item.amount
    }, 0)
    const type = balance < 0 ? 'expense' : 'income'
    const sign = balance < 0 ? '-' : ''
    let amount = balance < 0 ? Math.abs(balance) : balance
    return (
        <div className = 'balance'>
           <h3>YOUR BALANCE</h3>
           <h1 className = {type} >{sign}$ 
               <span className='balance-text'>{amount.toFixed(2)}</span>
            </h1> 
        </div>
    )
}

export default Balance
