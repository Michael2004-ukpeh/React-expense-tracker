import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
const Transaction = ({id, text, amount}) => {
    const {removeTransaction}  = useContext(GlobalContext)
    let amountAbs = amount < 0 ? Math.abs(amount) : amount
    let sign = amount < 0 ? '-' : '+'
    let type = amount < 0 ? 'expense' : 'income'
    return (
      <div className={`transaction ${type}-border`}>
               <Link style = {{ textDecoration: "underline" , color: 'black'}}to ={`/transaction/${id}`}><p>{text}</p></Link> 
               <p className={type}>{sign}${amountAbs.toFixed(2)}</p>
               <span className = {`close-item ${type}`} 
               onClick = {() => removeTransaction(id)}
               >x</span>
        </div>
       
    )
}

export default Transaction
