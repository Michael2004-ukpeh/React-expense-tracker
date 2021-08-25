import React, {useContext} from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../context/GlobalState'

const HistoryList = () => {
  const {transactions} = useContext(GlobalContext)
    return (
        <div className = "history-list">
          {transactions.map((transaction) =>{
            return (
                <Transaction key = {transaction.id} {...transaction}/>
            )
          })}
          
        </div>
    )
}

export default HistoryList
